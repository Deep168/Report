import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './Navbar'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import { CSVLink } from "react-csv";
import image1 from '../../assets/images/download9.png'
import image2 from '../../assets/images/download10.png'
import Papa from "papaparse";

import Image from "next/image";

function Showuserdata({ item, index, deleteuser, getData }) {
  const router = useRouter()

  const view = (item) => {
    localStorage.clear()
    localStorage.setItem('code', item.code)
    router.push('/user/View')

  }
  const edit = (item) => {
    localStorage.clear()
    localStorage.setItem('code', item.code)
    router.push('/user/Edit')
  }

  
  
  const statuschange = (code, status) => {
    axios.get("/api/statuschange", { params: { code, status } }).then((res) => {
      getData();
    })
  }

  
  

 
  return (
    <tr key={item.recid}>
      <td>{item.recid}</td>
      <td><img src={`/images/${item.photo.split('/')[item.photo.split('/').length - 1]}`} width="50px" height="50px" /></td>
      <td>{item.code}</td>
      <td>{item.firstname + " " + item.lastname
      }
      </td>
      <td>{item.email}</td>
      <td>{item.gender}</td>
      <td>{item.hobbies}</td>
      <td>{item.dateadded}</td>
      <td onClick={() => { statuschange(item.code, item.status) }} >{item.status === "Y" ? "Y" : "N"}</td>
      <td>
        <button className="btn btn-primary" onClick={() => { view(item) }}>View</button>&nbsp;
        <button className="btn btn-primary" onClick={() => { edit(item) }}>Edit</button>&nbsp;
        <button className="btn btn-danger" onClick={(e) => { deleteuser(item.code) }}>Delete</button>&nbsp;
      </td>
    </tr>
  )
}
function User() {
  const [ans, setAns] = useState([]);
  const [error, setError] = useState("");
  const [file, setFile] = useState("");
  const allowedExtensions = ["csv"];
  const [fileData, setdata] = useState('')
  const [pageNumber, setPageNumber] = useState(0);
  // const navigate = useNavigate();
  const [gender, setGender] = useState('')
  const [hobbies, setHobbies] = useState('')
  const [status, setStatus] = useState('')
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(false);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(ans.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const headers = [
    { label: "Code", key: "code" },
    { label: "Firstname", key: "firstname" },
    { label: "Lastname", key: "lastname" },
    { label: "Email", key: "email" },
    { label: "Gender", key: "gender" },
    { label: "Hobbies", key: "hobbies" },
    { label: "Country", key: "country" },
    { label: "Photo", key: "photo" },
    { label: "Status", key: "status" },
    { label: "DateAdded", key: "dateadded" },
    {label:"DateUpdated",key:"dateupdated"},
    {label:"endeffedate",key:"endeffedate"},
    {label:"recid",key:"recid"},
   
  ];

  const CSV = (ans) => {
    let Ans = []
    ans.map((item) => {
      console.log(item);
      const json = {};
      json.code = item.code;
      json.firstname = item.firstname
      json.lastname = item.lastname;
      json.email = item.email;
      json.gender = item.gender;
      json.hobbies = item.hobbies;
      json.country=item.country;
      json.photo = item.photo;
      json.status = item.status1 == "Active" ? "Active" : "Inactive";
      json.dateadded = item.dateadded;
      json.dateupdated = item.dateupdated;
      json.endeffedate = item.endeffedate;
      json.recid = item.recid
      Ans.push(json);
    });
    console.log(Ans);
    setdata(Ans);
  };
  function getdata() {
    axios.get("/api/getdata").then((res)=>{
      const ans = res.data
      console.log(res.data)
      setAns(res.data)
     
      CSV(ans);
    })
  }

  function deleteuser(code) {

    axios.get("/api/delete", { params: { code } }).then((res) => {
      getdata()
    })

  }

  function sortname() {
    axios.get("/api/sortname").then((res) => {
      const ans = res.data;
      console.log(ans)
      setAns(ans);
    })
  }

  function sortname2() {
    axios.post("/api/sortname").then((res) => {
      const ans = res.data;
      console.log(ans)
      setAns(ans);
    })
  }

  function sortdate1() {
    axios.get("/api/sortdate").then((res) => {
      const ans = res.data;
      console.log(ans)
      setAns(ans);
    })
  }

  function sortdate2() {
    axios.post("/api/sortdate").then((res) => {
      const ans = res.data;
      console.log(ans)
      setAns(ans);
    })
  }

  function filterdata() {
    axios.get("/api/filter",{params: { search: search, gender: gender, status: status, hobbies: hobbies }}).then((res)=>{
      const ans = res.data
      console.log(res.data)
      setAns(res.data)
      setdata(ans);
    })
  }

  const handleFileChange = (e) => {
    setError("");
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      setFile(inputFile);
    }
  };

  async function handleParse() {
    if (!file) return setError("Enter a valid file");
    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      // console.log(csv);
      console.log('first')
      console.log(parsedData)
      const ans = await axios.post("/api/import",parsedData);
      console.log(ans);
      // const columns = Object.keys(parsedData[0]);            
      // setData(columns);        
    };
    reader.readAsText(file);
  };



  function reset() {
    setSearch('')
    setGender('')
    setHobbies('')
    setStatus('')
    axios.get("/api/filter", {
      params: { search: '', gender: '', status: '', hobbies: '' }
    })
      .then((res) => {
        const ans = res.data;
        // 
        console.log(ans);
        setAns(ans);
      })

    setFilter(false);
  }


  useEffect(() => {
    getdata()
  }, [])

  return (
    <div>
      <Navbar />
      <input
                onChange={handleFileChange}
                id="csvInput"
                name="file"
                type="File"
            />  <button 
            onClick={handleParse}
            >Parse</button> &nbsp;

      <button > {fileData?.length &&
        <CSVLink
        headers={headers}
        data={fileData}
        target="_blank" 
          
 >
          Export </CSVLink>}
      </button>&nbsp;&nbsp;

      <div align="right">
        {filter ?
          <div>
            <input text='text' id='search' value={search} name='search' placeholder='search' onChange={(e) => { setSearch(e.target.value) }} /> <br></br>
            <label htmlFor='gender'>Gender: </label>&nbsp;
            <input id='male' type='radio' name='gender' value='male' onChange={(e) => { setGender(e.target.value) }} />
            <label htmlFor='male'>Male</label>&nbsp;
            <input id='female' type='radio' name='gender' value='female' onChange={(e) => { setGender(e.target.value) }} />
            <label htmlFor='female'>Female</label>&nbsp;<br></br>
            <label htmlFor='hobbies'>Hobbies</label>&nbsp;
            <select id='hobbies' type='text' name='hobbies'  onChange={(e) => { setHobbies(e.target.value) }} >
              <option value='select'>Select</option>
              <option value='Reading'>Reading</option>
              <option value='Travelling' >Travelling</option>
              <option value='Cricket' >Cricket</option>
              <option value='singing' >singing</option>
              <option value='Dancing' >Dancing</option>
            </select><br></br>
            <label htmlFor='Status'>Status</label>&nbsp;

            <select id='Status' type='text' name='Status' >

              <option value='select'  onChange={(e) => { setStatus(e.target.value) }}>Select</option>
              <option value='Y'>Active</option>
              <option value='N' >Inactive</option>
            </select><br></br>
            
            <button onClick={filterdata}>Filterdata</button>&nbsp;
            <button onClick={reset}>reset</button>
          </div>
          : <button onClick={(e) => { setFilter(true) }}>Filter</button>
        }</div>

      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Code</th>
            <th><button onClick={sortname}><Image src={image1} height = "20" /></button>&nbsp;&nbsp;Name&nbsp;&nbsp;<button onClick={sortname2}><Image src={image2} height = "20" /></button></th>
            <th>Email</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th><button onClick={sortdate1}><Image src={image1} height = "20"/></button>&nbsp;&nbsp;Date Added&nbsp;&nbsp;<button onClick={sortdate2} ><Image src={image2} height = "20" /></button></th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {
            ans.length > 0 ? (ans
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((item, index) => (

                <Showuserdata item={item} deleteuser={deleteuser} index={index} getData={getdata} />

              ))
            ) : <></>
          }
        </tbody>
      </table>
      <div className="pagination" style={{marginleft:"450px"}}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={changePage}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          containerClassName={"pagination"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"} />
      </div>
      
    </div>
  )
}

export default User;