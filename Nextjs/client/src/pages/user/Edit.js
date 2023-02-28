import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navbar from './Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'

function Edit() {
    const router = useRouter()
    const ISSERVER = typeof window === "undefined";
    const [code, setcode] = useState('')
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [hobbies, sethobbies] = useState('')
    const [gender, setGender] = useState('');
    const [country, setcountry] = useState('');
    const [image, setImage] = useState('')
    const [file, setFile] = useState('');
    const [filename, setFileName] = useState('');
    const [ans, setAns] = useState('');
    // const [photo, setphoto] = useState('')
    const pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)



    function back() {
        router.push('/');
    }

    const getHobbies = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            sethobbies([...hobbies, value])
        }
        else {
            sethobbies(hobbies.filter((e) => e !== value))
        }
    }

    function handleSubmit() {
        // console.log(id);
        if (!ISSERVER) {
            const id = localStorage.getItem('code');
            console.log(id)
            axios.get("/api/view", { params: { id } }).then((res) => {

                console.log(res.data)
                const ans = res.data[0];
              
                setcode(res.data[0].code);
                setfirstname(ans.firstname);
                setlastname(ans.lastname);
                setemail(ans.email);
                sethobbies(ans.hobbies.split(','));
                setGender(ans.gender);
                setcountry(ans.country)
                setImage(ans.photo.split('/')[ans.photo.split('/').length - 1])
            });
        }

    }

    // const gethobbies = (e) => {
    //     const { value, checked } = e.target
    //     if (checked) {
    //         sethobbies([...hobbies, value])

    //     }
    //     else {
    //         sethobbies(hobbies.filter((e) => e !== value))
    //     }
    // }

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    useEffect(() => {
        handleSubmit()
    }, [])

     function updateUser(event) {
        event.preventDefault();
        if (code === "") {
            alert("Enter the code")
            return false;
        }
        else if (firstname === "") {
            alert("Enter First name")
            // console.log("first name")
            return false;
        } else if (lastname === "") {
            alert("Enter Last name")
            return false;
        } else if (email === "") {
            alert("Enter Email")
            return false;
        }
        else if (!pattern.test(email)) {
            alert("Enter valid email")
            return false;
        }
        else if (hobbies === "") {
            alert("Enter please select your hobbies")
        } else if (gender === "") {
            alert("Please select your gender")
        }
        else {


            if (filename) {
                const formData = new FormData();
                formData.append("file", file);
                
                formData.append("fileName", filename);
                console.log(filename);

                axios.post("/api/image", formData).then((res) => {

                })
                axios.post("/api/edit", { code: code, firstname: firstname, lastname: lastname, email: email, gender: gender, photo: filename, hobbies: hobbies, country: country }).then((res) => {

                });

                router.push('/');

            } else {
                const ans =  axios.post("/api/edit", { code: code, firstname: firstname, lastname: lastname, email: email, gender: gender, hobbies: hobbies, photo: `./public/images/${image}`, country: country });
                console.log(ans)
                router.push('/')
            }


            localStorage.clear()



        }
    }




    return (
        <>
            <center>
                <Navbar />
                <h1>Edit User</h1>
            </center>
            <center>
                <div>
                    <img src={`/images/${image}`} style={{ height: "100px", width: "100px", borderRadius: "100px" }} />
                </div>

                <form onSubmit={updateUser}>
                    {/* <img className='circular_image' src={`http://localhost:6060/getImage/${image}`} alt={image} height="100px" width="100px" border-radius="50%" /> */}
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input type="text" className="form-control" id="code" value={code} placeholder="Enter User code" onChange={(e) => { setcode(e.target.value) }} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" value={firstname} placeholder="Enter First Name" onChange={(e) => { setfirstname(e.target.value) }} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" value={lastname} placeholder="Enter last Name" onChange={(e) => { setlastname(e.target.value) }} />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control" id="email" value={email} placeholder="Enter Email" onChange={(e) => { setemail(e.target.value) }} />

                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="gender">Gender: </label>&nbsp;
                        <input
                            id="male"
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={(e) => { setGender(e.target.value) }}
                            checked={gender === "male" ? "true" : null}
                        />
                        <label htmlFor="male" className='px-2'>Male</label>
                        &nbsp;
                        <input
                            id="female"
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "female" ? "true" : null}
                        />
                        <label htmlFor="female" className='px-2'>Female</label>
                    </div>
                    <br></br>

                    <br></br>

                    <div>
                        <label htmlFor="hobby">Hobbies: </label> &nbsp;

                        <input id="hobby1" type="checkbox" name="Reading" value="Reading" onChange={getHobbies} checked={hobbies.includes("Reading") ? "true" : ""} />
                        <label htmlFor="Programming">Reading</label> &nbsp;
                        <input id="hobby2" type="checkbox" name="Dancing" value="Dancing" onChange={getHobbies} checked={hobbies.includes("Dancing") ? "true" : ""} />
                        <label htmlFor="Communication">Dancing</label> &nbsp;
                        <input id="hobby3" type="checkbox" name="singing" value="singing" onChange={getHobbies} checked={hobbies.includes("singing") ? "true" : ""} />
                        <label htmlFor="ProCommunication">singing</label> &nbsp;
                        <input id="hobby4" type="checkbox" name="playing" value="playing" onChange={getHobbies} checked={hobbies.includes("playing") ? "true" : ""} />
                        <label htmlFor="Finance">playing</label> &nbsp;

                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            id="country" className="form-select form-select-sm"
                            type="text"
                            name="country"
                            value={country}
                            onChange={e => {
                                setcountry(e.target.value);
                                console.log(e.target.value)
                            }} >

                            <option value="default" selected>Please Select</option>

                            <option value="india">India</option>

                            <option value="aus">Australia</option>

                            <option value="uk">United Kingdom</option>

                            <option value="japan">Japan</option>

                            <option value="canada">Canada</option>

                        </select>
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor='file'>Select File</label>&nbsp;
                        <input type='file' name='file' onChange={saveFile} accept='image/*' />

                    </div>
                    <br></br>

                    <input type="submit" className="btn btn-primary" value="Update" /> &nbsp;
                    <button className="btn btn-danger" onClick={back}>Back</button>
                </form>
            </center>
        </>
    )
}


export default Edit;