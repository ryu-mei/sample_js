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
  // console.log('start then mechod chain 1');
  // await (() =>
  //   new Promise((resolve) => {
  //     wait(waitTimes[0], 'then mechod chain 1')
  //       .then(() => wait(waitTimes[1], 'then mechod chain 1'))
  //       .then(() => wait(waitTimes[2], 'then mechod chain 1'))
  //       .then(() => wait(waitTimes[3], 'then mechod chain 1'))
  //       .then(() => wait(waitTimes[4], 'then mechod chain 1'))
  //       .then(() => {
  //         resolve();
  //       });
  //   }))();
  // console.log('end then mechod chain 1');
  // //
  // console.log('start then mechod chain 2');
  // await (() =>
  //   new Promise((resolve) => {
  //     wait(waitTimes[0], 'then mechod chain 2')
  //       .then(() => {
  //         wait(waitTimes[1], 'then mechod chain 2');
  //       })
  //       .then(() => {
  //         wait(waitTimes[2], 'then mechod chain 2');
  //       })
  //       .then(() => {
  //         wait(waitTimes[3], 'then mechod chain 2');
  //       })
  //       .then(() => {
  //         wait(waitTimes[4], 'then mechod chain 2');
  //       })
  //       .then(() => {
  //         resolve();
  //       });
  //   }))();
  // console.log('end then mechod chain 2');
  // await wait(2000, 'end wait');
  //

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
  //
})();
