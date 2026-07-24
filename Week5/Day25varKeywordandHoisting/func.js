console.log(x);
var x = 5
console.log(x);

sayHello();

function sayHello(){
  console.log("Hello, World!");
}

// Build a Title Case Converter

function titleCase(str){
  let strCase = str.split(" ")
  let upperCase = ""
  for(let i = 0; i < strCase.length; i++){
    let word = strCase[i];
    upperCase += word[0].toUpperCase() + word.slice(1).toLowerCase() + " "
  }
  return upperCase.trim() 
}
 
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) 

// Implement a Falsy Remover
function bouncer(arr){
   let notFalsy = []
  for(let list of arr){
    if(list){
      notFalsy.push(list)
    }
    
  }
  return notFalsy
}

console.log(bouncer([7, "ate", "", false, 9]))
console.log(bouncer([false, null, 0, NaN, undefined, ""])) 


// Build an Inventory Management Program

const inventory = [
//     {
//   name : "Doyinsola",
//   quantity : 2
// }, 
//   {
//   name : "flour",
//   quantity : 2
// } 
];
function findProductIndex(name){
 for(let i = 0; i < inventory.length; i++){
  if(inventory[i].name.toLowerCase() === name.toLowerCase()){
    return i
  }
  
 }
return -1
}

// console.log(findProductIndex("flour"))

function addProduct(product){
  let index = findProductIndex(product.name) 
 let result = {
  name: product.name.toLowerCase(),
  quantity: product.quantity
 }
  if(index === -1){
    inventory.push(result) 
  console.log(`${product.name.toLowerCase()} added to inventory`)
  }else if(index !== -1){
     inventory[index].quantity += product.quantity
    console.log(`${product.name.toLowerCase()} quantity updated`)
  }
  return inventory;
}

// console.log(addProduct({name: "FLOUR", quantity: 5}))

function removeProduct(name,quantity){
  let index = findProductIndex(name)
  if(index === -1){
    console.log(`${name.toLowerCase()} not found`)
  } else{
    if(quantity > inventory[index].quantity){
      console.log(`Not enough ${name.toLowerCase()} available, remaining pieces: ${inventory[index].quantity}`)
       return inventory 
    }
   inventory[index].quantity -= quantity  
    if(inventory[index].quantity <= 0){
   inventory.splice(index,1) 
    return inventory;
  }
   console.log(`Remaining ${name.toLowerCase()} pieces: ${inventory[index].quantity}`)
  }
  return inventory  
}
// console.log(removeProduct("flour", 15))
// let pers = {
//   name: "Doy",
//   gen: "female"
// }
// console.log(pers.length)
