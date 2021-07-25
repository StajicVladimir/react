// Primitives ** lowercase **
// numbes, string, boolean

//number int and float
let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;


// more complex types

//array
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

//objects
//object aliases
type Person = {
    name: string;
    age: number;
}
let person: Person;
person = {
    name: 'Max',
    age: 32
};
//array of complex objects
let people: Person[];


//Type inference
let course = 'React - the complete guide';
// course = 1234;

//Union types -WHYYYY!??

let unionFoo: string | number = "foo bla blah";
unionFoo = 1234;

//Functions and types
function add(a: number, b:number) {
    return a + b;
}

function myPrint(value: any) {
    console.log(value);
}

//Generics

function insertAtBegginig<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBegginig(demoArray, -1);