// Object
let personDetails= {
    name: "Doyinsola",
    age: 22,
    gender: "Female",
    ethnics:"Black"
};

console.log(personDetails.name);
console.log(personDetails.age);
console.log(personDetails.ethnics);
console.log(personDetails["gender"]);

// How Can You Remove Properties from an Object?
 personDetails= {
    name: "Doyinsola",
    age: 22,
    gender: "Female",
    ethnics:"Black",
    job:"Engineer"
};

delete personDetails.job;
console.log(personDetails["job"]);

// How to Check If an Object Has a Property?

console.log(personDetails.hasOwnProperty("name"));
console.log(personDetails.hasOwnProperty("age"));
console.log(personDetails.hasOwnProperty("career"));

console.log(Object.hasOwn(personDetails,"name"));
console.log(Object.hasOwn(personDetails,"mentor"));
console.log(Object.hasOwn(personDetails,"gender"));


console.log("name" in personDetails);

console.log(personDetails.name === undefined);
console.log(personDetails.gender !== undefined);

// How Do You Work with Accessing Properties from Nested Objects and Arrays in Objects?
const student ={
    name: "Doyinsola",
    age: 21,
    matricNo: 200601,
    contact: {
        email:"doyinbee004@gmail.com",
        phoneNumber:{
            work: "090349395504",
            home: "0200456066"
        }
    }
}

console.log(student.contact.phoneNumber.home);
console.log(student["contact"]["phoneNumber"]["work"]);


let ownedValue = {
    name:[
        {firstName:"Doyinsola",lastName:"Bello"},
        {firstName:"Oyindamola",lastName:"Bello"}
    ],
    age:[
        {
            deeAge: 22,
            oyAge: 24
        }
    ],
    addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
}
console.log(ownedValue.name[1].lastName);
// console.log(ownedValue["name"][2][lastName]);
console.log(ownedValue.addresses[0].city);


// What Is the Difference Between Primitive and Non-Primitive Data Types?
// primitive can't be change[variable]
let num1 = 22;
let num2 = num1;
num1 = 15;
console.log(num2);
console.log(num1);

// Non-Primitive  can be change [function,obect,array]
let person = {name:"Racheal",age:23,gender:"Female"};
let copyPerson = person;
person.age = 19;
console.log(person.age);
console.log(copyPerson.age);


// What Is the Difference Between Functions and Object Methods?

let newUser = {
    name: "Doyinsola",
    age: 22,
    gender: "Female",
    saywelcome: function (){
        return `${this.name} welcome to the world of javascript, we're glad you're here`;
    },
    contact:{
        phone: "090-24-34-87",
        email: "doyinbee004@gmail.com"
    }
}

console.log(newUser.saywelcome());

// What Is the Object() Constructor, and When Should You Use It?
const num = 42;
const name2 = "Mercy";
const numObj = Object(name2, num);

console.log(numObj);
console.log(typeof numObj);

function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

console.log(toObject([1, 2, 3]));

// Build a wildlife tracker freecode exercise
const tiger = {
    species:"Tiger",
    age:5,
    isEndangered:true
}
const elephant = {
    species:"Elephant",
    age:10,
    isEndangered:true
}
function getSpecies(animal){
  return `${animal.species}`;
}
console.log(getSpecies(elephant));

function getAge(animal){
  return animal.age;
}
console.log(getAge(tiger));

function addHabitat(animal,habitat){
  animal.habitat = habitat;
  return animal;
}
console.log(addHabitat(tiger, "Rainforest"));

function updateAge(animal,newAge){
  animal.age = newAge;
  return animal;
}
console.log(updateAge(elephant,12));

function removeEndangeredStatus(animal){
  delete animal.isEndangered;
  return animal;
}
console.log(removeEndangeredStatus(tiger));

function hasHabitat(animal){
  return animal.hasOwnProperty("habitat");
}
console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));


function getProperty(animal,propertyName){
  propertyName = ["animal"]["species"];
  return animal;
}
console.log(getProperty(tiger,"species"));

// function getProperty(animal,propertyName){
//   if(propertyName === "species"||propertyName === "age"){
//     return animal[propertyName];
//   }
// }
// console.log(getProperty(tiger,"species"));
// console.log(getProperty(elephant,"age"));

function getProperty(animal,propertyName){
    return animal[propertyName];
}
console.log(getProperty(tiger,"species"));
console.log(getProperty(elephant,"age"));

// Build a Cargo Manifest Validator
let userStories = {
  containerId: 0,
  destination:405,
  weight: -84,
  unit: "pounds",
  hazmat: "no"
}

function normalizeUnits (manifest){
  let copyUserStories = {...manifest}
  if(copyUserStories.unit === "kg"){
    return copyUserStories
  } else if(copyUserStories.unit === "lb"){
    copyUserStories.weight = copyUserStories.weight * 0.45;
    copyUserStories.unit = "kg"
    return  copyUserStories
  }
}
console.log(normalizeUnits(userStories))
console.log(userStories)


function validateManifest(manifest){
  let copyUserStories = {}
  
  if (manifest.containerId === undefined){
     copyUserStories.containerId = "Missing"
  }else if (typeof manifest.containerId !== "number" || manifest.containerId <= 0 || manifest.containerId % 1 !== 0){
    copyUserStories.containerId = "Invalid"
  }if (manifest.destination === undefined){
    copyUserStories.destination = "Missing"
  }else if (typeof manifest.destination !== "string" || manifest.destination.trim() === ""){
    copyUserStories.destination = "Invalid"
  }if (manifest.unit === undefined){
    copyUserStories.unit = "Missing"
  }else if (manifest.unit !== "kg" &&  manifest.unit !== "lb"){
    copyUserStories.unit = "Invalid"
  }if (manifest.weight === undefined){
     copyUserStories.weight = "Missing"
  }else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || manifest.weight % 1 !== 0){
    copyUserStories.weight = "Invalid"
  }if (manifest.hazmat === undefined){
     copyUserStories.hazmat = "Missing"
  }else if (typeof manifest.hazmat !== "boolean" ){
    copyUserStories.hazmat = "Invalid"
  }
 return copyUserStories
}
console.log(validateManifest(userStories))
console.log(userStories)

function processManifest(manifest){
  let error = validateManifest(manifest)
 if(error.containerId === undefined && error.destination === undefined && error.weight === undefined && error.unit === undefined && error.hazmat === undefined){
  let normalized = normalizeUnits (manifest)
   console.log(`Validation success: ${manifest.containerId}`)
   console.log(`Total weight: ${normalized.weight} kg`)
 } else{
  console.log(`Validation error: ${manifest.containerId}`)
  console.log(error)
 }
 }

console.log(processManifest(userStories))