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


//  Implement the Slice and Splice Algorithm

 function frankenSplice(arr1, arr2, index){
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  copy2.splice(index,0,...copy1);
  return copy2
}  
console.log(frankenSplice([1, 2, 3], [4, 5], 1) )


// Build a Pyramid Generator

function pyramid(str, num, bool){
  let result = "\n"
  for(let i = 0; i < num; i++){
    if(bool === false){
     result += (" ".repeat(num - i -1) + str.repeat(2 * i + 1) + "\n")

    }
  }
   for(let i = num -1 ; i >= 0; i--){
    if(bool){
      
     result += (" ".repeat(num - i -1) + str.repeat(2 * i + 1) + "\n")

    }
   }
   return  result
}
 
console.log(pyramid("o", 4, true))  



// Build a Gradebook App

function getAverage(scores){
let average = 0;
for(let i = 0; i < scores.length; i++){
  average += (scores[i]) 
}
return average / scores.length
} 

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]))

function getGrade(score){
  let grade = ""
  if(score === 100){
    grade = "A+"
  }else if(score >= 90 && score < 100 ){
    grade = "A"
  }else if(score >= 80 && score < 90 ){
    grade = "B"
  }else if(score >= 70 && score < 80 ){
    grade = "C"
  }else if(score >= 60 && score < 70 ){
    grade = "D"
  }else if(score >= 0 && score < 60 ){
    grade = "F"
  }
  return grade
}
console.log(getGrade(81))


function hasPassingGrade(score){
  let gradeCheck = true
  if(getGrade(score) === "F"){
    gradeCheck = false
  }
  return gradeCheck
}
console.log(hasPassingGrade(55))


function studentMsg(scores,score){
  let message = ""
  if(getGrade(score) === "F"){
   message = `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You failed the course.`
  } else{
   message = `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You passed the course.`
  }

  return message
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 100))