const regex = /freeCodeCamp/;

const pattern = "freeCodeCamp";
const regex2 = new RegExp(pattern);

console.log(regex);
console.log(regex2);

const regex3 = /freeCodeCamp/;
const test = regex3.test("e");
console.log(test);

const regex4 = /freeCodeCamp/;
console.log(regex4.test("freeCodeCamp"));
console.log(regex4.test("freeCodeCamp is great"));
console.log(regex4.test("I love freeCodeCamp"));
console.log(regex4.test("freecodecamp"));
console.log(regex4.test("FREECODECAMP"));
console.log(regex4.test("free"));
console.log(regex4.test("code"));
console.log(regex4.test("camp"));



const regex5 = /freeCodeCamp/;
const match = "freeCodeCamp".match(regex5);
console.log(match);

const regex6 = /freeCodeCamp/;
console.log("freeCodeCamp".match(regex6)); // ['freeCodeCamp', index: 0, input: 'freeCodeCamp', groups: undefined]
console.log("freeCodeCamp is great".match(regex6)); // ['freeCodeCamp', index: 0, input: 'freeCodeCamp is great', groups: undefined]
console.log("I love freeCodeCamp".match(regex6)); // ['freeCodeCamp', index: 7, input: 'I love freeCodeCamp', groups: undefined]
console.log("freecodecamp".match(regex6)); // null
console.log("FREECODECAMP".match(regex6)); // null
console.log("free".match(regex6)); // null


const regex7 = /freecodecamp/;
const str = "freecodecamp is rly kewl";
const replaced = str.replace(regex7, "freeCodeCamp");
console.log(replaced);



// What Are Some Common Regular Expression Modifiers Used for Searching?

const regex8 = /freeCodeCamp/i;

console.log(regex8.test("freeCodeCamp")); // true
console.log(regex8.test("freeCodeCamp is great")); // true
console.log(regex8.test("I love freeCodeCamp")); // true
console.log(regex8.test("freecodecamp")); // true
console.log(regex8.test("FREECODECAMP")); // true
console.log(regex8.test("free")); // false
console.log(regex8.test("code")); // false
console.log(regex8.test("camp")); // false


const regex9 = /freeCodeCamp/gi;

console.log(regex9.lastIndex); // 0
console.log(regex9.test("freeCodeCamp")); // true
console.log(regex9.lastIndex); // 12
console.log(regex9.test("freeCodeCamp is great")); // false
console.log(regex9.lastIndex); // 0
console.log(regex9.test("I love freeCodeCamp")); // true
console.log(regex9.lastIndex); // 19
console.log(regex9.test("freecodecamp")); // false
console.log(regex9.lastIndex); // 0
console.log(regex9.test("FREECODECAMP")); // true
console.log(regex9.lastIndex); // 12
console.log(regex9.test("free")); // false
console.log(regex9.lastIndex); // 0
console.log(regex9.test("code")); // false
console.log(regex9.lastIndex); // 0
console.log(regex9.test("camp")); // false


const start = /^freecodecamp/i;
const end = /freecodecamp$/i;
console.log(start.test("freecodecamp")); // true
console.log(end.test("freecodecamp")); // true
console.log(start.test("freecodecamp is great")); // true
console.log(end.test("freecodecamp is great")); // false
console.log(start.test("i love freecodecamp")); // false
console.log(end.test("i love freecodecamp")); // true
console.log(start.test("have met freecodecamp's founder")); // false
console.log(end.test("have met freecodecamp's founder")); // false


const start1 = /^freecodecamp/im;
const end1 = /freecodecamp$/im;
const string = `I really love
freecodecamp
it's my favorite`;
console.log(string.match(start1)); // true
console.log(end.test(string)); // true


const regex10 = /freecodecamp/di;
const string2 = "we love freecodecamp isn't freecodecamp great?";
console.log(string2.match(regex10));


const regex12 = /freecodecamp/i;
console.log(regex12.test("I love FREECODECAMP!"));
console.log(regex12.test("freeCodoCamp"));
console.log(regex12.test("We went freeCodeCamping."));


// How Can You Match and Replace All Occurrences in a String?
const regex13 = /freecodecamp/;
const str1 = "freecodecamp is the best we love freecodecamp";
const matched = str1.match(regex13);
const replaced1 = str1.replace(regex13, "freeCodeCamp");
console.log(matched);
console.log(replaced1);


const regex14 = /freecodecamp/g;
const str2 = "freecodecamp is the best we love freecodecamp";
const matched2 = str2.match(regex14);
const replaced2 = str2.replace(regex14, "freeCodeCamp");
console.log(matched2);
console.log(replaced2);


const regexp1 = /she/g;
const string3 = "doyinsola is good girl, she is beutiful, she is workin hard, she is smart, she will make it in life";
const matched3 = string3.match(regexp1);
const replaced3 = string3.replace(regexp1, "SHE");
console.log(matched3);
console.log(replaced3);

const matched4 = string3.matchAll(regexp1);
const replaced4 = string3.replaceAll(regexp1, "SHE");

console.log(matched4);
console.log(replaced4);

console.log(matched4.next());
console.log(matched4.next());
console.log(matched4.next());
console.log(matched4.next());
console.log(matched4.next());

const regexp2 = /she/g;
const string4 = "doyinsola is good girl, she is beutiful, she is workin hard, she is smart, she will make it in life";
const matched5 = string4.matchAll(regexp2);
console.log(Array.from(matched5));


const regexAllCharacter = /\w/;
const regexAllNumber = /[0-9]/;
const regexSingleCharacter = /a./;
console.log(regexAllCharacter.test("_"));
console.log(regexAllNumber.test(9));

// What Are Lookahead and Lookbehind Assertions, and How Do They Work?

const positiveRegex = /free(?=code)/i;
const sentence1 = "freecodecame is good website";
const sentence2 = "free things are easy to code for free";
console.log(positiveRegex.test(sentence1));
console.log(positiveRegex.test(sentence2));
const negativeRegex = /free(?!code)/i;
console.log(negativeRegex.test(sentence1));
console.log(negativeRegex.test(sentence2));


// What Are Regex Quantifiers, and How Do They Work?
const quantifiers = /^\d{2,7}$/;
console.log(quantifiers.test("1"));
console.log(quantifiers.test("12"));
console.log(quantifiers.test("123"));
console.log(quantifiers.test("1234"));
console.log(quantifiers.test("12345"));
console.log(quantifiers.test("123456"));
console.log(quantifiers.test("1234567"));
console.log(quantifiers.test("12345678"));
console.log(quantifiers.test("123456789"));

const regexQuestionMark = /^[a-zA-Z]?\d{4,6}$/;
console.log(regexQuestionMark.test("123")); // false
console.log(regexQuestionMark.test("a1234")); // true
console.log(regexQuestionMark.test("12345")); // true
console.log(regexQuestionMark.test("az12345")); // false
console.log(regexQuestionMark.test("X123456")); // true
console.log(regexQuestionMark.test("1234567")); // false


const regexAsterisk = /^[a-zA-Z]*\d{4,6}$/;
console.log(regexAsterisk.test("123")); // false
console.log(regexAsterisk.test("a1234")); // true
console.log(regexAsterisk.test("12345")); // true
console.log(regexAsterisk.test("az12345")); // true
console.log(regexAsterisk.test("X123456")); // true
console.log(regexAsterisk.test("1234567")); //false

const regexPlus = /^[a-zA-Z]+\d{4,6}$/;
console.log(regexPlus.test("123")); // false
console.log(regexPlus.test("a1234")); // true
console.log(regexPlus.test("12345")); // false
console.log(regexPlus.test("az12345")); // true
console.log(regexPlus.test("X123456")); // true
console.log(regexPlus.test("1234567")); // false



// What Are Capturing Groups and Backreferences, and How Do They Work?
