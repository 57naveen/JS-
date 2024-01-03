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

const number1="232"

//this function is used to check the value is integer or not 
console.log(Number.isInteger(21)); 


//This function is used to to give only float value from the variable
const myFloat2="23.324324efde"
console.log(Number.parseFloat(myFloat2)); 

//This function is used to give only int value from the variable
console.log(Number.parseInt(myFloat2)); 

//toFixed() formats a number to a given length after the decimal point
console.log(Number.parseFloat(myFloat2).toFixed(3)); 

//toString is used to change the any value into string 
//output color should chanage into white
console.log(myFloat2.toString()); 


//The isNaN() method returns true if the value is NaN and of type Number. Otherwise, it returns false.
console.log(Number.isNaN(NaN));

console.log(isNaN('dsnj'));


                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
//------------------------MAth Properties------------------------------//


console.log(Math.PI);

//truncate methed used to remove the decimal value after the deciaml value 
console.log(Math.trunc(Math.PI));

//round method used to round of the given value 
//Ex : if value =3.5 the output :4
//Ex : if value =3.1 the output :3
console.log(Math.round(3.5));

//ceil method will always round of the value if it is less then 5 after decimal point 
console.log(Math.ceil(4.1));

//The Math.floor() method rounds a number DOWN to the nearest integer
//floor method will not round the value  the value if it is greater then 5 after decimal point 
console.log(Math.floor(4.9));


//pow() method returns the value of x to the power of y (xy)
console.log(Math.pow(10,3));

//min used to give the minimum value output
console.log(Math.min(10,3,6,23,5));

//max used to give the Maximum value output
console.log(Math.max(10,3,6,23,5));
``
//This method is used to generate the random number.
console.log(Math.random());


// Math.random() * 10: Multiplies the random decimal by 10, giving a random decimal between 0 (inclusive) and 10 (exclusive).
// Math.floor(Math.random() * 10): Rounds down the random decimal to the nearest whole number, resulting in an integer between 0 and 9.
// Math.floor(Math.random() * 10) + 1: Adds 1 to the result, shifting the range to be between 1 and 10 (inclusive).

console.log(Math.floor(Math.random()*10)+1);



//Code challange 
//generate the random word from the given string value

const myName="Naveen";
console.log(myName.charAt(Math.floor(Math.random()*myName.length)));  




//---------------------------------IF Statement---------------------------------------//


console.log("--------------------IF Condition-----------------------------")

let customerIsBanned = false;
let viewer ="JS full course";
let reply;
let finance = true;

if(viewer)
{     
 // The `${}` syntax is used for string interpolation, meaning you can directly embed variables or expressions within a string.
    reply=`Enjoy ${viewer}`;
}
else{
    reply='Sorry I am still workimg'
}

console.log(reply);

console.log("--------------------IF condition Another logic-----------------------------")

//If customerIsBanned = true. this condition will work 
if(customerIsBanned)
{
    reply='sorry';
}

//IF viwer and finance= true. this codition will work 
else if(viewer && finance)
{     
 
    reply=`Enjoy ${viewer} and finance content`;
}
else if(viewer)
{     
 // The `${}` syntax is used for string interpolation, meaning you can directly embed variables or expressions within a string.
    reply=`Enjoy ${viewer}`;
}
else{
    reply='Sorry I am still workimg'
}

console.log(reply);



console.log("--------------------IF condition grade logic-----------------------------")


let testScore = 60;
let grade;
let collegeStudent = true;


if(testScore>=90)
{
    grade='A';
}
else if(testScore>=80)
{
    grade='B';
}
else if(testScore>=75)
{
    grade='C';
}
else if(testScore>=60)
{
    grade='D';
}
else{
    if(collegeStudent)
    {
        grade='RA';
    }else{
        grade ='F';
    }
    
}

console.log(grade);


//---------------------------------Switch Statement---------------------------------------//


console.log("--------------------Switch statement-----------------------------")


switch(2)
{
   case 1:
     console.log(1);
      break;

   case 2:
     console.log(2);
      break;
   default:
    console.log("No Match");
}


console.log("--------------------Switch statement Another Example-----------------------------")


switch(Math.floor(Math.random()*4))
{
   case 1:
     console.log("Random number 1");
      break;

   case 2:
     console.log('Random number 2');
      break;

      case 3:
        console.log('Random number 3');
         break;
   default:
    console.log("No Match");
}



//---------------------------------Conditional operator---------------------------------------//
console.log("--------------------Conditional operator-----------------------------")

//Conditional (ternary) Operator
let subscribe ="subscribed";
let response = subscribe? "Welcome" : "Kindely Subscribe";
console.log(response);


console.log("--------------------grade logic using conditional operator-----------------------------")

let testScore2=90;
let grade2=testScore2> 89 ? "A" :testScore2>75? "B":testScore2>69 ?"C" :"D";

console.log(grade2);

console.log("--------------------Rock paper scissors in Conditional operator-----------------------------")

let player ="paper";
let computer ="scissors";
let result =
 player===computer? "tie" 
:player==="rock" && computer==="paper"? "computer Wins!" 
:player ==="paper" && computer==="scissors"?"computer wins"
:player ==="scissors" && computer==="rock"?"computer wins"
:"player wins";
console.log(result);

//---------------------------------USER INPUT---------------------------------------//
console.log("-------------------- USER INPUT -----------------------------")

let my = prompt("Enter your Name");

if (my) {
    console.log(my.trim());
} else {
    console.log("Please enter your name");
}




//---------------------------------LOOPS---------------------------------------//
console.log("-------------------- LOOPS CONCEPTS -----------------------------")









