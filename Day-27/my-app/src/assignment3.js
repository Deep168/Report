import React, {useState} from 'react';
import axios from "axios";

function Assignment3() {
    const [message, setMessage] = useState("");
    const [n1    , setn1] = useState("");
    const [n2    , setn2] = useState("");
    const [n3    , setn3] = useState("");
    const [ans , setans] = useState("");
    const [n4 , setn4] = useState("");
    const [n5 , setn5] = useState("");
    const [n6 , setn6] = useState("");
    const [n7 , setn7] = useState("");
    function fetchData(event) {
      event.preventDefault();
      axios.post("http://localhost:5500/createfolder", { message: message}).then((res) => {
        
      }
    );
    }



    function fetchData2(event) {
        event.preventDefault();
        axios.post("http://localhost:5500/createfile", { n1:n1 }).then((res) => {
        }
      );
      }

      function fetchData3(event) {
        event.preventDefault();
        axios.post("http://localhost:5500/deletefile", { n2: n2}).then((res) => {
          console.log(res.data);
        }
      ).catch((err)=>{
        console.log(err);
      })
      }
      function fetchData4(event) {
        event.preventDefault();
        axios.post("http://localhost:5500/readfile", { n3: n3}).then((res) => {
          console.log(res.data);
          setans(res.data)
        }
      ).catch((err)=>{
        console.log(err);
      })
      }

      function fetchData5(event) {
        event.preventDefault();
        axios.post("http://localhost:5500/file_content", { n4: n4,n5: n5}).then((res) => {
          console.log("data is added")
        }
      )
      }

      function fetchData6(event) {
        event.preventDefault();
        axios.post("http://localhost:5500/file_append", { n6:n6,n7:n7}).then((res) => {
            console.log("data is updated")
        }
      );
      }
    return (
      <div className="wrapper">
        <h1>Drive</h1>
        
        <form >
          <input type="text" name="number" id="message" value={message} placeholder="create folder"  onChange={(e) => { setMessage(e.target.value) }} />
          <input type="submit" value="create folder" onClick={fetchData}/>
          <br></br><br></br>
          <input type="text" name="number1" id="n1" value={n1} placeholder="create file"  onChange={(e) => { setn1(e.target.value) }} />
          <input type="submit" value="create file" onClick={fetchData2}/>
          <input type="text" name="number1" id="n1" value={n1} placeholder="create file"  onChange={(e) => { setn1(e.target.value) }} />
          <input type="submit" value="create file" onClick={fetchData2}/>
          <br></br><br></br>
          <input type="text" name="number2" id="n2" value={n2} placeholder="delete file"  onChange={(e) => { setn2(e.target.value) }} />
          <input type="submit" value="delete file" onClick={fetchData3}/>
          <br></br><br></br>
          <input type="text" name="number3" id="n3" value={n3} placeholder="readfile"  onChange={(e) => { setn3(e.target.value) }} />
          <input type="submit" value="read file" onClick={fetchData4}/>
          <br></br><br></br>
          <input type="text" name="number5" id="n5" value={n5} placeholder="file content"  onChange={(e) => { setn5(e.target.value) }} />
          <input type="text" name="number4" id="n4" value={n4} placeholder="filename"  onChange={(e) => { setn4(e.target.value) }} />
          <input type="submit" value="write data" onClick={fetchData5}/>

          <br></br><br></br>
          <input type="text" name="number5" id="n5" value={n6} placeholder="file content"  onChange={(e) => { setn6(e.target.value) }} />
          <input type="text" name="number4" id="n4" value={n7} placeholder=" data"  onChange={(e) => { setn7(e.target.value) }} />
          <input type="submit" value="append  data" onClick={fetchData6}/>
        </form>
        {ans!=0 ? <div>{ans}</div> : <></>}
      </div>
    )
  }
  

  export default Assignment3