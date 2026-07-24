// Implement a Unique Sorted Union
function uniteUnique(){
  let arr = []
  
  for(const arg of  arguments){
    for(const value of arg){
      if(!arr.includes(value)){
        arr.push(value)
      }
    }
    
  }
  return arr
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
//  [1, 3, 2, 5, 4]