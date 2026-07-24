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


//  Design a Sum All Numbers Algorithm
function sumAll(values){
  let result = 0
  let start = Math.min(values[0],values[1])
  let end = Math.max(values[0], values[1])

  for(let i = start; i <= end; i++){
    result += i
  }
  return result
}

console.log(sumAll([4, 1]))