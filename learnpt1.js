console.log("I like strawberries"); // printed on console (eithe single or doubl quotes can be used)
console.log("they are red");

//window.alert("Love strawberries"); /*pop  up alert window displaying this message*/

/*VARIABLES*/
// 1.declaration (var, let(mst approriate), const(ariable cannot be changed)) 2. assignment 

let age;
age = 19;

let firstname = "Anisha";
let student = true;
console.log(student); //we do not put variables in quotes

console.log("Hello", firstname);
console.log("you are", age, "years old.");

//to desplay on page using html document - getting th helement by id
document.getElementById("p1").innerHTML = "Hello " + firstname; 
// we need to manually input spaces

//ARITHMATIC SYNTAX: (uses common arithmatic operations and precedence)
age = age + 1;
age += 1;
console.log(age);

//USER INPUT
/*let username = window.prompt("what is your username: ");
console.log(username); - using a window prompt*/

//using html:
let username;
document.getElementById("mybu").onclick = function(){
    username = document.getElementById("user").value; // id of input is user here
    console.log(username);
    document.getElementById("p2").innerHTML = "Hello " + username; //important to connect to html element that we are changing/is changed
    // taking userinfo and displaying it
    //.value to obtain value from html element, .innerHTML to showcase vriable into html element
}

//when accepting user input - it is ccepted as string so we need to change datatype if we want to modify input!!!!!
//we do this by - 
let x;
x = Number(x); //there is Number, String, Boolean for conversion
//typeof function is used to know datatype

//MATH
x = 3.145;
x = Math.round(x); //using Math. we can access multiple math functions, there are const too such as Math.PI
console.log(x);

// RANDOM NUMBERS
let n = Math.floor(Math.random() * 6) + 1; //- generates between 1 - 6 (computer starts from 0 hence plus 1)
//just math.random() gives us decimal numbers at random from 0 - 1
// multiplying by a number gives us decimal numbers at random from 0 - number so to get a whole number we need to round

console.log(n);
//SPACES ALSO HAVE INDEX IN STRING (PART OF STRING)

//STRING OPERATIONS - dot operations
/* .length - gives length, .charAt - what letter is at that index in string
.indexOf - gives index of first occurence of letter in array, 
lastIndexOf - gives index of last occurence of letter in array,
.trim - ets rid of empty space before and after string, 
.toUpperCase, .toLowerCase - changes case, 
.replaceAll("character to be replaced", "character to replace with(nothing if we want t oeliminate")
*/

//SLICE() - extracts section of a string and returns it as new string w/o modifying original string
let fullname = "anisha hossain";
let first;
let last;

first = fullname.slice(0, 5);
last = fullname.slice(fullname.indexOf(" ") + 1); //gves index of character after space for slice 
console.log(last);

//METHOD CHAING - multiple dot methods in one line name.charAt(index).toUpperCase

//IF STATEMENTS - 
/* if(condition){code}, else(condition){code}, else{code} - conditions are checked in order
if statements are similar to what we learned*/

//CHECKED

document.getElementById("mybu2").onclick = function(){
    const CheckBox = document.getElementById("check") // better for readability to stoe as variable
    if(CheckBox.checked){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}

//SWITCH CASES
/* switch(variable checked for){
    case "":
        code;
        break; (waterfall)
    
    default:
        if no cases match default code
    } */

/*we can also pass conditions
switch(true)
    case grade >= number:
        code;
        break;
    (default case if needed)*/

// == comparison (disregards datatype), === strict comparison (aso compares datatype)
//AND - &&, OR - ||, NOT - !

//TEMPLATE LITERALS - delimited with backticks ` - no need for comma seperation 9like formatted strings)
//syntax = `string ${varibale}`
let name2 = "Megha";
let total = 75;

let text = `Hello ${name2}, your total is $${total}`;
//we can use them for html elemts such as labels as well

let myNum = 1234567.890;
/*myNum = myNum.toLocaleString("en-US"); // formatted to US English
console.log(myNum);*/
//formatting to currency: to show as currency (different countries have different codes)
myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); // formatted to USD currency
/*we can also convert to formats like percent toLocaleString(undefined, {syle: "percent"}); - no changed to a percent
or units - toLocaleString(undefined, {syle: "unit", unit: "wanted unit"});*/
console.log(myNum);






