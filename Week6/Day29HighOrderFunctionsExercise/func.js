// Build a Library Manager
const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

console.log("Books in the Library:\n");

function getBookInformation(catalog) {
  return catalog.map(book => `${book.title} by ${book.author}`).join("\n" + "\n");
}

console.log(getBookInformation(library));

console.log("\nList of book summaries:\n" )

function getBookSummaries(catalog) {
  return catalog.map((book) => book.about).join("\n" + "\n");
}

console.log(getBookSummaries(library));

console.log("\nList of books by Arvid Kahl:\n");

function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

console.log(getBooksByAuthor(library, "Arvid Kahl"));

console.log("\nList of books by James Clear:\n")

console.log(getBooksByAuthor(library, "James Clear"));

console.log("\nTotal number of pages for all library books:\n");

function getTotalPages(catalog){
 const sum = catalog.reduce((bookPage, currPage) => bookPage + currPage.pages, 0);
 return sum
}

console.log(getTotalPages(library))


// Build a Book Organizer

const books = [
  {
    title: "Things Fall Apart",
    authorName: "Chinua Achebe",
    releaseYear: 1940
  },
  {
    title: "Half of a Yellow Sun",
    authorName: "Chimamanda Ngozi Adichie",
    releaseYear: 2006 
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    authorName: "J.K. Rowling",
    releaseYear: 1997
  }
  ]

  function sortByYear(a,b){
      if(a.releaseYear < b.releaseYear){
        return -1
      }
     else if(a.releaseYear > b.releaseYear){
        return 1
      }
      else {
        return 0
      }
  }
  const filteredBooks = books.filter((book) => book.releaseYear <= 1950)

  filteredBooks.sort(sortByYear);
  console.log(filteredBooks); 

//   Implement a Sorted Index Finder

function getIndexToIns(array,num){
  array.sort((a,b) => (a - b))
 let index = array.findIndex((arr) => (arr >= num))
 if(index === -1){
  return array.length
 }

  return index
 
}

console.log(getIndexToIns([10, 20, 40, 30, 50], 35))
console.log(getIndexToIns([105, 20, 40, 30, 50], 35))
console.log(getIndexToIns([3, 10, 5], 11))


// Build a Symmetric Difference Function

function diffArray(arr1, arr2){

 let first = arr1.filter((item) => !arr2.includes(item))
 let second = arr2.filter((item) => !arr1.includes(item))
 return [...first, ...second]

}
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"])) 

// Implement a Value Remover Function

function destroyer(array,...argument){
 return array.filter((item) => !argument.includes(item))
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

// Implement a Matching Object Filter

function whatIsInAName(array,source){  
  return array.filter((arr) => {
    for(let prop in source){
    if(arr[prop] !== source[prop]){
      return false
    }
    }
    return true
  })
  
} 

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], {last: "Capulet" }))



// Implement a Range-Based LCM Calculator
function smallestCommons(arr){
  let result = []
  let min = Math.min(arr[0],arr[1]);
  let max = Math.max(arr[0],arr[1]);
  for(let i = min; i <= max; i++){
    result.push(i)
  }
  let start = max;
  while(true){
    let divisible = true;
     for(let i = 0; i < result.length; i++){
    if(start % result[i] !== 0){
      divisible = false
      break;
    }
  }
    if(divisible){
      return start
    }
    start += max
  }
 
}

console.log(smallestCommons([1, 5]))

// Create a Deep Flattening Tool

function steamrollArray(nestedArr){ 
  let result = []
  for(let i = 0; i < nestedArr.length; i++){
    if(Array.isArray(nestedArr[i])){
     let value = steamrollArray(nestedArr[i])
     result.push(...value)
    }else{
      result.push(nestedArr[i])
    }
    
  }
  return result
}

console.log(steamrollArray([[["a"]], [["b"]]]))

console.log(steamrollArray([1, [2], [3, [[4]]]]))  
