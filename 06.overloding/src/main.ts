function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any{
	return a + b;
}
add("hello", "world");
add(1,1);

//union 타입
function saySomthing(word: string | string[] ): string {
	if(typeof word =="string"){
		return word;
	} else if (Array.isArray(word)){
		return word.join(" ");
	} 
	throw new Error("unable to say something")
}
saySomthing(['hello','world'])



// 함수 오버로딩
function saySomthing2(word: string): string
function saySomthing2(word: string[]): string
function saySomthing2(word: any): any{
	if(typeof word =="string"){
		return word;
	} else if (Array.isArray(word)){
		return word.join(" ");
	} 
	throw new Error("unable to say something")
}