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
 
 
 
 
//  Working with Arrays, Variables, and Naming Practices

// What Are Some Common Practices for Naming Variables and Functions?

let isLoading = true;
let hasPermission = false;
let canEdit = true;

function getUserData(){

}
function validateInput(){

}

// functions that returns a boolean

function isValidEmail(email) {
  /* ... */
}

function hasRequiredFields(form) {
  /* ... */
}

// functions that retrieve data it's common to start with the word get:

function getProductDetails(productId) {
  /* ... */
}

function getUserProfile(userId) {
  /* ... */
}


//  functions for event Handler, you might prefix with handle or suffix with handler:

function handleClick(){
  /* ... */
}

function onSubmit(){
  /* ... */
}

function keyPressHandler(){
  /* ... */
}


// How Do You Get the Length for an Array, and How Can You Create an Empty Array of Fixed Length?
const sparseArray = [1,,,4];
console.log(sparseArray.length);

const emptyArray = new Array(7);
console.log(emptyArray);
console.log(emptyArray.length);


const fixedLengthArray = Array.from({length : 4})
console.log(fixedLengthArray);
console.log(fixedLengthArray.length);

const filledArray = new Array(4).fill(0);
console.log(filledArray);
console.log(filledArray.length);


