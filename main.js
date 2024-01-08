"use strict";

// const taro = {
//     username: "太郎",
//     password: "taro-pwd",
//     login () {
//         console.log(`ログイン[ ${this.username} / ${this.password}]`);
//     }
// }

// const hanako = {
//     username: "花子",
//     password: "hanako-pwd",
//     login () {
//         console.log(`ログイン[ ${this.username} / ${this.password}]`);
//     }
// }

// class User {
//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//         console.log(this);
//     }

//     login() {
//         this.check();
//         console.log(`ログイン[ ${this.username} / ${this.password}]`);
//     }

//     check() {
//         console.log("ログイン情報をチェックします");
//     }
// }

// const taro = new User("太郎", "taro-pwd");
// console.log(taro);
// taro.login();

// class Human {
//     static TYPE = "普通の人";

//     static staticMove() {
//         console.log(Human.TYPE + "は歩いて移動します。");
//     }

//     constructor(name) {
//         this.name = name;
//     }

//     move() {
//         console.log(this.name + "は歩いて移動します。");
//     }
// }

// const taro = new Human("太郎");
// Human.staticMove();

// taro.move();

class Parent {
    constructor(value) {
        this.parentProp = value;
    }

    parentMethod() {
        console.log("親クラスのメソッド");
    }
}

class Child extends Parent {
    constructor(parentProp, childProp) {
        super(parentProp);
        this.childProp = childProp;
    }
}

const parent = new Parent("aaaaaa");
const childObject = new Child("親", "子");
console.log(parent.parentProp);
console.log(childObject.childProp);

childObject.parentMethod();