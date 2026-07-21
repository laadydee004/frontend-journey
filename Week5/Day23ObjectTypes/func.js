// Working with Types and Objects
const greeting = "Hello, World!"
const greetingObject = new Object ("Hello, World!");
console.log(greetingObject);
console.log(typeof greetingObject);
console.log(greeting);


const num = 10
const numString = num.toString(10)
console.log(num);
console.log(numString);

const num2 = 10
console.log(num2.toString(2));

const arr = [1,2,3,4];
console.log(arr.toString());

const person = {
    name: "Doyinsola",
    age: 22,
    gender: "female"
}
console.log(person.toString());

console.log(person.age.toString(2));


// What Is the Number Constructor, and How Does It Work for Type Coercion?

const myNum = new Number("22");
console.log(myNum);
console.log(typeof myNum);

const myNum2 = Number("33");
console.log(typeof myNum2);
console.log(myNum2);


const myName = Number("Doyinsola")
console.log(myName);
console.log(typeof myName);


 const boolTrue = Number(true);
 const boolFalse = Number(false)

 console.log(boolTrue);
 console.log(boolFalse);

 console.log(typeof boolTrue);

 const undefi = Number(undefined);
 const nullnum = Number(null);
 console.log(undefi);
 console.log(nullnum);
 
 
 
 
 