// Implement the Chunky Monkey Algorithm

function chunkArrayInGroups(group,num){
   
   let count = []
    for(let i = 0; i < group.length; i += num){
       
         let chunk = (group.slice(i,i + num));
         
        count.push(chunk)
       
    
      
  
        
    }
    return count;
}

 console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
 

//  Build a Profile Lookup

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name,prop){
  for(let i = 0; i < contacts.length; i++){
    
  if(contacts[i].firstName === name){
    if(contacts[i][prop] === undefined ){
    return "No such property"}
    return contacts[i][prop]
  } 
  
  
}
 return "No such contact"
}
console.log(lookUpProfile("Akira", "lastName"))
console.log(lookUpProfile("Kristian", "lastName"))
console.log(lookUpProfile("Bob", "number"))
console.log(lookUpProfile("Akira", "address"))


// Build a String Repeating Function

function repeatStringNumTimes(str,num)
{  let result = "" 
  for(let i = 0; i < num; i++ ){
     result += str
  }
  
  return result
}

console.log(repeatStringNumTimes("*",3))

// Build a festival crowd  flow simulator

const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

function initializeThroughput(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  };
  return summary;
}

function processGateFlow(gate, tickIndex) {
  let currentTickQueue = gate.queue[tickIndex];
  let processed = 0;
  while (currentTickQueue > 0 && processed < gate.capacity) {
    currentTickQueue--;
    processed++;
  }
  return {
    processed: processed,
    overflow: currentTickQueue
  };
}

function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
  const currentIndex = gates.indexOf(currentGate);
  const nextGateIndex = (currentIndex + 1) % gates.length;
  gates[nextGateIndex].queue[tickIndex] += overflowAmount;
  console.log(
    overflowAmount + " attendees rerouted to " +
    gates[nextGateIndex].id
  );
}

function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
  console.log("\nProcessing " + gate.id + "...");
  console.log(
    gate.queue[tickIndex] + " attendees arriving."
  );
  const result = processGateFlow(gate, tickIndex);
  throughputSummary[gate.id] += result.processed;
  if (result.overflow > 0) {
    console.log(
      "Overflow of " + result.overflow +
      " attendees. Rerouting..."
    );
    rerouteOverflow(gates, gate, tickIndex, result.overflow);
  }
}

function printSummary(summary) {
  console.log("\nThroughput Summary");
  for (const gateId in summary) {
    console.log(
      gateId + ": " + summary[gateId] +
      " attendees processed"
    );
  }
}

function simulateFestival(gates, timeBlock) {
  console.log("\n" + timeBlock + " Simulation");
  const throughputSummary = initializeThroughput(gates);
  const maxTicks = gates[0].queue.length;
  let tickIndex = 0;
  while (tickIndex < maxTicks) {
    console.log("\nTick " + (tickIndex + 1));
    for (const gate of gates) {
      handleGateAtTick(gates, gate, tickIndex, throughputSummary);
    }
    tickIndex++;
  }
  printSummary(throughputSummary);
}

simulateFestival(morningGates,"Morning")
simulateFestival(nightGates, "Night");


