function spinalCase(sentence) {
  return sentence
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/[-_\s]+/g, "-")
    .replace(/^-/, "");
}
console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))