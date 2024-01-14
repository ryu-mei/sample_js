"use strict";

let val = 0;

setTimeout( function task() {
    val = 1;
}, 0);

// コールスタックが空になるまで実行されないので、setTimeout関数の第二引数が0秒でもconsole.log実行後にsetTimeout関数が実行される。
// console.logの結果は0
console.log(val);