//Boolean
let boolean: boolean
let falseBoolean: boolean = false;

//Number
let number: number
let integer: number  = 6
let float: number = 1.2345

//String
let string: string
let firstName: string = 'Doe';

//Array
//한가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim'] 
let names2: Array<string> = ['John', 'Kim'] //위와 같음

//여러가지 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2]; //위와 같음

//여러 타입을 단언 X Any
let someArray: any[] = ['John', 1, [], {}, false]

//interface, type

//읽기 전용 배열 생성(readonly, readonlyArray)
let stringArray: readonly String[] = ['A','B'];
let numberArray: ReadonlyArray<number> = [1,2]

// tuple 
let tuple1: [string, number];
tuple1 = ['a', 1];

let users: [number, string][]

users = [[1, 'john'], [2, 'Doe']]

let tuple2: [string, number]
tuple2 = ['a',1]


//any
let any: any = 'abc';
any = 1;
any = [];

//unkown
let unknown: unknown = false;
let string1: boolean = unknown as boolean;

//object
let obj: object = {};
let arr: object = [];
let date: object = new Date();

const ob1: {id: number, title: string} = {
    id:1,
    title: 'title1'
}

//Union
let union: (string | number)
union = 'hi';
union = 123;

//Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y){
    return x * y
}

let func2: ()=> void;
func2 = function(){
    console.log('hi');
}

//void
function greeting(): void{
    console.log('h1');
}
const h1: void = greeting()
console.log(h1)

//never
function throwError(): never{
    throw new Error('error');
}

function keepProcessing(): never{
    while(true){
        console.log('h1');
    }
}
