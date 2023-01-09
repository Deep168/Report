console.log("fetch Api")
var p= document.getElementById("p1");
var content= document.getElementById("conternt");
// function getdata(){
//     console.log("started get data")
//     url="harry.txt"
//     fetch(url).then((response)=>{
// console.log("Inside the first then")
// return response.text()
//     }).then((data)=>{
//         console.log("Inside the second then")
//         console.log(data)
//     })
// }
// console.log("Before running getdata")
// getdata()
// console.log("after running getdata")

// function getdata(){
//     console.log("started get data")
//     url="https://api.github.com/"
//     fetch(url).then((response)=>{
// console.log("Inside the first then")
// return response.text()
//     }).then((data)=>{
//         console.log("Inside the second then")
//         console.log(data)
//     })
// }
// console.log("Before running getdata")
// getdata()
// console.log("after running getdata")

function postdata(){
    console.log("started get data")
    url="https://api.github.com/"
    data={'name':"harry123", "salary":"23000","age":"45"}
    params = {
        method : 'post',
        headers : {
            'content.type':'application/json'
        },
        body:data
    }
    fetch(url).then((response)=>{

return response.json()
    }).then((data)=>{
       
        console.log(data)
    })
}

postdata()

