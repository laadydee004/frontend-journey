// Build a Factorial Calculator

const num = 5;
function factorialCalculator(num){
  if(num >= 1 && num <= 20){
    let result = 1;
    for(let i = 1; i <= num; i++){

      result = result * i
      
  } 
  return result
  }
  
  
}
let factorial = factorialCalculator(num)
console.log(factorial )

let resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)


// Implement the Mutations Algorithm

const algorithm = []

function mutation(algorithm){
  let firstWord = algorithm[0].toLowerCase();
  let secondWord = algorithm[1].toLowerCase();
  for(let char of secondWord ){
    if(!firstWord.includes(char)){
      return false
    } 
  
  }
    return true
}
let check = mutation(["hello", "hey"])
console.log(check)
check = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
console.log(check)
