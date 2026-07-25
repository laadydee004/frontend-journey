// Implement a DNA Pair Generator
function pairElement(element){
  let elements = []; 
  for(let i = 0; i < element.length; i++){
    let current = element[i]
    let innerElements = []
    if(current === "A"){
      innerElements.push(current,"T")
    }
   else if(current === "T"){
      innerElements.push(current,"A")
      }
   else if(current === "C"){
      innerElements.push(current,"G")
      }
    else if(current === "G"){
      innerElements.push(current,"C")
      }
   elements.push(innerElements)
  }
 
  return elements
}

console.log(pairElement("ATCGA"))



// Implement an HTML Entity Converter

function convertHTML (str){
  let ans = ""
  for(let i = 0; i < str.length; i++){
    let current = str[i]
    if(current === "&"){
      ans += "&amp;"
     
    }
   else if(str[i] === "<"){
      ans += "&lt;" 
    }
   else if(str[i] === ">"){
      ans += "&gt;"
    }
   else if(str[i] === `"`){
      ans += "&quot;"
    }
    else if(str[i] === `'`){
      ans += "&apos;"
    }else {
      ans += current; 
    }
  }
  
  return ans
}
console.log(convertHTML("Dolce & Gabbana"))


// Build an Odd Fibonacci Sum Calculator

function sumFibs(number) {
  let sum = 0;

  let prev = 0;
  let curr = 1;

  while (curr <= number) {

    if (curr % 2 !== 0) {
      sum += curr
    }
    let next = curr + prev;
    prev = curr;
    curr = next
  }

  return sum;
}
console.log(sumFibs(1000))
 


// Implement an Element Skipper 

function dropElements(arr,func){
  for(let i = 0; i < arr.length ; i++){let n = func(arr[i])

    if(n){
     return (arr.slice([i]))    
     }
  } 
return []
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))
// [3, 4]