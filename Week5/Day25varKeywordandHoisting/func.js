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

