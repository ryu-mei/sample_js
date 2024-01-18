"use strict";


// ここから下はポートフォリオ作成のためのプログラム
{
    // 背景をクリックしたときにCSSを変えるプログラム
    const navBox = document.querySelector(".navBox");
    navBox.addEventListener("click", displayNav);

    function displayNav() {
        console.log("クリックされました")
        navBox.classList.remove("navBox");
        const getNav = document.querySelector(".nav");
        getNav.classList.remove("nav");
    }
}
