import React ,{useState} from 'react'
import axios from "axios"
function Assignment2() {
    const [message, setMessage] = useState("");
    const [n1, setn1] = useState('');
    const [Ans, setAns] = useState("");
    function fetchData(event) {
      event.preventDefault();
      axios.post("http://localhost:5000", { message: message , n1: n1 }).then((res) => {
        console.log(res.data.Ans);
        setAns(res.data.Ans)
      }
      );
    }
    return (
      <div className="wrapper">
       
        
        <form onSubmit={fetchData}>
          <input type="text" name="number" id="n1" value={message} onChange={(e) => { setMessage(e.target.value) }} />
          <input type="text" name="number1" id="n2" value={n1} onChange={(e) => { setn1(e.target.value) }} />
          <input type="submit" value="submit" />
        </form>
        {Ans!=0 ? <div><p>{Ans}</p></div> : <></>}
      </div>
    )
  }

export default Assignment2