const timeout = (sec, fn) =>
  new Promise(resolve =>
      setTimeout(() => {
        fn();
        resolve();
      }, sec * 1000)
  );

// xをゼロにする
let x = 0;

// 3秒待って、xに10を加える
timeout(3, () => x += 10)

// xを表示する
.then(() => { console.log(x) });
