import React, { useState } from 'react'
import axios from 'axios'
const Assignment5 = () => {

  const [Ans, setAns] = useState("");
  function fetchData(event) {
    event.preventDefault();
    axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((res) => {
      console.log(res.data);
      const ans = res.data
      setAns(ans)
    }
    );
  }
  return (
    <div>
      <form onSubmit={fetchData}>
        <table className='striped-table'>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th> Created At </th>

            </tr>
          </thead>
          <tbody>
            {Ans.length > 0 ? (
              Ans
                .map((Ans, i) => (
                  <tr key={Ans.id}>
                    <td>{Ans.id}</td>
                    <td>{Ans.name}</td>
                    <td>{Ans.createdAt}</td>

                  </tr>
                ))
            ) : <></>
            }

          </tbody>
        </table>
        <input type="submit" value="Get data"></input>
      </form>
    </div>
  )
}

export default Assignment5;