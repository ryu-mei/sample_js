// let instance = new Promise((resoleve, reject) => {
//     setTimeout(() => {
//         const rand = Math.floor(Math.random() * 11);
//         if(rand < 5){
//             reject(rand);
//         } else {
//             resoleve(rand);
//         }
//     }, 1000);
// });

// instance = instance.then(value => {
//     console.log(`5以上の値[${value}]が渡ってきました。`)
// });

// instance = instance.catch(errorValue => {
//     console.error(`5以下の値[${errorValue}]が渡ってきたためエラー表示`)
// });

// instance = instance.finally(() => {
//     console.log("処理を終了します。")
// });

function promiseFactory(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count++
            console.log(`${count}回目のコールです。時刻:[${new Date().toTimeString()}]`);
            if(count === 3) {
                reject(count);
            } else {
                resolve(count);
            }
        }, 1000);
    });
}

promiseFactory(0)
.then(count => {return promiseFactory(count);})
.then(count => {return promiseFactory(count);})
.then(count => {return promiseFactory(count);})
.then(count => {return promiseFactory(count);})
.catch(errorCount => {
    console.error(`エラーに飛びました。現在のカウントは${errorCount}です。`);
}).finally(() => {
    console.log("処理を終了します。");
})