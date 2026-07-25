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

 