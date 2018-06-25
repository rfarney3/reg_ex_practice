//REPLACE
//replacing one character
console.log("Hello World".replace(/H/g,"B")) //"Bello World"
//replacing multiple characters
console.log("Hello World".replace(/H|W/g,"B")) //"Bello Borld"

//EXEC => MATCHING
//RegExp.prototype.test() method or the String.prototype.search() method if you want to get true or false for a match
console.log(/ab*/g.exec("Hella World")) // ["a", index: 4, input: "Hella World"]

let matches = /(hello \S+)/.exec("This is a hello world!")
console.log(matches[1]); // hello world!

//ANCHORS
//^ matches any string that starts with "The"
console.log(/^The/.test("The thing")); // true

// $ matches a string that ends with
console.log(/end$/.test("The things end")); // true

//combining them ^ and $ will check for an exact match
console.log(/^The end$/.test("The end")); // true
console.log(/^The end$/.test("The things end")); // false

//matches anything with "the" in it at all
console.log(/the/.test("blah the end")); // true

//Quantifiers
// * matches a string that has abc followed by 0 or more characters
console.log(/abc*/.test("abcdefg")); // true

// * matches a string that has abc followed by 1 or more characters
console.log("yo", /abc+/.test("abcd")); // true
console.log("yo", /abc+/.test("ab")); // false
