//REPLACE
//replacing one character
console.log("Hello World".replace(/H/g,"B")) //"Bello World"
//replacing multiple characters
console.log("Hello World".replace(/H|W/g,"B")) //"Bello Borld"

//EXEC => MATCHING
console.log(/ab*/g.exec("Hella World")) // ["a", index: 4, input: "Hella World"]

let matches = /(hello \S+)/.exec("This is a hello world!")
console.log(matches[1]); // hello world!
