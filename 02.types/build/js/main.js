"use strict";
//Boolean
let boolean;
let falseBoolean = false;
//Number
let number;
let integer = 6;
let float = 1.2345;
//String
let string;
let firstName = 'Doe';
//Array
//한가지 타입만 가지는 배열
let names1 = ['John', 'Kim'];
let names2 = ['John', 'Kim']; //위와 같음
//여러가지 타입을 가지는 배열(유니언 타입 사용)
let array1 = ['John', 1, 2];
let array2 = ['John', 1, 2]; //위와 같음
//여러 타입을 단언 X Any
let someArray = ['John', 1, [], {}, false];
//interface, type
//읽기 전용 배열 생성(readonly, readonlyArray)
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
// tuple 
let tuple1;
tuple1 = ['a', 1];
let users;
users = [[1, 'john'], [2, 'Doe']];
let tuple2;
tuple2 = ['a', 1];
//any
let any = 'abc';
any = 1;
any = [];
//unkown
let unknown = false;
let string1 = unknown;
//object
let obj = {};
let arr = [];
let date = new Date();
const ob1 = {
    id: 1,
    title: 'title1'
};
//Union
let union;
union = 'hi';
union = 123;
//Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hi');
};
//void
function greeting() {
    console.log('h1');
}
const h1 = greeting();
console.log(h1);
//never
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('h1');
    }
}
