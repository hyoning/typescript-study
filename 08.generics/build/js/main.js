"use strict";
function getArrayLength(arr) {
    return arr.length;
}
const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];
getArrayLength(array1);
getArrayLength(array2);
getArrayLength(array3);
//위에 내용 간략하게 줄여보기
function getArrayLength2(arr) {
    return arr.length;
}
const array11 = [1, 2, 3];
const array22 = ["a", "b", "c"];
const array33 = [true, false, true];
getArrayLength2(array11);
getArrayLength2(array22);
getArrayLength2(array33);
const car = {
    name: 'Car',
    color: 'red',
    option: {
        price: 1000
    }
};
const bike = {
    name: 'Bike',
    color: 'grren',
    option: true
};
//여러개 타입 변수 
const makeArr = (x, y) => {
    return [x, y];
};
const array = makeArr(4, 5);
//여러개의 타입 변수 기본값 추가
const makeArr2 = (x, y) => {
    return [x, y];
};
const array222 = makeArr2("a", "b");
// generics 와 extends 함께 사용해보기.
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { FullName: obj.fristName + "" + obj.lastName });
};
makeFullName({ fristName: "John", lastName: "Doe", location: "Seoul" });
