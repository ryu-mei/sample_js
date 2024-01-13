"use strict";

let val = 0;

setTimeout( () => {val = 1;}, 1000);

// setTimeout関数で1000ミリ秒後に1を代入と指定しているので、console.logの結果は0となる。
console.log(val);