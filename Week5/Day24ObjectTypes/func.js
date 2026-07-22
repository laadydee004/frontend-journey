// Working with Code Quality and Execution Concepts

// What Are Closures, and How Do They Work?

function outerFunction(x) {
    let y = 10;
    function innerFunction(){
        console.log(x + y);
    }
    return innerFunction;
}

let closure = outerFunction(5);
console.log(closure());
console.log(closure);

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter());
console.log(counter());


function multiply(x) {
    return function (y) {
        return x * y;
    };
}

let double = multiply(2);
console.log(double(5));


// "Build a String Inverter"
function reverseString(str){
  let strback = [...str];
  let reversed = strback.reverse();
  return reversed.join("");
}

console.log(reverseString("hello"));


// Build the Largest Number Finder
function largestOfAll(arr){
  let largestNumbers = []
  for(let i = 0; i < arr.length; i++){
        let max = Math.max(...arr[i]);
          
    largestNumbers.push(max)
       
  }
  return largestNumbers
}


console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))


// Build a First Element Finder

 function findElement(arr,func){
  
  
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i]))
    
    return arr[i]
    }
    
  }
 
 

 console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0}))
