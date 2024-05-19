const waitTimes = [300, 100, 200, 500, 400];

function wait(waitTime, name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} ${waitTime}ms waited.`);
      resolve();
    }, waitTime);
  });
}

(async () => {
  console.log('start wait');
  await (async () => {
    wait(waitTimes[0], 'wait');
    wait(waitTimes[1], 'wait');
    wait(waitTimes[2], 'wait');
    wait(waitTimes[3], 'wait');
    wait(waitTimes[4], 'wait');
  })();
  console.log('end wait');
  await wait(2000, 'end wait');
  // 単に Promise オブジェクトを生成すると並列に実行され
  // end も待機しない
  // start wait
  // end wait
  // wait 100ms waited.
  // wait 200ms waited.
  // wait 300ms waited.
  // wait 400ms waited.
  // wait 500ms waited.

  console.log('start Promise.all 1');
  await (async () => {
    await Promise.all([
      wait(waitTimes[0], 'Promise.all 1'),
      wait(waitTimes[1], 'Promise.all 1'),
      wait(waitTimes[2], 'Promise.all 1'),
      wait(waitTimes[3], 'Promise.all 1'),
      wait(waitTimes[4], 'Promise.all 1'),
    ]);
  })();
  console.log('end Promise.all 1');
  // Promise.all で並列に実行され、終了も待機することができる
  // start Promise.all 1
  // Promise.all 1 100ms waited.
  // Promise.all 1 200ms waited.
  // Promise.all 1 300ms waited.
  // Promise.all 1 400ms waited.
  // Promise.all 1 500ms waited.
  // end Promise.all 1

  console.log('start Promise.all 2');
  await (async () => {
    await Promise.all(
      waitTimes.map((waitTime) => {
        return wait(waitTime, 'Promise.all 2');
      })
    );
  })();
  console.log('end Promise.all 2');
  // Promise.all に Promise オブジェクトの配列を渡す場合は
  // 並列に実行され、終了も待機することができる
  // start Promise.all 2
  // Promise.all 2 100ms waited.
  // Promise.all 2 200ms waited.
  // Promise.all 2 300ms waited.
  // Promise.all 2 400ms waited.
  // Promise.all 2 500ms waited.
  // end Promise.all 2

  console.log('start Promise.all 3');
  await (async () => {
    await Promise.all(
      waitTimes.map((waitTime) => {
        wait(waitTime, 'Promise.all 3');
      })
    );
  })();
  console.log('end Promise.all 3');
  await wait(2000, 'end wait');
  // Promise.all に Promise オブジェクトの配列を渡さない場合は
  // 待機されずに実行されるので、end が先に実行される
  // start Promise.all 3
  // end Promise.all 3
  // Promise.all 3 100ms waited.
  // Promise.all 3 200ms waited.
  // Promise.all 3 300ms waited.
  // Promise.all 3 400ms waited.
  // Promise.all 3 500ms waited.

  console.log('start Promise.all 4');
  await (async () => {
    await Promise.all(
      waitTimes.map(async (waitTime) => {
        await wait(waitTime, 'Promise.all 4');
      })
    );
  })();
  console.log('end Promise.all 4');
  // Promise.all に async 関数を渡して
  // await で待機すると、Promise オブジェクトを渡したのと同じく動作する
  // start Promise.all 4
  // Promise.all 4 100ms waited.
  // Promise.all 4 200ms waited.
  // Promise.all 4 300ms waited.
  // Promise.all 4 400ms waited.
  // Promise.all 4 500ms waited.
  // end Promise.all 4

  console.log('start Promise.all 5');
  await (async () => {
    await Promise.all(
      waitTimes.map(async (waitTime) => {
        wait(waitTime, 'Promise.all 5');
      })
    );
  })();
  console.log('end Promise.all 5');
  await wait(2000, 'end wait');
  // Promise.all にasync関数を渡すが
  // async 関数内で await しないと
  // 待機されずに実行されるので、end が先に実行される
  // start Promise.all 5
  // end Promise.all 5
  // Promise.all 5 100ms waited.
  // Promise.all 5 200ms waited.
  // Promise.all 5 300ms waited.
  // Promise.all 5 400ms waited.
  // Promise.all 5 500ms waited.

  console.log('start for await');
  await (async () => {
    for await (const result of [
      wait(waitTimes[0], 'for await'),
      wait(waitTimes[1], 'for await'),
      wait(waitTimes[2], 'for await'),
      wait(waitTimes[3], 'for await'),
      wait(waitTimes[4], 'for await'),
    ]) {
    }
  })();
  console.log('end for await');
  // for await は並列に実行され、終了も待機することができる
  // start for await
  // for await 100ms waited.
  // for await 200ms waited.
  // for await 300ms waited.
  // for await 400ms waited.
  // for await 500ms waited.
  // end for await

  console.log('start for() { await }');
  await (async () => {
    for (const waitTime of waitTimes) {
      await wait(waitTime, 'for() { await }');
    }
  })();
  console.log('end for() { await }');
  // for 内で await すると、順次実行される
  // start for() { await }
  // for() { await } 300ms waited.
  // for() { await } 100ms waited.
  // for() { await } 200ms waited.
  // for() { await } 500ms waited.
  // for() { await } 400ms waited.
  // end for() { await }

  console.log('start then callback');
  await (() =>
    new Promise((resolve) => {
      wait(waitTimes[0], 'then callback').then(() => {
        wait(waitTimes[1], 'then callback').then(() => {
          wait(waitTimes[2], 'then callback').then(() => {
            wait(waitTimes[3], 'then callback').then(() => {
              wait(waitTimes[4], 'then callback').then(() => {
                resolve();
              });
            });
          });
        });
      });
    }))();
  console.log('end then callback');
  // Promise オブジェクトの then 内で さらに then を呼び出して
  // 連続コールバック関数を使うと、順次実行される
  // start then callback
  // then callback 300ms waited.
  // then callback 100ms waited.
  // then callback 200ms waited.
  // then callback 500ms waited.
  // then callback 400ms waited.
  // end then callback

  console.log('start then mechod chain 1');
  await (() =>
    new Promise((resolve) => {
      wait(waitTimes[0], 'then mechod chain 1')
        .then(() => wait(waitTimes[1], 'then mechod chain 1'))
        .then(() => wait(waitTimes[2], 'then mechod chain 1'))
        .then(() => wait(waitTimes[3], 'then mechod chain 1'))
        .then(() => wait(waitTimes[4], 'then mechod chain 1'))
        .then(() => {
          resolve();
        });
    }))();
  console.log('end then mechod chain 1');
  // Promise オブジェクトの then のメソッドチェーンを使って
  // then 内で Promise オブジェクトを return すると、順次実行される
  // start then mechod chain 1
  // then mechod chain 1 300ms waited.
  // then mechod chain 1 200ms waited.
  // then mechod chain 1 500ms waited.
  // then mechod chain 1 400ms waited.
  // end then mechod chain 1

  console.log('start then mechod chain 2');
  await (() =>
    new Promise((resolve) => {
      wait(waitTimes[0], 'then mechod chain 2')
        .then(() => {
          wait(waitTimes[1], 'then mechod chain 2');
        })
        .then(() => {
          wait(waitTimes[2], 'then mechod chain 2');
        })
        .then(() => {
          wait(waitTimes[3], 'then mechod chain 2');
        })
        .then(() => {
          wait(waitTimes[4], 'then mechod chain 2');
        })
        .then(() => {
          resolve();
        });
    }))();
  console.log('end then mechod chain 2');
  await wait(2000, 'end wait');
  // Promise オブジェクトの then のメソッドチェーンを使って
  // then 内で Promise オブジェクトを return しないと、
  // wait(waitTimes[0] だけ待機したあとに end が実行され
  // あとは平行実行される
  // start then mechod chain 2
  // then mechod chain 2 300ms waited.
  // end then mechod chain 2
  // then mechod chain 2 100ms waited.
  // then mechod chain 2 200ms waited.
  // then mechod chain 2 400ms waited.
  // then mechod chain 2 500ms waited.

  console.log('start then mechod chain 3');
  await (() =>
    new Promise((resolve) => {
      wait(waitTimes[0], 'then mechod chain 3')
        .then(wait(waitTimes[1], 'then mechod chain 3'))
        .then(wait(waitTimes[2], 'then mechod chain 3'))
        .then(wait(waitTimes[3], 'then mechod chain 3'))
        .then(wait(waitTimes[4], 'then mechod chain 3'))
        .then(() => {
          resolve();
        });
    }))();
  console.log('end then mechod chain 3');
  await wait(2000, 'end wait');
  // Promise オブジェクトの then のメソッドチェーンを使って
  // then 内で Promise オブジェクトを返す関数を渡すと
  // 並行実行され、wait(waitTimes[0] のあとに end が実行される
  // start then mechod chain 3
  // then mechod chain 3 100ms waited.
  // then mechod chain 3 200ms waited.
  // then mechod chain 3 300ms waited.
  // end then mechod chain 3
  // then mechod chain 3 400ms waited.
  // then mechod chain 3 500ms waited.
})();
