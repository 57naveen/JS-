console.log("hellow world");

//Is used to return the type of a variable, 
//whether it's a number, string, function, object, or undefined. 
console.log(typeof("hello")); 
console.log(typeof(14));

//------------------------- Strings method -------------------------------//

//Strings
myVariable ="Mathematics";

//length property
console.log(myVariable.length);

//string method
console.log(myVariable.charAt(0));

//indexof and lastIndexOf

//The Indexof function is used to return the starting position of the word.
console.log(myVariable.indexOf("at"));

//returns the index (position) of the last occurrence of a specified value in a string
console.log(myVariable.lastIndexOf("at"));

//Slice
//starting and ending index
console.log(myVariable.slice(5,8));


console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());


//used to determine whether any particular element is present in the array or not
console.log(myVariable.includes("mat"));

//It allows you to split a string 
console.log(myVariable.split("e"));

//another examples
console.log("I can Rewrite the story".split("R"));

console.log("I can Rewrite the story".split(" "));

console.log("I,can,Rewrite,the,story".split(""));



//---------------------------------NUMBERS----------------------------------------//

//Numbers
const myVariable2 ="42";
const myNumber = 42;

const myFloat = 42.0;

//if you print the string the output color should be white
//if you print the integer the output color should be voilet

console.log(myNumber === myFloat);
console.log(myVariable2);


//number() fuction is used to change the string to number 
console.log(Number(myVariable2));

//first Change the string to integer and add value 3  
console.log(Number(myVariable2) + 3);

//joining the 3 with the string value= '423'
console.log(myVariable2 + 3);


//if you ask to change the string to number the output  will be NaN - Not a Number 
console.log(Number("hello") + 3);


//true = 1
//false =0

//If you pass the true value the output will be 1
console.log(Number(true));

//If you pass the false value the output will be 0
console.log(Number(false));


//------------------------Number Method------------------------------//

console.log(Number.isInteger(21));










