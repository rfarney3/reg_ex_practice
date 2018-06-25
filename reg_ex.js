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
// * matches a string that has ab followed by 0 or more c
console.log(/abc*/.test("abcdefg")); // true

// + matches a string that has ab followed by 1 or more c
console.log(/abc+/.test("abcd")); // true
console.log(/abc+/.test("ab")); // false

// ? matches a string that has ab followed by 0 or 1 c
console.log(/abc?/.test("ga")); // false
console.log(/abc?/.test("a")); // false
console.log(/abc?/.test("bac")); // false
console.log(/abc?/.test("ab")); // true

// {2} matches a string that has ab followed by 2 c
console.log(/abc{2}/.test("abcc")); // true
console.log(/abc{2}/.test("abcccccc")); // true
console.log(/abc{2}/.test("abc")); // false

// {2,} matches a string that has ab followed by 2 or more c
console.log(/abc{2,}/.test("abccccc")); // true
console.log(/abc{2,}/.test("abcc")); // true
console.log(/abc{2,}/.test("abc")); // false

// {2,5} matches a string that has ab followed by 2 up to 5 c
let arr = /abc{2,5}/.exec("abccccccccc");
console.log(arr[0]); // abccccc

// a(bc)* matches a string that has a followed by zero or more copies of bc
let arr2 = /a(bc)*/.exec("abcbc")
console.log(arr2[0]); //abcbc

// a(bc){2,5}  matches a string that has a followed by 2 up to 5 copies of the sequence bc
let arr3 = /a(bc){2,4}/.exec("abcbcbcbcbcbcbcbcbc")
console.log(arr3[0]); //abcbcbcbc

//OR OPERATOR
//a(b|c) matches a string that has a followed by b or c
let arr4 = /a(b|c)/.exec("abasdgasdfgs")
console.log(arr4[0]); //ab

//same as above
let arr5 = /a[bc]/.exec("abasdgasdfgs")
console.log(arr5[0]); //ab

//CHARACTER CLASSES
// \d matches a single character that is a digit
let arr6 = /\d/.exec("abasdgasdfgs123")
console.log(arr6[0]); // 1

// \w matches a word character (alphanumeric character plus underscore)
let arr7 = /\w/.exec("abasdgasdfgs")
console.log(arr7[0]); //a

// \s matches whitespace character (includes tabs and line breaks)
let arr8 = /\s/.exec("aba   sdgasdfgs  ")
console.log(arr8[0]); // (nothing) it just finds a linebreak/tab

// . matches any character
let arr9 = /./.exec("heyaaaa")
console.log(arr9[0]); // h
