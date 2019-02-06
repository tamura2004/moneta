const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { dialogflow } = require('actions-on-google');

admin.initializeApp();
const db = admin.firestore();
db.settings({
  timestampsInSnapshots: true,
});
const cors = require('cors')({origin: true});

const app = dialogflow();

app.intent('whoishere', async (conv, params) => {
  try {
    console.log(params);
    const now = new Date();
    const startOfDate = now.setHours(0,0,0,0);
    // const query = await db.collection('accounts').where('createdAt', '>', startOfDate).get();
    const query = await db.collection('accounts').get();
    if (query.empty) {
      conv.close('あなたしかいません');
    } else {
      const names = [];
      query.forEach((accountRef) => {
        const name = accountRef.data().name;
        const head = name.slice(0, 2);
        if (head !== '赤城' && head !== '青木' && head !== '白井' && head !== '緑川') {
          names.push(name);
        }
      });
      const who = names.join('さんと、');
      msg = `今ここには${who}さんがいます。ああ、講師の田村さんもいましたね。そういえば。`;
      conv.close(msg);
    }
  }
  catch(err) {
    console.log('ERROR');
    console.log(err);
    conv.close('誰もいません。');
  }
});

app.intent('get-balance', async (conv, params) => {
  try {
    console.log(params);
    const { number } = params;
    const query = await db.collection('accounts').where('num', '==', number).get();
    if (query.empty) {
      const splitAccountNumber = number.split('').join('、');
      const msg = `口座番号${number}の残高は1億円です。嘘です。その口座は見つかりません。`;
      conv.ask(msg);
    } else {
      const accountRef = query.docs[0];
      const { bankName, branchName, name, kind, num, total } = accountRef.data();
      const splitNum = num.split('').join('、');
      const msg = `申し上げます。${bankName}、${branchName}、${name}様の、${kind}預金${splitNum}の残高は、${total}円です。`;
      conv.close(msg);
    }
  }
  catch(err) {
    console.log('ERROR');
    console.log(err);
    conv.close('大変です。システムエラーが発生しています。');
  }
});

exports.getBalance = functions.https.onRequest(app);

exports.createAccount = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const accountRef = await db.collection('accounts').add({
        bankId: request.body.bankId,
        bankName: request.body.bankName,
        branchId: request.body.branchId,
        branchName: request.body.branchName,
        kind: '普通',
        name: request.body.name,
        num: Math.floor(Math.random() * 9000 + 1000).toString(),
        total: 1000000,
        createdAt: new Date(),
      });
      const statementRef = await db.collection('statements').add({
        accountId: accountRef.id,
        amount: 1000000,
        date: new Date().toLocaleDateString(),
        kind: '入金',
        memo: '口座開設',
        total: 1000000,
        createdAt: new Date(),
      });
      response.status(200).send(accountRef.id);
    }
    catch(err) {
      const msg = 'bad account params:' + JSON.stringify(request.body);
      console.log(msg);
      response.status(403).send(msg);
      
    }
  });
});

exports.transfer = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const { idFrom, idTo, amount } = request.body;

      const accountFromRef = db.collection('accounts').doc(idFrom);
      const accountToRef = db.collection('accounts').doc(idTo);
      const accountFrom = await accountFromRef.get();
      const accountTo = await accountToRef.get();
      const totalFrom = accountFrom.data().total;
      const totalTo = accountTo.data().total;
      const newTotalFrom = totalFrom - Number(amount);
      const newTotalTo = totalTo + Number(amount);
      await accountFromRef.update({total: newTotalFrom});
      console.log('accountFrom total update');

      await accountToRef.update({total: newTotalTo});
      console.log('accountTo total update');

      const statementRef = db.collection('statements');
      await statementRef.add({
        accountId: accountFrom.id,
        amount: amount,
        date: new Date().toLocaleDateString(),
        kind: '出金',
        memo: '振込：' + accountTo.data().name,
        total: newTotalFrom,
        createdAt: new Date(),
      });
      console.log('accountFrom statement add');
      await statementRef.add({
        accountId: accountTo.id,
        amount: amount,
        date: new Date().toLocaleDateString(),
        kind: '入金',
        memo: '振込：' + accountFrom.data().name,
        total: newTotalTo,
        createdAt: new Date(),
      });
      console.log('accountTo statement add');
      response.status(200).send('transfer ok:' + JSON.stringify(request.body));
    }
    catch(err) {
      const msg = err + JSON.stringify(request.body);
      console.log(msg);
      response.status(403).send(msg);
    }
  });
});
