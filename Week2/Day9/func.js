// Array
let fruit = ["apple","Mango","Orange"];
let name = ["Doyinsola", "Oyindamola", "Mojoyinola", "Oyinlola"];
let country = ["Nigeria", "American", "Europe"];

console.log(fruit);
console.log(fruit[2]);
console.log(fruit[0]);

console.log(name);
console.log(name[2]);

console.log(country);
console.log(country[1]);
console.log(fruit.length);

// How Do You Access and Update Elements in an Array?
fruit[3] = "Cherry"
console.log(fruit);
name[1]= "Mary";
console.log(name);
console.log(name[4]);


// How Do You Add and Remove Elements from the Beginning and End of an Array?
// push
name.push("Racheal");
console.log(name);
console.log(name.length);

// pop
let namepop = name.pop("Racheal");
console.log(name);
console.log(namepop);
console.log(name.length);
console.log(namepop.length);


let newCountry = country.pop();
console.log(country);

// unshift
newCountry = country.unshift("France");
console.log(country);

// shift
newCountry = country.shift("France");
console.log(country);



// What Is the Difference Between One-Dimensional and Two-Dimensional Arrays?

// one dimensional

let course = ["javascript","css","php","phyton"];
console.log(course[2]);

// two dimensional

let details = [
    ["Doyinsola",22,"Computer Science","Oyo","Samsung"],
    ["Oyindamola",31,"Biology","Lagos","Apple"],
    ["Mojoyinsola",19,"Physics","Osun","Google"],
    ["Oyinlola",13,"Engineering","Ede","Lenovo"]
];
console.log(details[1][2]);
console.log(details[3][0]);

// What Is Array Destructuring, and How Does It Work?

let [doyinsolaDetail,oyindamolaDetails,mojoyinolaDetails,oyinlolaDetails] = details;

console.log(doyinsolaDetail);
console.log(oyinlolaDetails);
console.log(mojoyinolaDetails);
console.log(oyindamolaDetails);

let [course1,course2,course3,course4] = course;
console.log(course1);
console.log(course2);
console.log(course3);
console.log(course4);

let color = ["Red","Green","Orange","Pink","Purple"]
const [colorRed, , ,colorPink] = color;
console.log(colorRed);
console.log(colorPink);

const school = ["Lautech","OAU"]
const [school1,school2,school3 = "Unilag"] = school;
console.log(school1);
console.log(school2);
console.log(school3);


const score = [38,45,86,35,96,65,73];
const [doyinsolaScore,oyindamolaScore,,mojoyinolaScore,...rest] = score;
console.log(doyinsolaScore);
console.log(oyindamolaScore);
console.log(mojoyinolaScore);
console.log(rest);

// // How Can You Use String and Array Methods to Reverse a String?
// split
let name1 = "Doyinsola"
let charName1 = name1.split("");
console.log(charName1);

let allFruit = ["apple","Mango","Orange"];
let charFruit1 = allFruit[1].split("");
console.log(charFruit1);

// reverse
charFruit1.reverse();
console.log(charFruit1);
charName1.reverse();
console.log(charName1);

// join
let charJoin = charName1.join("");
console.log(charJoin);

// Building a shopping list freecodecamp exercise
console.log("Grocery shopping list");
let shoppingList =[];
console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(shoppingList) {
    return `Current Shopping List: ${shoppingList}`; 
}

console.log(getShoppingListMsg(shoppingList));
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips" );
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
console.log(getShoppingListMsg(shoppingList));
shoppingList[0] = "Canola Oil"
console.log(getShoppingListMsg(shoppingList));

