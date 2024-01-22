// pertial partial 를 쓰면 address 에 있는 타입 중 하나를 사용할 수 있음.
interface Address{
	email: string;
	address: string;
}

const me: Partial<Address>  = {}; 
const you: Partial<Address> = {email: 'john@abc.com'};
const all: Address = {email: 'john@abc.com', address: 'john'};


//Pick 특정 타입에서 몇개의 속성을 pick 해서 타입을 새롭게 정리 할 수 있음. 
interface Todo{
	title: string;
	description: string;
	completed: boolean;
}
type TodoPreview = Pick<Todo, "title" | "completed">

const todo : TodoPreview = {
	title : "Clean Room",
	completed: false
}


//Omit (생략하다) 특정 속성만 제거 할 수 있다.
interface Todo2{
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
}
type TodoPreview2 = Omit<Todo2, "description">;

const todo2: TodoPreview2 = {
	title: "Clean Room",
	completed: false,
	createdAt : 12342434,
}


//Required 선택사항 속성을 필수로 바꿔줄 수 있다.
type User = {
	firstName: string,
	lastName?: string //선택사항
}
let firstUser: User = {
	firstName: "john"
}
let secondUser: Required<User> = {
	firstName:"John",
	lastName: ""
}

//Record type의 속성을 다른 type에 매핑하는 데 사용할 수 있다. 
interface CatInfo{
	age: number;
	bread: string;
}
type CatName = "miffy" | "boris" | "morderd";

const cats: Record<CatName, CatInfo> ={
	miffy: {age: 10, bread: "Persion"},
	boris: {age: 5, bread: "Maine Coon"},
	morderd: {age: 16, bread:"British Shorthair"}
}
cats.boris;


// ReturnType <T> 함수 T의 반환 타입으로 구성된 타입을 말한다.
type T0 = ReturnType<() => string> //string
type T1 = ReturnType<(s:string) => void>//void

function fn(str: string){
	return str;
}

const a: ReturnType<typeof fn> = "hello";
