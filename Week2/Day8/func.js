// A loan Qualification checker
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan.";
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}

let duplexLoanMsg	= getLoanMessage(85000, 850);
let condoLoanMsg =	getLoanMessage(65000, 690);
let carLoanMsg =	getLoanMessage(45000, 660)
let noLoanMsg =	getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);

// Build a Celsius to Fahrenheit Converter

function convertCtoF (celsius){
    let fahrenheit =  celsius * (9/5) + 32;
    return fahrenheit;
}
console.log(convertCtoF(30));

// Build a Card Counting Assistant
let count = 0;
function cardCounter(card) {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
    }
     return count + (count > 0 ? " Bet":" Hold" );
    }

    console.log( cardCounter(4));
// CHECK IF A YEAR IS OR  NOT

let year = 2024;
function isLeapYear(year){
  if ( year % 400 === 0  || year % 4 === 0 && year % 100 !== 0 ){
    return year + " is a leap year.";
  }else {
    return year + " is not a leap year.";
  }
}
let result = isLeapYear(year);
console.log(result);

// Implement the Truncate a String Algorithm


function findLargest(num1,num2,num3){
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  }else if (num2 >= num1 && num2 >= num3){
    return num2;
  }else{
    return num3;
  }
}
console.log(findLargest(25,6,22));
console.log(findLargest(25,30,30));

// Implement the Truncate a String Algorithm
let number = 23;
let string1 = "Doyinsola";

function truncateString (string1, number){
  if (string1 > string1.slice(0,number)){
    return `${string1.slice(0,number)}...`
  } else {
    return string1;
  }

}
console.log(truncateString(string1,number));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log( truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));

let string11 = "i am going to school";
let string2 = "school";

function confirmEnding(string11,string2){
  
  return string11.slice(-string2.length) === string2
}


console.log(confirmEnding(string11,string2));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));


