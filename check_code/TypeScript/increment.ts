// let age: number = 39;
// let isDone: boolean = true;
// let color: string = 'red';
// const arr: string[] = [];
// arr.push('foo');
// arr.push(1);
// console.log(arr);

// function calc(isSum: boolean) {
//     let a = 100;
//     if (isSum) {
//         let b = a + 1;
//         return b;
//     }
// }

// console.log(calc(true));

// const user: { name: string; age?: number } = {
//     name: 'foo',
//     age: 20
// }

// console.log(user.name);

// const user: any = {
//     name: 'foo',
//     age: 20
// }

// console.log(user.hello());

// function sayHello(name: string): string {
//     return `hello ${name}`
// }

// console.log(sayHello('foo'));

// const age = 10;
// const a = 'foo';
// console.log(age.length);
// console.log(a.length);

type Point = {
    x: number;
    y: number;
}

function printPoint(point: Point) {
    console.log(`${point.x}`);
    console.log(`${point.y}`);
}

printPoint({x: 100, y: 100});

type Age = number;

const age: Age = 200;
console.log(age);