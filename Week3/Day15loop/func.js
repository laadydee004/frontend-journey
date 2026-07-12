// How Do Loops and Iteration Work in JavaScript?
// for loop
for (let a = 2; a < 5; a++){
    console.log(a);
    
}
for( i = 0; i < 10; i++){
    console.log(i);
    
}

// How Does the For...of Loop Work, and When Should You Use It?

const numbers = [1,2,3,4,5,6];
for(const num of numbers){
    console.log(num);
}


let allNames = ["Doyinsola","Oyindamola","Mojoyinola","Oyinlola"];
for (let names of allNames){
    console.log(names);
    
}

let str = "Learning loop";
for(let char of str){
    console.log(char);
}

let name = "DOYINSOLA";
for(charName of name){
    console.log(charName);
    
}

const people = [
    {name: "Doyinsola",age:22},
    {name: "Oyindamola", age:24},
    {name: "Mojoyinola", age:18},
    {name: "Oyinlola", age: 14}
]

for (let person of people ){
    console.log(`${person.name} is ${person.age} years old`);
    
}

// What Is the For...in Loop, and When Should You Use It?

const fruit = {
    name: "Apple",
    color:"Green",
    price: 100
};

for(const prop in fruit){
    console.log(fruit[prop]);
    
}

let scholarship = {
    name: "Doyinsola",
    course:"Computer Science",
    age: 22,
    address:{
        email: "Laadydee004@gmail.com",
        street: "Ejioku area"
    },
    contact:{
        phone:{
            work: "07059848389",
            home: "0488394958"
        }
    }
}

 for (let details in scholarship){
    console.log(scholarship[details]);
    
 }

 function isObject(obj){
    return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
 }

 for (let details in scholarship){
    if(isObject(scholarship[details])){
        for(let nestedDetails in scholarship[details] ){
            console.log(scholarship[details][nestedDetails]);
            if(isObject(scholarship[details][nestedDetails])){
         for(let anotherNestedDetails in scholarship[details][nestedDetails] ){
            console.log(scholarship[details][nestedDetails][anotherNestedDetails]);
        }
        }
    }
    } 
    else {
        console.log(scholarship[details]);
        
    }
 }



//  chatgpt exercise
let person = [
    {
        name: "Doyinsola",
        age: 22,
        address: {
            email: "Laadydee004@gmail.com",
            street: "Olodo street"
        },
        contact:{
            home: "04895839832",
            work: "9049993939"
        }
    },
    {
        name: "Oyindamola",
        age: 25,
        address: {
            email: "temmyade04@gmail.com",
            street: "ejioku street"
        },
        contact:{
            home: "0394598892",
            work: "88878393839"
        }
    },
    {
        name: "Mojoyinola",
        age: 19,
        address: {
            email: "mojoyinola0348.com",
            street: "Ogomosho street"
        },
        contact:{
            home: "10-49955832",
            work: "2949589539"
        }
    },
    {
        name: "Oyinlola",
        age: 14,
        address: {
            email: "oyinlola20940589.com",
            street: "ifesowapo street"
        },
        contact:{
            home: "2485902032",
            work: "9040439699"
        }
    }
]

for(let detailName of  person ){
    if(detailName.age >= 18){
        console.log(detailName.name);   
    }
}


// const people = [
//     { name:"Doyinsola", age: 22 },
//     { name:"Oyindamola", age: 25 },
//     { name:"Mojoyinola", age: 19 },
//     { name:"Oyinlola", age: 14 },
// ]

// for (const person of people ){
//     if(person.age >= 18){
//         console.log(`${person.name} is an adult.`);
//     }
//     else{
//         console.log(`${person.name} is a minor.`);
        
//     }
// }
// let adults = 0
// let minors = 0
// for (let person of people ){
//     if(person.age >= 18 ){
//         adults++;
     
//     }
//     else{
//         minors++
        
        
//     }

// }
//      console.log(`Adults: ${adults}`);
//      console.log(`Minors: ${minors}`);