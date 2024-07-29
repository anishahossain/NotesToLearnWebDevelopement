//DOM = Document Object Model (API) - an interface for changing content of  page
/*our DOm is a representation of an html document
console.log(document) - will show the html code 
console,dir(document) - will list all properties of our dom 
console.log(document.title) - will show document title
console.log(document.URL) - will show document url
and we can change these html items in our js files too
*/

//document is the acces point

document.title = "Tile has been changed";
//we can use document.url, e can change the url
document.body.style.backgroundColor =  "pink";
document.getElementById("mylabel").innerHTML = "hello world";

//selecting elements
//by id
let menu = document.getElementById("Menu"); 
menu.style.backgroundColor = "white";
// by nme (multiple with same name)
let animals = document.getElementsByName("animal"); //this creates an array of the radio buttons
console.log(animals[0]); //accessed through index

animals.forEach(animal => {
    if(animal.checked){
        console.log(animal.value); //shows checked button
    }
})

//selecting by tag name
let fruits = document.getElementsByTagName("li") //tage name for list items 
//lit items are stored as an array
fruits[1].style.backgroundColor = "white"; 
/*selecting by class name = document.getElementsbyClassName("class")
this will also create an array of elements in same class accessed similarly*/

let element = document.querySelector("#Menu");
// with queryselector we can selecting anything - # before id, . before class
element.style.color = "pink";
// with queryselector the first item of an array/group of elements is selected 
//to select all 

let fruits2 = document.querySelectorAll("ul"); 
//we can also use [attribute] to select every element with that attribute such as [for]
fruits2.forEach(fruit => {
    fruit.style.backgroundColor = "white";
})

//add/change html elements
/*const nametag1 = document.createElement("h2");
nametag1.textContent = "Text Content";
document.body.append(nametag1); //to put in body
// we can either use .innerHTML or .textContent (preferred - safer)*/

const list = document.querySelector("#items");
const listitem = document.createElement("li");
listitem.textContent = "item4";
//list.append(listitem); 
// .prepend if we want to add item to beginning
//to add to middle
list.insertBefore(listitem, list.getElementsByTagName("li")[1]); 
//aded to inex 1 in ul #items

//add/change CSS properties (variable.style.property)
const CSS1 = document.getElementById("CSS");
CSS1.style.backgroundColor = "lightblue";
//CSS1.style.border = "2px white solid";
//CSS1.style.color = "white";

//EVENTS - important!!!
//.onclick is one such event
//another is .onload

//CSS1.onclick = dosth;
const body1 = document.body;
//body1.onload = dosth; //do not put (), it is a callback (not invoke)

function dosth(){
    alert("Did sth!");
}

const change = document.getElementById("change");
change.onchange = dosth;

const mydiv = document.getElementById("mydiv");
mydiv.onmouseover = changebg; //once hovered over it, there is a change
mydiv.onmouseout = changebg2; //moving mouse away from object, there is a change
mydiv.onmousedown = change1; //when clicking
mydiv.onmouseup = change2; //when letting go of click

function changebg(){
    //using this, same function can be used for different element events
    this.style.backgroundColor = "lightpink";
}

function changebg2(){
    this.style.backgroundColor = "aliceblue";
}

function change1(){
    this.textContent = "on mouse down";
}

function change2(){
    this.textContent = "on mouse up!!!";
}

//.addEventListener(event, function, useCapture) - we can add many to one element
//same event can invoke different functions

const inner = document.getElementById("innerdiv");
/*inner.addEventListener("mouseover", changebg);
inner.addEventListener("mouseout", changebg2);*/

const outer = document.getElementById("outerdiv");
outer.addEventListener("click", changebg, true);
inner.addEventListener("click", changebg)
// when clicking we click both elements at same time
//in this case inner is being handled first (irrespective of code sequence)
//putting true for useCapture - it will be handled first
const kirby = document.getElementById("kirby");

CSS1.addEventListener("click", ()=>{
    //if we are using a css stylesheet then it will take one click for loading hence the intial non display property should be inline
    if(kirby.style.visibility == "hidden"){
        kirby.style.visibility = "visible";
    }
    else {
        kirby.style.visibility = "hidden";
    }
})// using visibility intsead of display, when image is hidden the space is still reserved (not for using display)
// for display none - not visble, block - visible

//KEY PRESSES
window.addEventListener("keydown", (event) => {
    console.log(event.key); //any key we press will be displayed on the console
})

const div2 = document.getElementById("div2");
window.addEventListener("keydown", move);
//keyup triggers event when you let go of key
let x = 0;
let y = 0;
//event is a provided argument (no need to mentin in move function as argument)
function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=5;
            div2.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            div2.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=5;
            div2.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=5;
            div2.style.left = x + "px";
            break;
        default:
            break;
    }
}

//ANIMATIONS
const animationbutton = document.getElementById("animation");
const div3 = document.getElementById("div3");

animationbutton.addEventListener("click", begin);
function begin(){ //simple sliding diagonal animation
    let timer2 = null;
    let x1 = 0;
    let y1 = 0;

    timer2 = setInterval(frame, 5);

    function frame(){
        //in charge of changing our div element every 5 ms
        if(x1 >= 200 || y1 >= 200){
            clearInterval(timer2); 
            //this will stop animation after 200ms
        }
        else{
            x1+=1; y1 += 1;
            div3.style.left = x1 + "px";
            div3.style.top = y1 + "px";

        }
    }
}// using degrees we can also do rotational animation just like css
// .transfrom = "rotateX("+degrees+")"
// .transform = "scale("+scaleX+","+scaleY+")" - scaling animation

//CANVAS API - drawing 
let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

//DRAWING A LINE
context.lineWidth = 5;
context.strokeStyle = "white"; //to change stroke color
context.beginPath();
context.moveTo(0,0) //picking starting position (coordinates)
//moveTo moves our brush
context.lineTo(500,500); //creates line from move point to line point
context.stroke(); //creates line throughout canvas in a diagonal
//if we create a shape, .sillStyle = "color" fills the shape 

context.strokeRect(10, 10, 250, 300); //draws rectangle, first two are starting coordinates, next two - height, width
/*CIRCLE - we begin with context.beginPath(); end with context.stroke();
context.arc(x, y, radius, startingAngle(inradians), endingAngle, true(to reverse)) */

//text 
context.font = "30px MV Boli";
context.fillStyle = "white";
context.fillText("Hello World", canvas.width/2, canvas.height/2);
//if we want to center we have to find middle

//WINDOW
//DOM is property of window
console.log(window.innerWidth);
console.log(window.innerHeight); //depends on size of window
//there is also an outer height and width

console.log(window.scrollX);
console.log(window.scrollY); // position of scroll bar
/* window.location.href using this we can change window directing address
.location also has .hostname and .pathname 
using event listener we can use an elemnt to open new new using window.open("link")
window.close() - closes window

window.alert() - is a popup;*/
//window.confirm("Press Okay"); - user needs to press okay
//window.prompt() - pop up that takes user info

//window.print() allows us to print the page - IMPORTANT



