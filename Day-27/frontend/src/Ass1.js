import React, { useState } from "react";
import axios from "axios";
 function Ass1() { 
    const [n1, setn1] = useState(""); 
 const [ans, setAns] = useState(""); 
 function handleSubmit(event) { event.preventDefault();
     axios.post("http://localhost:4000", { n1: n1 }).then((res) => {
        //  console.log(res.data.ans);
        //   console.log('data added');    
          setAns(res.data.ans); 
              });  
            }  return (  
            <>   <form onSubmit={handleSubmit}>  
             <input type="text" id="number" name="n2" value={n1} onChange={(e) => { setn1(e.target.value) }} />   <input type="submit" value="Submit" />   </form>    </>  ) 
             } 
             export default Ass1;