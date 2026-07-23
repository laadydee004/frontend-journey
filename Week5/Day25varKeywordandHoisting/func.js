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
