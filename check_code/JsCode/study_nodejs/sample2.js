const waitTimes = [300, 100, 200, 500, 400];

function wait(waitTime, name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} ${waitTime}ms waited.`);
      resolve();
    }, waitTime);
  });
}

function foo() {
  return new Promise((resolve) => {
    console.log('hello');
    resolve();
  });
}

(async () => {
  // console.log('start wait');
  // await (async () => {
  //   wait(waitTimes[0], 'wait');
  //   wait(waitTimes[1], 'wait');
  //   wait(waitTimes[2], 'wait');
  //   wait(waitTimes[3], 'wait');
  //   wait(waitTimes[4], 'wait');
  // })();
  // console.log('end wait');
  // await wait(2000, 'end wait');
  // console.log('start Promise.all 1');
  // await (async () => {
  //   await Promise.all([
  //     wait(waitTimes[0], 'Promise.all 1'),
  //     wait(waitTimes[1], 'Promise.all 1'),
  //     foo(),
  //     wait(waitTimes[2], 'Promise.all 1'),
  //     wait(waitTimes[3], 'Promise.all 1'),
  //     wait(waitTimes[4], 'Promise.all 1'),
  //   ]);
  // })();
  // console.log('end Promise.all 1');
  //
  // console.log('start Promse.all 2');
  // await (async () => {
  //   await Promise.all(
  //     waitTimes.map((waitTime) => {
  //       return wait(waitTime, 'Promse.all 2');
  //     })
  //   );
  // })();
  // console.log('end Promse.all 2');
  // console.log('start Promse.all 3');
  // await (async () => {
  //   await Promise.all(
  //     waitTimes.map((waitTime) => {
  //       wait(waitTime, 'Promse.all 3');
  //     })
  //   );
  // })();
  // console.log('end Promse.all 3');
  // await wait(2000, 'end wait');
  //
  // console.log('start Promise.all 4');
  // await (async () => {
  //   await Promise.all(
  //     waitTimes.map(async (waitTime) => {
  //       await wait(waitTime, 'Promise.all 4');
  //     })
  //   );
  // })();
  // console.log('end Promise.all 4');

  // console.log('start Promise.all 5');
  // await (async () => {
  //   await Promise.all(
  //     waitTimes.map(async (waitTime) => {
  //       wait(waitTime, 'Promise.all 5');
  //     })
  //   );
  // })();
  // console.log('end Promise.all 5');
  // await wait(2000, 'end wait');
  // console.log('start for await');
  // await (async () => {
  //   for await (const result of [
  //     wait(waitTimes[0], 'for await'),
  //     wait(waitTimes[1], 'for await'),
  //     wait(waitTimes[2], 'for await'),
  //     wait(waitTimes[3], 'for await'),
  //     wait(waitTimes[4], 'for await'),
  //   ]) {
  //   }
  // })();
  // console.log('end for await');
  //

  // console.log('start for(){await}');
  // await (async () => {
  //   for (const waitTime of waitTimes) {
  //     await wait(waitTime, 'for(){await}');
  //   }
  // })();
  // console.log('end for() {await}');
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
})();
