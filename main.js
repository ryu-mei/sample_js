"use strict";

// async
async function asyncFunction() {
    return "hello";
}

asyncFunction().then((returnVal) => {
    console.log(returnVal);
});

const contact = document.querySelector("#contact");
console.log(contact.textContent);
contact.textContent = "コンタクト";