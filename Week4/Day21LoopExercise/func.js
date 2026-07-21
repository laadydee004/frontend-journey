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

function parseShipment(rawData){
  let shipments = [];  
  for(let i = 0; i < rawData.length; i++){
    let duplicate = false
    let singleData = rawData[i].split("|")
    let sku = singleData[0]
    let name = singleData[1]
    let qty = Number(singleData[2])
    let expires = singleData[3]
    let zone = singleData[4]
    if(zone === undefined){
      zone = "general"
    }
    let result = {
    sku,
    name,
    qty,
    expires,
    zone
  }
  for(let j = 0; j < shipments.length; j++){
     
     if(shipments[j].sku === sku){
        duplicate = true
   }
    
  }if(duplicate === false){
    shipments.push(result)
  }
  
  
  }
  
  return shipments
  
}
console.log(parseShipment(rawData))

function planRestock(pantry, shipment){
  let  actions = [];
  for(let i = 0; i < shipment.length; i++){  let item =  shipment[i]
        let newshipment = false;
        let type = ""
    for(let j = 0; j < pantry.length; j++){
    if(shipment[i].sku === pantry[j].sku){
      newshipment = true
    }
    }
     if(shipment[i].qty <= 0){
      type = "discard"
    }
    else if(newshipment){
      type = "restock"
    }
    else{
      type = "donate"
    }
    let result = {
      type,
      item
    }
    actions.push(result)
  }
  return actions
}


 function groupByZone(actions){
  let grouped = {};
  for(let i = 0; i < actions.length; i++){ let action = actions[i]
       let zone = action.item.zone
    if(!grouped[zone]){
      grouped[zone] = []
    }
    grouped[zone].push(action)
  }
  return grouped
 }

 function clonePantry(pantry){
  let copy = [];
  for(let i = 0; i < pantry.length; i++){
    let item = pantry[i]
    let result = {
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone
    }
    copy.push(result);
  }
  return copy
 }

 let shipment = parseShipment(rawData);
 let actions = planRestock(pantry, shipment);
 let grouped = groupByZone(actions);
 let copy = clonePantry(grouped)
 console.log(grouped)