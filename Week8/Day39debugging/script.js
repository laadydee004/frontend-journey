// SyntaxError is an incorrect code like missing bracket or parnethensis

// ReferenceError is like undefined variable

// TypeError is when using another function on wrong array or object



// throw

function validateInput(input){
    if( typeof input !== "number"){
        throw new TypeError(`Expected a number but recieved  ${typeof input}`);
    }
    return input * 2
}

console.log(validateInput(9));


function divide(numerator,denominator){
    if(denominator === 0){
        throw new TypeError (`Cannot divided by zero`);
    }
    return numerator/denominator
}

console.log(divide(3,4));


// try and catch and finally

function processInput(input){
    if(typeof input  !== "string"){
        throw new TypeError("input must be string");
    }
    return input.toUpperCase();
    try{
        console.log("starting to process input... ");
        const result = processInput(9);
        console.log("processed result:",result);
    }
    catch(error){
        console.error("error occurred:", error.message);
    }
    finally{
        console.log("skip");
        
    }
}

console.log(processInput("www"));
console.log(2);


let firstNumber = 5;
let secondNumber = 10;
debugger; // Code execution pauses here
let sum = firstNumber + secondNumber;
console.log(sum);


function calculateTotalPrice(price, discountPercentage) {
 debugger
 let discountAmount = (price * discountPercentage) / 100
 let totalPrice = price - discountAmount

 console.log(`Original Price: ${price}`)
 console.log(`Discount Amount: ${discountAmount}`)
 console.log(`Total Price after Discount: ${totalPrice}`)

 return totalPrice
}

let price = 100
let discount = 15

let finalPrice = calculateTotalPrice(price, discount)
console.log(`Final Price: ${finalPrice}`);

