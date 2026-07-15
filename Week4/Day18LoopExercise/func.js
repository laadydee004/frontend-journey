// space-mission-roster
// roster of astronauts for a space mission.

const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  crew.push(astronaut);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
];

for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}

function swapCrewMembers(crew, fromIndex, toIndex) {
  if (
    fromIndex < 0 || 
    toIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex >= crew.length
  ) {
    console.log("Invalid crew indices");
    return;
  }

  const updatedCrew = crew.slice();
  updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];

  return updatedCrew; 
}

const updatedSquad = swapCrewMembers(squad, 2, 5);

function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length - 1; i++) {
    for (let j = 0; j < crew.length - 1 - i; j++) {
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

function getEVAReadyCrew(crew) {
  const eligible = [];
  for (const astronaut of crew) {
    if (astronaut.isEVAEligible) eligible.push(astronaut);
  }
  sortByPriorityDescending(eligible); 

  return eligible;
}

const EVAReadySquad = getEVAReadyCrew(updatedSquad);
function chunkCrew(crew, size) {
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }

  const chunks = [];
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }

  return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);

function printCrewSummary(crew) {
  const sorted = crew.slice();
  sortByPriorityDescending(sorted); 
  for (const astronaut of sorted) {
    console.log(astronaut.name);
  }
}
printCrewSummary(updatedSquad)


// Build a Heritage Library Catalog
  const rawCatalogCards = [
  "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
  "The Shining | King, Stephen | 1977 | Shelf K1",
  "The Stand | King, Stephen | 1978 | Shelf K2",
  "It | King, Stephen | 1986 | Shelf K3",
  "Misery | King, Stephen | 1987 | Shelf K4",
  "Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5",
  "I, Robot | Asimov, Isaac | 1950 | Shelf A8",
  "Foundation | Asimov, Isaac | 1951 | Shelf A9",
  "Dune | Herbert, Frank | 1965 | Shelf H3",
  "Neuromancer | Gibson, William | 1984 | Shelf G8",
  "Snow Crash | Stephenson, Neal | 1992 | Shelf S6",
  "The Martian | Weir, Andy | 2011 | Shelf W5",
  "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
  "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
  "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
  "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",
  // edge cases: missing data
  "Unknown Title |  | 1975 | Shelf X1",
  "Mysterious Manuscript | Unknown Author |  | Shelf Z9",
  "Ancient Scroll | Anonymous | 850 | ",
];

function parseCard(rawString) {
  const parts = rawString.split("|");
  const trimmedParts = [];
  for (let i = 0; i < parts.length; i++) {
    trimmedParts.push(parts[i].trim());
  }
  const title = trimmedParts[0];
  const author = trimmedParts[1];
  const year = trimmedParts[2];
  const location = trimmedParts[3];
  return {
    title: title || "Unknown",
    author: author || "Unknown",
    year: year ? parseInt(year) : "Unknown",
    location: location || "Unknown"
  };
}

function parseCatalog(rawCards) {
  const catalog = [];
  for (let i = 0; i < rawCards.length; i++) {
    catalog.push(parseCard(rawCards[i]));
  }
  return catalog;
}

const catalog = parseCatalog(rawCatalogCards);

function findByAuthor(catalog, author) {
  const searchTerm = author.toLowerCase();
  const results = [];
  for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].author.toLowerCase().includes(searchTerm)) {
      results.push(catalog[i]);
    }
  }
  return results;
}

function groupByDecade(catalog) {
  const grouped = {};
  for (let i = 0; i < catalog.length; i++) {
    const book = catalog[i];
    if (book.year === "Unknown") {
      if (!grouped["Unknown"]) {
        grouped["Unknown"] = [];
      }
      grouped["Unknown"].push(book);
      continue;
    }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
  }
  return grouped;
}

const byDecade = groupByDecade(catalog);

function renderEntry(entry) {
  const title = entry.title || "Unknown";
  const author = entry.author || "Unknown";
  const year = entry.year || "Unknown";
  const location = entry.location || "Unknown";
  return `${"-".repeat(25)}
Title: ${title}
Author: ${author}
Year: ${year}
Location: ${location}
${"-".repeat(25)}`;
}

console.log(renderEntry(catalog[0]));

function validateEntry (entry){ 
  let isValid = true 
  if(!entry.title || entry.title === "Unknown" || !entry.author || entry.author === "Unknown" || !entry.location || entry.location === "Unknown" || !entry.year || entry.year === "Unknown"){ isValid = false 

  } return isValid;

 } 

function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
}

function exportToCSV(catalog) {
  const header = "Title,Author,Year,Location";
  const rows = [];

  for(let i = 0; i < catalog.length; i++){
    const entry = catalog[i];
    
  }
  
  for(let i = 0; i < catalog.length; i++){
    const entry = catalog[i];
    rows.push(`"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`);
  }
  let csv = header;
  for (let i = 0; i < rows.length; i++) {
    csv = csv + "\n" + rows[i];
     return csv;
  }
}

console.log(Object.keys(byDecade).length )
console.log(exportToCSV(catalog));

let oldestYear = Infinity
let newestYear = 0
for(let i = 0; i < catalog.length; i++){
  const entry = catalog[i];
  if(entry.year !== "Unknown"){
    oldestYear = entry.year;
  }
  if(entry.year > newestYear){
    newestYear = entry.year
  }
}
console.log(oldestYear)
console.log(newestYear)


// find the largest word
function findLongestWordLength(sentence){
  let words = sentence.split(" ")
let longestLength = 0
  for(const word of words){
    if(word.length > longestLength){
      longestLength = word.length
    }
  }
  return longestLength;
}

function findLongestWord(sentence){
  let words = sentence.split(" ")
  let longestWord = ""
  for(const word of words){
    if(word.length > longestWord.length){
      longestWord = word
    }
  }
  return longestWord
}

console.log(findLongestWordLength("Doyinsola is a Developer"));
console.log(findLongestWord("Doyinsola is a Developer"));


