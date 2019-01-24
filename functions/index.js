const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();
db.settings({
  timestampsInSnapshots: true,
});

const cors = require('cors')({origin: true});

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
        num: Math.floor(Math.random() * 8000000 + 1000000),
        total: 1000000,
      });
      const statementRef = await db.collection('statements').add({
        accountId: accountRef.id,
        amount: 1000000,
        date: new Date().toLocaleDateString(),
        kind: '入金',
        memo: '口座開設',
        total: 1000000,
      });
      response.status(200).send('succeed create account:' + JSON.stringify(request.body));
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
      const accountFromRef = db.collection('accounts').doc(request.body.idFrom);
      const accountToRef = db.collection('accounts').doc(request.body.idTo);
      const accountFrom = await accountFromRef.get();
      const accountTo = await accountToRef.get();
      const amount = request.body.amount;
      const totalFrom = accountFrom.data().total;
      const totalTo = accountTo.data().total;
      const newTotalFrom = totalFrom - amount;
      const newTotalTo = totalTo + amount;
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
      });
      console.log('accountFrom statement add');
      await statementRef.add({
        accountId: accountTo.id,
        amount: amount,
        date: new Date().toLocaleDateString(),
        kind: '入金',
        memo: '振込：' + accountFrom.data().name,
        total: newTotalTo,
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
