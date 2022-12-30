console.log("regex") 
//  A regular expression is a pattern of characters.
// The pattern is used to do pattern-matching "search-and-replace" functions on text.
// In JavaScript, a RegExp Object is a pattern with Properties and Methods.

// Syntax :- /pattern/modifier(s);
// /w3schools/ :-	A regular expression
// /w3schools/i 
// :- A case-insensitive regular expression
// g :- Perform a global match
// i :- Perform case-insensitive matching
// m :- Perform multiline matching

// compile()    :-	Deprecated in version 1.5. Compiles a regular expression
// exec()       :-	Tests for a match in a string. Returns the first match
// test()       :-	Tests for a match in a string. Returns true or false
// toString()   :-	Returns the string value of the regular expression

var regex = /is/g;
var str1 = "my name is avinash dhanani, there was is IS company."
console.log(str1)
console.log("/is/g :- "+ str1.match(regex).toString());

var text = `Is this
all there is
is`
console.log(text.match(/is/mgi));
// ^ :-  specifies a match at the start of a string.
// $ :- specifies a match at the end of a string.


// [abc]    :-	Find any character between the brackets
// [^abc]   :-	Find any character NOT between the brackets
// [0-9]    :-	Find any character between the brackets (any digit)
// [^0-9]   :-	Find any character NOT between the brackets (any non-digit)
// (x|y)    :-	Find any of the alternatives specified

var text = "Is this all there is?";
console.log(text);
console.log("/[A-z]/g : " , text.match(/[A-z]/g));
console.log(text);
console.log("/[abc]/g : ",text.match(/[abc]/g));
var text = "Is this all there is?. and my mobile no. is 9104136213";
console.log('/[^0-1]/g : ',text.match(/[^0-9]/g));
console.log('/^this/g : ',text.match(/[^this]/g));

var number1 = "+91 9104136213";
console.log(`number ${number1} :- `,/^([+]\d{2}\ )?\d{10}$/.test(number1));

var email = "avinashdhanani_1@gmail.com";
console.log(`email ${email} :- `,/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email));

// Write a JavaScript program to test the first character of a string is uppercase or not.
var string = "Avinash";
console.log(`'${string}' contains first later capital :- `, /^[A-Z]/.test(string));

// Write a JavaScript program to check a credit card number.
var string = "1234 5678 9012 3456";
console.log(`${string} your credit card number is :- ` , /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/.test(string));

// // Write a pattern that matches e-mail addresses
// var string = "avinash_123@gmail.com";
// console.log(`${string} your email id is :- `,/^[0-9A-z-_+.]+@[A-z0-9][.]{1}[A-z0-9]$/.test(string));