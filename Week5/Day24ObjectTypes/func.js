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



function reverseString(str){
  let strback = [...str];
  let reversed = strback.reverse();
  return reversed.join("");
}

console.log(reverseString("hello"));

