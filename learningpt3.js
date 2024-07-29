//anonymous objects - less syntax, objects without a name, not directly referenced

class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
}

let cards = [new Card("ace", "heart"), new Card("king", "heart"), new Card("10", "spades"),new Card("2", "clubs")];
//no way to directly access/reference object so we do so indercly by array index
console.log(cards[2].value + " of " + cards[2].suit);

cards.forEach(card => console.log(`${card.value} of ${card.suit}`));
//for each needs a fucntion

//ERROR HANDLING - with try catch block 
//we can use throw keyword to show error message instead of stopping the program
/*try{
    let x = window.prompt("Enter a number: ");
    x = Number(x);

    if(isNaN(x)) throw "That is not a number";
    if(x == "") throw "empty";

    console.log(`${x} is a number`);
}
catch(error){
    console.log(error);
}
finally{console.log("This always executes");120}*/ //will always execute no matter what

//setTimeout()
let alert = setTimeout(firstmessage, 300000, "math"); /* for set timout - if our function has parameters and we need to pass arguments to the function call 
we can list them in the settimeout call*/
//second value is the time delay between messages in ms (3000 ms = 3s)
function firstmessage(course){
    alert(`BUY ${course}`);
}
//clearTimeout() - clears setTimeout() but we will need an id hnce we need to store the settimeout method in a variable
clearTimeout(alert);

//setInterval() - invokes function repeatedly after a set time
/*let count = 5;
let timer = setInterval(countdown, 10000, 5);

function countdown(count){
    while(count >= 0){
        window.alert(`${count}`);
        count -= 1;
    }
    clearInterval(timer); //to clear setTimeout
}*/

//DATE OBJECT - important!!!!
let date = new Date();
//if we pass 0 as argument to Date() - reference point; any other number we pass (ms) it will create a date that many ms after the reference point
//Date(YYYY, MM, DD, hour, min, seconds, ms) month starts with 0 which is jan
//date = date.toLocaleString();

//we can also access current date properties
let year = date.getFullYear(); //to get current year
let dayofmonth = date.getDate(); //to get current date
let weekday = date.getDay(); //to get current day of week - starts from 0(sunday)
// we have access to month .getMonth(); hours .getHours();second .getSeconds();ms getMilliseconds();

/*we can set a property to be specific by .setFullYear .setMonth (also for Date, Hours, Seconds, Milliseconds) 
we can check if am or pm (hours > 12) and hours%12 || 12 (or 12 if mod gives 0) to change military (24h) clock change*/
//document.getElementById("dateto").innerHTML = weekday; 

/*ASYNCHRONOUS CODE
synchronous code executes linerly one by one
asynchronous code is out of sequence e.g the setTimeout method */

//console.time() = starts timer to track how much time has elapsed for a given synchronous operation
/*console.time() - starts timer, console.timeEnd() - stops timer */

//PROMISES - they let asynchronous methods return values like synchronous (encapsulates them)

/*const promise = new Promise((resolve, reject)=>{
let Floaded = false; // loading a file is an asynchronous process
//two parts producing and comsuming
if(Floaded){
    resolve("File loaded");
}
else{
    reject("File not loaded");
}
});
// this whole code portion is the producing
promise.then((value)=>{console.log(value);})
        .catch(error => console.log(error))*/

/*async - mamkes function return a promise, */

//await - makes function wait for a promise (needs to be inside an async function)
async function loadfile(){

    const promise  = new Promise((resolve, reject) => {
        let Floaded = false; // loading a file is an asynchronous process
        //two parts producing and comsuming
        if(Floaded){
            resolve("File loaded"); // 
        }
        else{
            reject("File not loaded");
        }
    })
    try{
        document.getElementById("header").innerHTML = await promise;
    }
    catch(error){
        document.getElementById("header").innerHTML = error;
    }

    }
loadfile(); //invoking async function that contains the await keyword

    // this whole code portion is the producing

//ES6 modules
/*we can import code from other files and use it
we include type="module" in the script tag in html file body before js file src 
anything we want to export from file should be preceeded with export keyword in file (such as variables or functions)
to import variables and functions:
import{variales,fucntions} from "filepath we are importing from"
to import everything from a file:
import * as NickName from "filepath"
and preceed variables/fucntion we are using from another file with NickName. (same concept as Math.PI)
*/
