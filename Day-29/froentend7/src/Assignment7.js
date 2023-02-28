import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Assignment7() {
  // const [Ans, setAns] = useState("");
  const [data, setdata] = useState([]);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [Assignee, setAssignee] = useState("");

  useEffect(() => {
    viewdata();
  }, []);
  useEffect(() => { }, [data]);

  function fetchData(event) {
    event.preventDefault();
    axios.post("http://localhost:4000/bugdata", { title: title, description: desc, assignee: Assignee }).then((res) => {
      const ans = res.data
      console.log(ans)
      // setAns(ans.data)
    });
  }
  // const getData = () => {
  //   axios.get('http://localhost:8000/getData')
  //     .then((res) => {
  //       console.log(res.data)
  //       // setAns(res.data);
  //     })
  // }

  const viewdata = async () => {
    const res = await axios.get("http://localhost:4000/showdata");
    setdata(res.data);
    console.log(res.data);
  }
  return (
    <div>
      <form onSubmit={fetchData} >


        <label><b> Title: </b> <input type="text" name="title" value={title} onChange={(e) => { settitle(e.target.value) }} /></label><br></br><br></br>


        <label> <b>Description:</b> <input type="text" name="describtion" value={desc} onChange={(e) => { setdesc(e.target.value) }} /></label><br></br><br></br>

        <label> <b>Assignee:</b> <input type="text" name="assignee" value={Assignee} onChange={(e) => { setAssignee(e.target.value) }} /></label><br></br><br></br>

        <input type='submit' name='submit' value='submit' />

      </form>
      <table className='striped-table'>
        <thead>
          <tr>
           
            <th scope="col">Title</th>
            <th scope="col"> Description </th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Assignee</th>
            <th scope="col">leftdays</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => {
            return (
              <tr key={index}>
                <td> {data.title}</td>
                <td> {data.description}</td>
                <td> {data.time}</td>
                <td> {data.date}</td>
                <td> {data.assignee}</td>
                {data.left_days == 0 ? 
                <td style={{ "color": "red" }}> {data.left_days}</td> : <td> {data.left_days}</td>}
                </tr>)
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Assignment7