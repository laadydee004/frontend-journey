// Implement a Unique Sorted Union
function uniteUnique(){
  let arr = []
  
  for(const arg of  arguments){
    for(const value of arg){
      if(!arr.includes(value)){
        arr.push(value)
      }
    }
    
  }
  return arr
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))



// Build a Password Generator App

function generatePassword(passwordLength){
  let randomPassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  let pass = "";
  for(let i =  0; i < passwordLength; i++){
  let passwordIndex = Math.floor(Math.random()*randomPassword.length)
 let character = randomPassword[passwordIndex]
  pass += character
  }
 
 return pass 
}
let password = generatePassword(8)
 console.log(`Generated password: ${password}`)