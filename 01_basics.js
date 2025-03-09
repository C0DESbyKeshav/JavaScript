//* Comments:
// 1. In-line comment
// 2. Multiline comment:
/* This is a 
        multi-line comment */

//* In javascript you can put a semicolon at the end of the line or not is up to you. But ending a line with semicolon is recommended.

//* Data Types and Variables:
// undefined, null, boolean, string, symbol, number, and object

// Creating variables:
// 1. Throughout the Program
var my_name = "Keshav";
my_name = 25; // data type can be changed just like in python

// 2. Only within the scope
let a = 9;
a = "variable"; // data type can be changed just like in python

// 3. Constant throughout the program
const pi = 3.14;

//* Storing Values with Assignment Operator
// Declaration of variables:
var b;
console.log(b); // Prints the content inside the paranthesis in the console

// Assigning a variable:
var c = 2;
a = 9;
c = a;
console.log(c);

//* Initializing Variables with Assignment Operator
var d = 4;

//* Uninitialized Variables
var e; // type: uninitialized

//* Case Sensitivity in Variables
var variableOne;
var VariableOne = 2;
console.log(variableOne);
console.log(VariableOne);

//* Adding Numbers
var sum = 10 + 5;
console.log(sum);

//* Subtracting Numbers
var difference = 10 - 5;
console.log(difference);

//* Multiplying Numbers
var product = 5 * 0;
console.log(product);

//* Dividing Numbers
var quotient = 10 / 5;
console.log(quotient);

//* Incrementing Numbers
var i = 1;
i++;
console.log(i);

//* Decrementing Numbers
var i = 5;
i--;
console.log(i);

//* Decimal Numbers
var myDecimal = 0.0025;
console.log(myDecimal);

//* Multiply Decimals
var product = 2.0 * 2.5;
console.log(product);

//* Divide Decimals
var product = 10.5 / 5.0;
console.log(product);

//* Finding a Remainder
var rem = 11 % 3;
console.log(rem);

//* Compound Assignment with Augmented Arithmetic Operations
var num1 = 1;
var num2 = -3;
var num3 = 7.5;
var num4 = 21;
var num5 = 11;

console.log((num1 += 5));
console.log((num2 -= 1));
console.log((num3 *= 10));
console.log((num4 /= 7));
console.log((num5 %= 3));

//* Declare String Variables
var firstName = "Keshav";
var secondName = "Mandal";
console.log(firstName);
console.log(secondName);

//* Escaping Literal Quotes in Strings
var myStr = 'I am a "Double Quoted String" inside "Double Quotes"';
console.log(myStr);

//* Quoting Strings with Single Quotes
var myStr2 = 'I am a "Double Quoted String" inside "Single Quotes"';
console.log(myStr2);

//* Quoting Strings with both Single Quotes and Double Quotes
var myStr3 = `To declare a character variable in CPP:
"char c = 'c';"`;
console.log(myStr3);

//* Escape Sequences in Strings
/***************************
\'      Single Quote
\"      Double Quote
\\      Backslash
\n      Newline
\r      Carriage Return
\t      Tab
\b      Backspace
\f      Form Feed
****************************/
var escStr = "First Line\n\t\\Second Line\nThird Line";
console.log(escStr);

//* Concatenating Strings with Plus Operator
var s1 = "I am ";
var s2 = "Keshav Mandal";
console.log(s1 + s2);

//* Concatenating Strings with Plus Equals Operator
var st1 = "Ara Ara !! ";
st1 += "Sayonaara";
console.log(st1);

//* Constructing Strings with Variables
var fname = "Keshav Mandal";
var greet = "Hello !! My name is " + fname + ", How are you ??";
console.log(greet);

//* Appending Variables to Strings
var adj = "is real !!";
var noun = "One Piece ";
noun += adj;
console.log(noun);

//* Find Length of String
var rnStr = "One Piece";
var rnStrLen = rnStr.length;
console.log(rnStrLen);

//* Bracket Notation to Find First Character in String
var favChar = "Luffy";
console.log(favChar[0]);

//* String Immutability
// Strings are immutable i.e. they cannot be altered once created.
var strMut = "Jello World";
// strMut[0]= 'H';
// The above line will throw an error since we cannot change any letter in the original string as it is immutable.
// But we can change the string by assigning it a complete new value.
strMut = "Hello World";

//* Bracket Notation to Find nth Character in String
console.log(strMut[4]);

//* Bracket Notation to Find Last Character in String
console.log(strMut[strMut.length - 1]);

//* Bracket Notation to Find nth-to-Last Character in String
var secondToLastLetter = strMut[strMut.length - 2];
console.log(secondToLastLetter);

//* Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var sentence = "";

  sentence +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;

  return sentence;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

//* Store Multiple Values with Arrays
var myArr = ["Keshav", 18, "One Piece", "Javascipt"];
console.log(myArr);

//* Nested Arrays
var myArr2 = [
  ["Name", "Keshav"],
  ["Age", 18],
];
console.log(myArr2);

//* Access Array Data with Indexes
var myArr3 = [25, "Obsessed", 35];
console.log(myArr3[2]);

//* Modify Array Data with Indexes
var myArr4 = [243, 3798475, 73];
myArr4[1] = 675;
console.log(myArr4);

//* Access Multi-Dimensional Array Data with Indexes
var myArr5 = [[25], ["Obsessed", 35]];
console.log(myArr5[1][0]);

//* Modify Multi-Dimensional Array Data with Indexes
var myArr6 = [
  [243, [3798475, 499]],
  [73, 97],
];
myArr6[0][1][0] = 675;
console.log(myArr6);

//* Manipulate Arrays with push()
var myArr7 = [35, "Ignores", 25, "But"];
myArr7.push([25, "Still"], ["Clings", "to", 35]);
console.log(myArr7);

//* Manipulate Arrays with pop()
var myArr8 = [25, 35, "Now"];
var popped = myArr8.pop();
console.log(myArr8);
console.log(popped);

//* Manipulate Arrays with shift()
// shift() function removes and returns the first element of the array.
var myArr9 = ["Kimi", "no", "Namae", "wa", "?"];
var popped = myArr9.shift();
console.log(myArr9);
console.log(popped);

//* Manipulate Arrays with unshift()
// unshift() function adds an element to the starting of array and returns the length of the array.
var addToStart = myArr9.unshift("Anata");
console.log(myArr9);
console.log(addToStart);

//* Shopping List
var myList = [
  ["One Piece", "Deluxe Edition"],
  ["Gaming Laptop", 1],
  ["Berserk", "Deluxe Edition"],
  ["Snacks", "Spicy"],
  ["PC Build", "RGB"],
];
console.log(myList);

//* Write Reusable Code with Functions
function reusableCode() {
  console.log("Moshi Moshi !!");
}
reusableCode();
reusableCode();
reusableCode();

//* Passing Values to Functions with Arguments
function calculator(num1, num2) {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(num1 / num2);
  console.log(num1 % num2);
}
calculator(10, 5);

//* Global Scope and Functions
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5; // this value of oopsGlobal will be carried on to fun2()
  // var oopsGlobal = 5;  // this will make the oopsGlobal --> "undefined" in fun1()
  // Well, this problem only occurs in these text editors and not in the browser
}

function fun2() {
  var output = "";
  if (typeof myGlobal !== "undefined") {
    output += "myGlobal:" + myGlobal;
  }
  output += "\n";
  if (typeof oopsGlobal !== "undefined") {
    output += "oopsGlobal:" + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

//* Local Scope and Functions
function myLocalScope() {
  var myVar = 10;
  console.log(myVar);
}
myLocalScope();
// console.log(myVar); // this will throw an error because we are trying to access the variable "myVar" outside the scope.

//* Global Scope vs Local Scope in Functions
// It is possible to have local variable and global variable of the same name.
// When this happens, the local variable takes precedent over the global variable.
var outerWear = "T-Shirt"; // this is a global variable

function myOutfit() {
  var outerWear = "Sweater"; // this is a local variable
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

//* Return a Value From a Function with return
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10));

//* Understanding Undefined Value Returned From a Function
// This is the scenario when we don't return anything from the function.
var sum = 0;
function sumFive() {
  sum += 5;
}

//* Assignment with a Returned Value
var changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
console.log(changed);

//* Stand In Line (Queue)
// New element is added at the rear end of the queue.
// Element is deleted from the front end of the queue.
function nextLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr)); // Just to print the array in string format in the console.
// console.log("Before:",(testArr));    // Alternative
console.log("Element deleted from the queue is:", nextLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//* Boolean Values
// Either true or false just like on and off switches respectively.
function boolean() {
  return true;
}
console.log(boolean());

//* Use Conditional Logic with If Statements
function trueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
console.log(trueOrFalse(false));

//* Comparison with the Equality Operator (==)
function checkEqual(value) {
  if (value == 10) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(checkEqual("10"));

//* Comparison with the Strict Equality Operator (===)
// The difference between the Equality Operator and the Strict Equality Operator is that:

/* The Equality Operator, when comparing, also does the type conversion and then evaluates the comparison.
10 == 10        True
10 == 12        False
10 == '10'      True
*/

/* Whereas, the Strict Equality Operator, when comparing, evaluates the comparison between both the values as it is, without doing the type conversion.
10 === 10       True
10 === 12       False
10 === '10'     False 
*/

function checksEquality(value) {
  if (value === 10) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(checksEquality("10"));

//* Practice Comparing Differnt Values
// Equality Operator:
function compares1(val1, val2) {
  if (val1 == val2) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compares1(10, "10"));

// Strict Equality Operator:
function compares2(val1, val2) {
  if (val1 === val2) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compares2(10, "10"));

//* Comparison with the Inequality Operator
function testNotEqual(value) {
  if (value != 10) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual("10"));

//* Comparison with the Strict Inequality Operator
function testStrictNotEqual(value) {
  if (value !== 10) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual("10"));

//* Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) return "Over 100";
  if (val > 10) return "Over 10";
  return "10 or Under 10";
}
console.log(testGreaterThan("10"));

//* Comparison with the Greater Than Or Equal To Operator
function testGreaterThanOrEqual(val) {
  if (val >= 100) return "100 or Over 100";
  if (val >= 10) return "10 or Over 10";
  return "Under 10";
}
console.log(testGreaterThanOrEqual("10"));

//* Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 10) return "Under 10";
  if (val < 100) return "Under 100";
  return "100 or Over 100";
}
console.log(testLessThan("10"));

//* Comparison with the Less Than Or Equal To Operator
function testLessThanOrEqual(val) {
  if (val <= 10) return "10 or Under 10";
  if (val <= 100) return "100 or Under 100";
  return "Over 100";
}
console.log(testLessThanOrEqual("10"));

//* Comparisons with the Logical AND Operator
// Sometimes we have to check if two things are true at the same time, at times like this, we use '&&' operator.
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) return val + " comes under the range 25 - 50";
  return val + " does'nt comes under the range 25 - 50";
}
console.log(testLogicalAnd(35));

//* Comparisons with the Logical OR Operator
// Sometimes we have to check if two things are true at the same time, at times like this, we use '&&' operator.
function testLogicalOr(val) {
  if (val <= 50 || val >= 25)
    return val + " is greater than or equal to 25 OR less than or equal to 50";
  return (
    val + " is not greater than or equal to 25 OR not less than or equal to 50"
  );
}
console.log(testLogicalOr(35));

//* Else Statements
function testElse(val) {
  if (val > 50) console.log(val + " is greater than or equal to 50");
  else console.log(val + " is not greater than 50");
}
testElse(35);

//* Else If Statements
function testElseIf(val) {
  if (val > 10) return val + " is greater than 10";
  else if (val < 5) return val + " is less than 5";
  else return val + " is in between 5 and 10";
}
console.log(testElseIf(7));

//* Logical Order in If Else Statements
function testOrderElseIf(val) {
  if (val < 5) return val + " is less than 5";
  else if (val < 10) return val + " is less than 10";
  else return val + " is greater than or equal to 10";
}
console.log(testOrderElseIf(7));

//* Chaining If Else Statements
function textSize(val) {
  if (val < 5) return "Tiny";
  else if (val < 10) return "Small";
  else if (val < 15) return "Medium";
  else if (val < 20) return "Large";
  else return "Huge";
}
console.log(textSize(50));

//* Golf Code
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfCode(par, strokes) {
  if (strokes == 1) return names[0];
  else if (strokes <= par - 2) return names[1];
  else if (strokes == par - 1) return names[2];
  else if (strokes == par) return names[3];
  else if (strokes == par + 1) return names[4];
  else if (strokes == par + 2) return names[5];
  else if (strokes >= par + 3) return names[6];
}
console.log(golfCode(5, 8));

//* Switch Statements
// It uses the Strict Equality Operator
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(4));

//* Default Option in Switch Statements
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "Greek Alphabets";
      break;
  }
  return answer;
}
console.log(caseInSwitch(6));

//* Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var ans = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      ans = "Low";
      break;
    case 4:
    case 5:
    case 6:
      ans = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      ans = "High";
      break;
  }
  return ans;
}
console.log(sequentialSizes(2));
console.log(sequentialSizes(5));
console.log(sequentialSizes(8));

//* Replacing If Else Chains with Switch
function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
console.log(chainToSwitch(99));

//* Returning Boolean Values from Functions
function isless(a, b) {
  return a < b;
}
console.log(isless(10, 48));

//* Returning Early Pattern From Functions
function abTest(a, b) {
  if (a < 0 || b < 0) return undefined;
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(4, 9));

//* Counting Cards
var count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
}
cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

//* Build JavaScript Objects
var myDog = {
  Name: "Pratham",
  Breed: "Street Dog",
  Legs: 2,
  Paws: 2,
  Tails: 0,
  Gender: "F",
  Friends: ["NspDog", "BhyDog", "BsDog"],
};
console.log(myDog);

//* Accessing Object Properties with Dot Notation
console.log(myDog.Breed);
console.log(myDog.Gender);

//* Accessing Object Properties with Bracket Notation
console.log(myDog["Tails"]);
console.log(myDog["Paws"]);

//* Accessing Object Properties with Variables
var myDogProp = "Name";
console.log(myDog[myDogProp]);

//* Updating Object Properties
myDog.Gender = "T";
console.log(myDog.Gender);

//* Add New Properties to an Object
myDog.Bark = "BOW - WOW !";
console.log(myDog.Bark);

//* Delete Properties From an Object
delete myDog.Tails;
console.log(myDog);

//* Using Objects for Lookups
// Rather than using switch cases, we can create an object to access the elements.
function numbers(val) {
  var lookup = { 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five" };
  return lookup[val];
}
console.log(numbers(3));

//* Testing Objects for Properties
// By using 'hasOwnProperty()' function, we can check whether a specific property exists or not in the object.
function checkObj(val) {
  if (myDog.hasOwnProperty(val)) return myDog[val];
  else return "Not Found !!";
}
console.log(checkObj("Brain"));

//* Manipulating Complex Objects
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    release_year: "2003",
    formats: ["YT Video"],
  },
];
console.log(myMusic);

//* Accessing Nested Objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: { trunk: "jack" },
  },
};
console.log(myStorage.car.inside["glove box"]);

//* Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];
console.log(myPlants[1].list[1]);

//* Record Collection
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: 1999,
    artist: "Prince",
    tracks: [1999, "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// Nothing just a fancy way to create a copy of an   object in JavaScript.

function updateRecords(id, prop, value) {
  if (value === "") {
    // If you passed nothing in the value, then this condition here will indicate that the user wants to delete the entire contents of that property.
    delete collection[id][prop];
  } else if (prop == "tracks") {
    // In tracks, you don't have to rewrite the entire tracks, rather just append to the existing track.
    collection[id][prop] = collection[id][prop] || [];
    // This above line means that if the prop i.e. "tracks" already contains some value, then assign it to itself but if the 'tracks' is empty, then assign it with an empty array.
    collection[id][prop].push(value);
  } else {
    // If the value!="" and also if the prop!="tracks", then execute the else part.
    // If the prop is other than tracks then we just have to replace the entire existing value of that prop.
    collection[id][prop] = value;
  }
  return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));

//* Iterate with While Loops
var myArr = [],
  i = 0;
while (i < 5) {
  myArr.push(i);
  i++;
}
console.log(myArr);

//* Iterate with For Loops
var myArray = [];
for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}
console.log(myArray);

//* Iterate Odd Numbers with a For Loop
var myArr = [];
for (var i = 1; i <= 20; i += 2) {
  myArr.push(i);
}
console.log(myArr);

//* Count Backwards with a For Loop
var myName = "Keshav",
  myNameBck = [],
  j = 0;
for (var i = myName.length - 1; i >= 0; i--) {
  myNameBck[j] = myName[i];
  j++;
}
console.log(myName + " is spelled backwards as " + myNameBck);

//* Iterate Through an Array with a For Loop
var arr = [25, 1, 4, 3, 35],
  total = 0;
for (var i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total);

//* Nesting For Loops
var mulArr = [
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ],
  product = 1;
for (var i = 0; i < mulArr.length; i++) {
  for (var j = 0; j < mulArr[i].length; j++) {
    product *= mulArr[i][j];
  }
}
console.log(product);

//* Iterate with Do.....While Loops
var myArray = [],
  i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5);
console.log(i, myArray);

//* Profile Lookup
var contacts = [
  {
    firstName: "Keshav",
    lastName: "Mandal",
    number: "9673012705",
    likes: ["Anime", "OST", "Programming", "RP"],
  },
  {
    firstName: "Violet",
    lastName: "Evergarden",
    number: "Unknown",
    likes: ["Writing Letters", "Finding Meaning of 'Aishiteru'"],
  },
  {
    firstName: "Luffy",
    lastName: "Monkey",
    number: "Unknown",
    likes: ["Eat", "Sing", "Crew", "Fight Strong Enemies"],
  },
];
function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName) {
      return contacts[i][prop] || "NO Such Property";
    }
    return "NO Such Contact Found";
  }
}
console.log(lookUpProfile("Keshav", "likes"));

//* Generate Random Fractions
console.log(Math.random());
// Always between 0 and 1, could be 0 but cannot be 1.

//* Generate Random Whole Numbers
console.log(Math.floor(Math.random() * 10));
// Will generate a random number between 0 to 10; including zero but excluding 10, which makes the range from 0 to 9.

//* Generate Random Whole Numbers Within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(5, 15));
// Including 5 and Excluding 15

//* Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("35"));

//* Use the parseInt Function with a Radix
function convertToIntegerRadix(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger("0100011"));

//* Use the Conditional (Ternary) Operator
// condition ? statement-if-true : condition-if-false;
console.log(1 === 1 ? "Equal" : "Not Equal");

//* Use Multiple Conditional (Ternary) Operator
function checkSign(num) {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkSign(-17));

//* Differences Between the var and let Keywords
// 'var' and 'let' both keywords are used to declare a variable.
// The only difference between them is that we can't redeclare a variable with let keyword twice in the same program, and that's not the case with var keyword.
// But we can redefine a variable as many times as we need by using any of those keywords.
/* Example: Using var
    var a = 25;
    var a = 35;
    a = 143;
  None of the above lines will throw an error.
*/
/* Example: Using let
    let b = 35;
    let b = "other";   // THIS LINE WILL THROW AN ERROR.
    b = 143;
*/

//* Compare Scopes of the var and let Keywords
function checkScope() {
  "use strict";
  // In JavaScript, "use strict" is a directive that enforces a stricter set of rules to make your code more secure, reliable, and optimized.
  /* Example: Prevents accidental global variables
      "use strict";
      x = 10;  // Error: x is not defined
    Without "use strict", JavaScript would create a global variable automatically.
  */

  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();

// Using 'let' keyword:
function checkScopeLet() {
  "use strict";

  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScopeLet();

//* Declare a Read-Only variable with const Keyword
// When const keyword is used, you can't modify that variable later.
// It is a common good practice to declare a const variable in all upper case letters.
// Make your habit of using 'let' and 'const' keywords more often instead of 'var'.
// It is a very good practice to write "use strict" inside a function.

function printManyTimes(str) {
  "use strict";
  const SENTENCE = str + " - san wa kakkoi desu ne...";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
printManyTimes("Keshav");

//* Mutate an Array Declared with const
const s = [1, 2, 3];
function editInPlace() {
  "use strict";

  // s =[4, 5, 6];    // re-assignment of const variable is not allowed

  // But we can change the values of the const array as shown below:
  s[0] = 4;
  s[1] = 5;
  s[2] = 6;
}
editInPlace();
console.log(s);

//* Prevent Object mutation
// If you want that your const object must never change in the program then use Object.freeze(nameOfVariable).
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

console.log(freezeObj());

//* Use Array Functions to Write Concise Anonymous Functions
var magic = function () {
  return new Date();
};

// Just a shorter way to write the above anonymous function
var magic = () => {
  return new Date();
};

// Much shorter way
var magic = () => new Date();

// To make it more nicer
const magical = () => new Date();
console.log(magical());

//* Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//* Write Higher Order Arrow Functions
// A function to find square of each positive numbers in the array.
// Whenever there is a need to use multiple functions inside a function then there's where the arrow functions come into action.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};
console.log(squareList(realNumberArray));

//* Write Higher Order Arrow Functions (Default Parameters)
// When there is multiple return function inside the arrow function then the representation changes.
const increment = (() => {
  return (num, value = 1) => {
    return num + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5)); // by default the incrementation will be done by 1

//* Use the Rest Operator (...) with Function Parameters
const Rsum = (function () {
  return function Rsum(...args) {
    // You can also write the above return statement in the arrow function form as the above function.
    // As we have written (...args) -->[it automatically converts the passed arguments into an array] therefore we don't need to execute the below line and this also allows us to pass as many parameters as we want when calling the function.
    // const args =[x, y, z];
    return args.reduce((a, b) => a + b, 0); // 0 is default value
  };
})();
console.log(Rsum(2,5,1,4,3,3,5));

//* Use the Spread Operator to Evaluate Arrays In-Place

