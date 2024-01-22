function getArrayLength(arr:number[] | string[] | boolean[]): number{
	return arr.length;
}
const array1 = [1,2,3];
const array2 = ["a","b","c"];
const array3 = [true, false, true];

getArrayLength(array1);
getArrayLength(array2);
getArrayLength(array3);

//위에 내용 간략하게 줄여보기
function getArrayLength2<T>(arr:T[]): number{
	return arr.length;
}
const array11 = [1,2,3];
const array22 = ["a","b","c"];
const array33 = [true, false, true];

getArrayLength2<number>(array11);
getArrayLength2<string>(array22);
getArrayLength2<boolean>(array33);

//재사용성이 높은 함수와 클래스 생성
interface Vehicle<T>{
	name: string;
	color: string;
	option: T;
}
const car: Vehicle<{price: number}> = {
	name: 'Car',
	color: 'red',
	option: {
		price: 1000
	}
}
const bike:  Vehicle<boolean> = {
	name: 'Bike',
	color: 'grren',
	option: true
}

//여러개 타입 변수 
const makeArr = <X, Y>(x: X, y: Y): [X, Y] =>{
	return [x, y]
}
const array = makeArr<number, number>(4, 5);

//여러개의 타입 변수 기본값 추가
const makeArr2 = <X, Y = string>(x: X, y: Y): [X, Y] =>{
	return [x, y]
}
const array222 = makeArr2<string>("a","b");

// generics 와 extends 함께 사용해보기.
const makeFullName = <T extends {fristName: string, lastName: string}>(obj: T) => {
	return{
		...obj,
		FullName : obj.fristName + "" + obj.lastName
	}
}
makeFullName({fristName: "John", lastName: "Doe", location:"Seoul"})
