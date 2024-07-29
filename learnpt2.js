//ARRAYS
let names = ["kashfia","anisha", "hossain", "megha"];
//accessing and modification is done by indexing 

names.push("shaan"); //adds element at end
names.pop(); //removes last element
names.unshift("hossain"); //adds element to begining
names.shift(); // removes first element
//names.length gives us length of array, .indexOf("element") - gives us index of element

//in loops we uses array[index] (similar tu python/c) - to iterate backwards er decrement
/*we can also iterate like this:
for (let element of array) */

//sorting - array.sort() (in alphabetical order) .sort().reverse() for reverse sort

let names2 = ["kashfia","sharmeen", "hossain", "abdullah"];
//2d array
let twod = [names, names2]; // access using two sqaure brackets and iterate using nested loops

//SPREAD OPERATOR (...) - unpacks array into individual elements
names.push(...names2); // individual elemets of second array added to first (or else the whole array as an element would be added to index 3)
console.log(...names);

//REST Operator - represents an indefinate amount of parameters (makes into array)

let a = 1; let b = 2; let c = 3;

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
    
}
console.log(sum(a,b)); // we can pass an many arguments we would like to be summed tog
// when mixing rest parameter with normal parameters we have o make sure rest parameter is at the end!!!

//CALLBACKS - function passes a argument of another function (just name for argument)

function multiply(x, y, functionname){
    let result = x*y;
    functionname(result); // put function call at last with appropriate arguments
}

function displayconsole(output){
    console.log(output);
}

multiply(2, 3, displayconsole);

//array.forEach(functionName) - excute a function callback for each element in array

//array.map(function) - execute provided callback function for each element in array and creates a new array 
let example = [1,2,3,4,5,6];
function square(x){
    return Math.pow(x, 2);
}
let mapped = example.map(square); //new array by map
console.log(...mapped);

//array.filter(function) - creates new array of elemts that pass test by fucntion
//array.reduce(function) = reduces array to a single element according to function

//function expressions - fuction without a name
const greeting = function(){
    console.log("Hello World");
}
greeting();

//arrow function = useful alternative to traditional functtion expressions
const greeting2 = () => {console.log("Hello World!")} // () needed if no or >= 2 arguments
greeting2();
//sorting using arrow function
let grades = [20, 30, 40, 56, 100];
grades.sort((x,y) => x-y);
grades.forEach((element) => console.log(element));

//SHUFFLING ARRAY
let cards = ["A", "K", "Q", "J", "10"];
shuffle(cards);
console.log(...cards);

function shuffle(array1){
    let currenti = array1.length; // starting from last/end

    while(currenti != 0){
        let randomi = Math.floor(Math.random() * array1.length);
        currenti -= 1; // coming to last position (n-1)

        //swapping
        let temp = array1[currenti];
        array1[currenti] = array1[randomi];
        array1[randomi] = temp;
    }
    return array1;
}

//NESTED FUNCTIONS - better data security
login();
function login(){
    display(); // callback is needed inside outer function 
    function display(){
        console.log("You have logged in");
    }
}

//CLOSURE - function with preserved and private data
document.getElementById("loginbu").onclick = loginclo(); //we need to have () for a closer function

function loginclo(){
    let inbox = 1;
    function loginnow(){
        alert(`You have ${inbox} messages`);
        inbox = 0;
        }
    return loginnow;
}

//MAP - holds [key, value] pairs of datatye (like dictionary)

const  store2 = new Map([["shirt", 20], ["jeans", 21]]);
let cart = 0;
//methods for map
cart += store2.get("shirt"); //.get method to get a value from map
console.log(cart);
store2.set("hat",40); //.set method to add a pair
store2.delete("jeans"); //.delete deletes a pair (only need to mention key in ())
console.log(store2.has("hat")); //.has shows boolean value for checking if key is in there
console.log(store2.size); //.size shows how many pirs present in map

store2.forEach((value, key) => console.log(`${key} is $${value}`));

//OBJECTS - groups of properties(what object has) and methods(what it can do)
//THIS - reference to object on immediate context

const car = {
    //properties
    model: "BMW",
    color: "black",
    year: 1998,

    //methods
    drive: function(){
        console.log(`You are driving ${this.model}!`) //here this references to car model
    }
}

console.log(car.color); //properties are accessed by . operator
car.drive(); //.methods to access a method of object
// outside of an object this used refers to the window (context based)

//CLASS - blueprint for objects and contain constructors (special method of class)
//inside a class method does not need the function keyword

class Worker{
    salary = 100;

    speech(){console.log(`${this.name} is a worker`)};
    //STATIC - belongs to class not objects
    static numberofworkers = 0; //each worker has a number

    constructor(name,age){
        this.name = name;
        this.age = age;
        Worker.numberofworkers =+ 1; //used like this to keep track of number of objects created
    }
    walk(){console.log(`${this.name} is walking`)}
}
//we can create as many objects as we like

const anisha = new Worker("anisha", 19); //constructors allow objects to have unique properties

console.log(anisha.salary); //class properties are same for every class object created
console.log(anisha.name); // constructor properties
anisha.speech(); // class method
anisha.walk(); //contructor method

console.log(Worker.numberofworkers); //called/used like this

//INHERITANCE - child class inherits properties from parent class
//parent is worker in this eg

class Workerchild extends  Worker{
    constructor(name, age, position){
    super(name,age);
    this.position = position;
    }
    talking(){
        console.log(`${this.name} is talking`);
    }
}
//super keyword is used to assign constructors from parent to child class
let megha = new Workerchild("megha", 19, "ambassador");
let shaan = new Workerchild("shaan", 23, "worker");
megha.walk();

//get - binds object properties to function when accessed
//set - binds object properties to fucntion when property is assigned a value 
class Car2{
    constructor(power){
        this._power = power //undrscore properties are read only (protected)
    }
    get power(){
        return `${this._power}hp`;
    }
    set power(value){
        if (value > 1000){
            value = 1000;
        }
        else if (value < 0){
            value = 0;
        }
        this._power = value; //since power now has a setter it can be changed
    }
}

let car2 = new Car2(400);
console.log(car2.power);

change(megha, "clerk"); //passing object as an argument
function change(worker, position){
    console.log(worker.name);
    console.log(worker.age);
    worker.position = position; //changingg object property
    console.log(worker.position);
}

//arrays of objects
const workersnow = [megha, shaan]; //objets have to of same class
console.log(workersnow[1].name) //each object has an index

talk(workersnow);
function talk(objectarray){
    for(const object of objectarray){
        object.speech();
    }
}

