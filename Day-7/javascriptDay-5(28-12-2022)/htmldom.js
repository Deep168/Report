document.write("<h1>We are in 'Js HTML dom'</h1>");

// get element by id

 document.getElementById("p1").innerHTML = "Hello World!";



// find element by id

var element = document.getElementById("intro");

console.log(element.innerHTML);



//Finding HTML Elements by Tag Name

var element = document.getElementsByTagName("p");

for (let i = 0; i < element.length; i++) {

  console.log(element[i].innerHTML);

}

var main = document.getElementById("div1");

var element = main.getElementsByTagName("p");

for (let i = 0; i < element.length; i++) {

  console.log(element[i].innerHTML);

}



// find html element by class name

var element = document.getElementsByClassName("para");

console.log(element);



// find elements by querySelectorAll()

var element = document.querySelectorAll("p.para");

console.log("querySelectorAll('p.para') :- ", element);



// Finding HTML Elements by HTML Object Collections

const x = document.forms["frm1"];

let text = "";

for (let i = 0; i < x.length; i++) {

  text += x.elements[i].value + "<br>";

}

document.getElementById("demo").innerHTML = text;



// // change values

// document.getElementById("demo").innerHTML = "avinash dhanani";

// // document.getElementById("img").src = "image.jpg"

// function validateForm() {

//   let x = document.forms["myForm"]["fname"].value;

//   if (x == "") {

//     alert("Name must be filled out");

//     return false;

//   }

// }

// function mOver(obj) {

//   obj.innerHTML = "Thank You";

// }



// function mOut(obj) {

//   obj.innerHTML = "Mouse Over Me";

// }




// // using JavaScript changing CSS

// document.getElementById("div1").style.backgroundColor = "lightBlue";



// // add event listner

// const displayDate = ()=>{

//     document.getElementById("btn1").innerHTML = Date();

// }

// document.getElementById("btn1").addEventListener("click", displayDate);

