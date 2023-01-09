// const myElement = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     myElement.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   myElement.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }

//validation api
function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;}
    else {
        document.getElementById("demo").innerHTML = "Input OK";
      } 
    } 

