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



// Implement an HTML Entity Converter

function convertHTML (str){
  let ans = ""
  for(let i = 0; i < str.length; i++){
    let current = str[i]
    if(current === "&"){
      ans += "&amp;"
     
    }
   else if(str[i] === "<"){
      ans += "&lt;" 
    }
   else if(str[i] === ">"){
      ans += "&gt;"
    }
   else if(str[i] === `"`){
      ans += "&quot;"
    }
    else if(str[i] === `'`){
      ans += "&apos;"
    }else {
      ans += current; 
    }
  }
  
  return ans
}
console.log(convertHTML("Dolce & Gabbana"))


// Build an Odd Fibonacci Sum Calculator

function sumFibs(number) {
  let sum = 0;

  let prev = 0;
  let curr = 1;

  while (curr <= number) {

    if (curr % 2 !== 0) {
      sum += curr
    }
    let next = curr + prev;
    prev = curr;
    curr = next
  }

  return sum;
}
console.log(sumFibs(1000))
 


// Implement an Element Skipper 

function dropElements(arr,func){
  for(let i = 0; i < arr.length ; i++){let n = func(arr[i])

    if(n){
     return (arr.slice([i]))    
     }
  } 
return []
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))
// [3, 4]


// Build a Playlist Remix Engine


const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];


function flattenPlaylists(playlists){
   if (!Array.isArray(playlists)) {
    return [];
  }
  let input = [];
  for(let i = 0; i < playlists.length; i++){
    for(let j = 0; j < playlists[i].length; j++){
      let track = playlists[i][j]
      let newTrack = {
        trackId: track.trackId,
        artist: track.artist,
        title: track.title,
        votes: track.votes,
       bpm: track.bpm,
       source: [i, j]
};
 input.push(newTrack);
    }
  }
  return input
}

// console.log(flattenPlaylists(playlists)); 

function scoreTracks(tracks){
   let scoredTracks = [];
   for(let i = 0; i < tracks.length; i++){
     let score = tracks[i].votes * 10 - Math.abs(tracks[i].bpm - 120) 
     let scoreResult = {
      ...tracks[i], 
      score
     }
     scoredTracks.push(scoreResult)
   }
 
  return scoredTracks
}

// console.log(scoreTracks(flattenPlaylists(playlists)))

function dedupeTracks(tracks){
  let duplicateTracks = []
  for (let i = 0; i < tracks.length; i++){
    let found = false
    for(let j = 0; j < duplicateTracks.length; j++){
      if(tracks[i].trackId === duplicateTracks[j].trackId){
        found = true;
      }
    }
    
     if (!found) {
      duplicateTracks.push(tracks[i]);
    }
  }
 return duplicateTracks
}
// console.log(dedupeTracks(scoreTracks(flattenPlaylists(playlists))));


function enforceArtistQuota(tracks, number){
  let result = []
 let occurrences = {}
 for(let i = 0; i < tracks.length; i++){
  let artist = tracks[i].artist
  if(occurrences[artist] === undefined){
    occurrences[artist] = 0
  }
  if(occurrences[artist] < number){
      result.push(tracks[i]);
      occurrences[artist]++;
    }
 }
 return result
} 

// console.log(enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(playlists)))),1);

function buildSchedule(tracks){
  let quota = [];
for(let i = 0; i < tracks.length; i++){
  let slot = i + 1
  quota.push({
    slot,
    trackId: tracks[i].trackId
  })
}
return quota
}

function remixPlaylist(playlists, maxArtistOccurrences){
 let flattened = flattenPlaylists(playlists);
 let scored = scoreTracks(flattened);
 let deduped = dedupeTracks(scored);
 let filtered = enforceArtistQuota(deduped, maxArtistOccurrences);
 return buildSchedule(filtered);
}
