const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments (fragments){
   let result = [];
  for(let i = 0; i < fragments.length; i++){
  if(fragments[i] !== undefined){
   result.push(fragments[i])
  }
   else{
    console.log("[COMPACTED]")
  }
  }
  return result;
}


// console.log( compactFragments (shuffledFragments));
let compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(fragments){
  let result = compactFragments(fragments);
  for(let i = 0; i < result.length; i++ ){
    for(let j = 0; j < result.length - 1; j++){
    if(result[j].id > result[j+1].id){
      let temp = result[j+1]
      result[j+1] = result[j];
      result[j] = temp 
    }
    }
  }

  return result
}
const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(sortedFragments){
  let sorted = sortFragments(sortedFragments);
  let result = [];
  for(let i = 0; i < sorted.length; i++){
    if(i === 0 || sorted[i].id !== sorted[i - 1].id){
      result.push(sorted[i]);
    }
    else{
      console.log("[DEDUPED]")
    }
  }
  return result
}
let dedupedFragments = dedupeFragments(sortedFragments);


function fillMissingFragments(dedupedFragments){
  let result = [];

  for(let i = 0; i < dedupedFragments.length; i++){
    let currentId = dedupedFragments[i].id;

    result.push( dedupedFragments[i]);

    if(i < dedupedFragments.length -1){
      let nextId = dedupedFragments[i+1].id;

      if(nextId > currentId + 1){

        for(let id = currentId + 1; id < nextId; id++ ){
           result.push({
          id: id,
          text: "[...]"
        });

        console.log(`[FILLED] ${id}`);
        }
      }
    }
  }
  return result
}

let filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(sortedStory){
    let story = "";
    for(let i = 0; i < sortedStory.length; i++){
      story += sortedStory[i].text
      if(i < sortedStory.length -1){
        story += "\n"
      }
    }
    return story
}
console.log(assembleStory([{ id: 1, text: "Hello" }, { id: 2, text: "World" }]));


console.log(assembleStory(filledFragments));
