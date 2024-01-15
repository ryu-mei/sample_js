"use strict";

// コールバック

let iwate = function () {
    console.log("iwate")
}

let prefecture = function(callback) {
    return callback;
}

prefecture(iwate());