let numbers = [1,2,3,4,5];
 numbers.forEach(function(number){
    console.log(number * 2);
 })

 let names = ["Doyinsola", "Oyindamola", "Mojoyinsola", "Oyinlola"];
 names.forEach(function(name){
    console.log(`Welcome ${name}`)
 })

 numbers.forEach(number => console.log(number * 2))

 names.forEach((name,index,array) => {
    console.log(`Element ${name} at index ${index} in array ${array}`);
    
 })


//  What Are Higher-Order Functions?
function operateOnArray(arr, operation){
   let result = []
   for(let i = 0; i < arr.length; i++){
      result.push(operation(arr[i]));
   }
   return result;
}
function double(x){
     return  x * 2
   }

console.log(operateOnArray([1,2,3,4,5],double));


function multiply(factor){
   return function (number){
      return number * factor
   }
}

console.log(multiply(3)(5));

// What Is the map Method, and How Does It Work?

let allNumbers = [1,2,3,4,5];
let doubled = allNumbers.map((num) => num * 2);
console.log(allNumbers);
console.log(doubled);

let userNames = ["Laadydee","Delzy","Luna","Ak"]
console.log(userNames.map((name) => `Welcome back ${name}`));
console.log(userNames.map((name,index,array)=> `Welcome back ${name} at ${index} in ${array}`));


// What Is the Filter Method, and How Does It Work?

let anotherNumbers = [1,2,3,4,5,6,7,8,9,10];
console.log(anotherNumbers.filter((number) => number % 2 === 0));
let personalNames = ["Doyinsola", "Oyindamola", "Mojoyinsola", "Oyinlola"]
console.log(personalNames.filter((name) => name.length <= 8 ));


const voters = [
   {name: "Doyinsola", age: 22},
   {name: "Oyindamola", age: 24},
   {name: "Mojoyinola", age: 17},
   {name: "Oyinlola", age: 14},
   {name: "Ramon", age: 60},
   {name: "Kemi", age: 45}
]
let underAge = voters.filter((person) => person.age < 18)
console.log(underAge);


// What Is the Reduce Method, and How Does It Work?
const anotherNumbers2 = [1, 2, 3, 4, 5, 6];
const sum = anotherNumbers2.reduce((accumulator, currentValue) => accumulator + currentValue , 0);
console.log(sum);



// What Is Method Chaining, and How Does It Work?

const greeting = "Hello, world!"
.trim()
.toLowerCase()
.replace("world!", "Doyinsola")
console.log(greeting);


// What Is Method Chaining, and How Does It Work?

const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" }
];


const totalCreditWithBonus = transactions
.filter((transactions) => transactions.type ===  "credit")
.map((transactions) => transactions.amount * 1.1)
.reduce((sum,amount) => sum + amount , 0)

console.log(totalCreditWithBonus);

const totalCashWithBonus = transactions
.filter((transactions) => transactions.type ===  "cash")
.map((transactions) => transactions.amount * 1.5)
.reduce((sum,amount) => sum + amount , 0)

console.log(totalCashWithBonus);


const calculator = {
   total: 0,
   add(n) {
      this.total +=  n;
      return this;

   },
   multiply(n) {
      this.total *=  n;
      return this;

   },
   subtract(n) {
      this.total -=  n;
      return this;

   },
  getResult(){
   return this.total;
  }
};

let result = calculator.add(12).multiply(8).subtract(20).getResult();
console.log(result);


// How Does the Sort Method Work?

const fruits = ["Mango", "Orange", "Grape", "Apple", "Banana"]
console.log(fruits.sort());

const evenNumber = [2,8,16,26,102,4,20,38]
console.log(evenNumber.sort());

console.log(evenNumber.sort((a,b) => a-b));

// Handling undefined Values and Empty Slots

const anotherFruits = ["Mango", "Orange", undefined, "Grape", "Apple", "Banana", "Cherry"];
anotherFruits.sort();
console.log(anotherFruits);


const anotherFruits2 = ["Mango", , "Orange", "Cashew", undefined, , "Grape", "Apple", , "Banana", "Cherry"];
anotherFruits2.sort();
console.log(anotherFruits2);


// How Do the every() and some() Methods Work?

const numbers2 = [2,4,6,8,10,22];
console.log(numbers2.every((number) => number % 2 === 0));

const Fruits2 = ["Mango", , "Orange", "Cashew", undefined, , "Grape", "Apple", , "Banana", "Cherry"];

console.log(Fruits2.every((fruit) => fruit && fruit.length > 3));
console.log(Fruits2.some((fruit) => fruit && fruit.length > 3));
