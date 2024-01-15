"use strict";

// Promise
let instance = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rand = Math.floor(Math.random() * 11);
        if (rand > 5) {
            reject(rand);
        } else {
            resolve(rand);
        }
    }, 1000);
});

instance = instance.then(value => {
    console.log(`5以上の値[${value}]が渡ってきました。`);
});

instance = instance.catch(value => {
    console.log(`5未満の値[${value}]が渡ってきたためエラー表示`)
});

instance = instance.finally(() => {
    console.log("処理を終了");
});



let promResolve, promReject;
const prom = new Promise((resolve, reject) => {
    promResolve = resolve;
    promReject = reject;
});

console.log(prom);

promResolve("引数");

console.log(prom);