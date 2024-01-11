"use strict";

function sleep (ms) {
    setTimeout(function() {
        alert("sleep関数が完了しました。");
    }, ms);
}

sleep(5000); // 後の処理に関わらず5秒後に処理が実行される。


// ボタンがクリックされたときに実行される。
const button = document.querySelector("button");
function clickHandler() {
    alert("ボタンがクリックされました。")
}

button.addEventListener("click", clickHandler);