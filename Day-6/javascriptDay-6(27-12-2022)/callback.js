// const students=[
//     {name:"harry", subject:"JSON"},
//     {name:"Rohan", subject:"ml"}

// ]

// //  function EnrollStudents(student,callback){
//     return new Promise (function(reslove , reject)
// // setTimeout(function(){
// // students.push(student);
// // callback();
// // },3000);
// // }

// function getStudents(){
//     setTimeout(function(){
//     let str=" ";
//     students.forEach(function(student) {
//         str += `<li>${student.name}</li>`
//     });
//     document.getElementById('students').innerHTML=str;
//     },1000);
//     }

//     let newStudent={name:"sunny", subject:"python"}
//     EnrollStudents(newStudent ,getstudents);
//     //getStudents();

//promised and Reject
// function func1(){
//     return new Promise (function(reslove , reject){
//         setTimeout(()=>{
// const error = true;
// if(!error){
//     console.log("problem resolvesd")
//     reslove();
// }else{
//     console.log("problem  not resolvesd")
//     reject();
// }
//         }, 2000);
//     }
//     )
// }

func1().then(function(){
console.log("Thanks")
}).catch(function(error){
    console.log("very bad"+ error)
 })

// //Async/await
// async function harry(){
//     console.log("inside harry functiom ")
//     const response= await fetch ('https://api.github.com/');
//     console.log("before response ")
//     const users= await response.json();
//     console.log("user resolved")
//     return users;
// }
// console.log("Before calling")
// let a= harry();
// console.log("After calling harry")
// console.log(a)
// a.then(data=>console.log(data))
