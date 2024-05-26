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

const array = [100, 300, 400, 200];
console.log('start');
(async () => {
  await Promise.all(
    array.map((arr) => {
      return wait(arr, 'promise.all 2');
    })
  );
  console.log('waited');
})();
console.log('end');
