interface Animal{
    name: string;
}
interface Bear extends Animal{
    honey: boolean;
}
const bear1 = {
    name:'honey bear',
    honey: true
}


type Animal2 = {
    name:String;
}
type Bear2 = Animal2 & {
    honey: boolean;
}
const bear2: Bear2 = {
    name : 'honey bear',
    honey: true
}


interface Animal3 {
    name : string;
}
interface Animal3 {
    honey : boolean
}
const bear3: Animal3 = {
    name : 'honey bear',
    honey: true
}
