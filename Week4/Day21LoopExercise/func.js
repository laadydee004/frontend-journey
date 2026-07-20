// Build a Missing Letter Detector
function fearNotLetter (letters){
  let current = ""
  let next = ""
  for(let i = 0; i < letters.length -1 ; i++){

     current = letters[i].charCodeAt(0)
     next = letters[i+1].charCodeAt(0)
     if(next - current > 1){
       return String.fromCharCode((current + 1))
     }
  }
  
}

console.log(fearNotLetter ("abcdefh"));

// Build a Smart Pantry Restocker

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];
