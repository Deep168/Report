import React ,{useState} from 'react'
import axios from "axios"
function Assignment1() {

   const [message, setMessage] = useState("");
  const [Ans, setAns] = useState("");
  function fetchData(event) {
    event.preventDefault();
    axios.post("http://localhost:8000", { message: message }).then((res) => {
      console.log(res.data.Ans);
      setAns(res.data.Ans)
    }
    );
  }
  return (
    <div className="wrapper">
      <h1>Prime Numbers</h1>
      
      <form onSubmit={fetchData}>
        <input type="text" name="number" id="n1" value={message} onChange={(e) => { setMessage(e.target.value) }} /><input type="submit" value="submit" />
      </form>
      {Ans.length != 0 ? <div>{Ans.map((data) => <p>{data}</p>)}</div> : <></>}
    </div>
  )
}


export default Assignment1