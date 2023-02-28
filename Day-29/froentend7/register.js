import React,{useState} from 'react'
import axios from 'axios';
function register() {

    const [data, setdata] = useState([]);
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpasswoed] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    function handlesbnmit(event) {
        event.preventDefault();
        axios.post("http://localhost:7000/register", { firstname: firstname, lastname: lastname, email: email, password:password , confirmpassword:confirmpassword }).then((res) => {
          const ans = res.data
          console.log(ans)
          // setAns(ans.data)
        });
      
  return (

    <div> <form onSubmit={handlesbnmit} >


    <label><b> Firstname </b> <input type="text" name="firstname" value={firstname} onChange={(e) => { setfirstname(e.target.value) }} /></label><br></br><br></br>


    <label> <b>Lastname</b> <input type="text" name="lastname" value={lastname} onChange={(e) => { setlastname(e.target.value) }} /></label><br></br><br></br>

    <label> <b>Email</b> <input type="text" name="email" value={email} onChange={(e) => { setemail(e.target.value) }} /></label><br></br><br></br>

    <label><b> Password </b> <input type="text" name="password" value={password} onChange={(e) => { setpasswoed(e.target.value) }} /></label><br></br><br></br>

    <label><b> ConfirmPassword </b> <input type="text" name="confirmpassword" value={confirmpassword} onChange={(e) => { setconfirmpassword(e.target.value) }} /></label><br></br><br></br>

    <input type='submit' name='submit' value='submit' />

  </form></div>
  )
}
}

export default register