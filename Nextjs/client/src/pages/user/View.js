import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from './Navbar';
import axios from 'axios';
function View() {
    const router = useRouter()
    const ISSERVER = typeof window === "undefined";
    const [ans, setAns] = useState('');
    const [image, setImage] = useState('')
    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        if (!ISSERVER) {
            const id = localStorage.getItem('code');
            axios.get("/api/view", { params: { id } }).then((res) => {
                console.log(res.data);

                let image = res.data[0].photo.split('/')[res.data[0].photo.split('/').length-1];
                setImage(image);
                if(res.data.length>0){
                     setAns(res.data[0]);
                }

            })

        }
    }
    function back() {
        router.push('/');
    }

    return (
        <div> <>
            <Navbar />
            <center>

                <h1>View User</h1>
            </center>
            <center>
                <form>

                    <img className='circular_image' src={`/images/${image}`} alt={image} height="100px" width="100px" border-radius="50%" />
                    <br></br>
                    <label htmlFor="code">Code:{ans.code}</label>
                    <br></br>





                    <label htmlFor="firstname">First Name{ans.firstname}</label>
                    <br></br>



                    <label htmlFor="lastname">Last Name:{ans.lastname}</label>
                    <br></br>




                    <label>Email:{ans.email}</label>
                    <br></br>




                    <label htmlFor="gender">Gender:{ans.gender} </label>&nbsp;
                    <br></br>



                    <label htmlFor="hobby">Hobbies: {ans.hobbies}</label> &nbsp;
                    <br></br>



                    <label htmlFor="country">Country:{ans.country}</label>
                    <br></br>


                    <label htmlFor="dateadded">Dateadded:{ans.dateadded}</label>
                    <br></br>


                    <label htmlFor="dateupdated">Dateupdated:{ans.dateupdated}</label>
                    <br></br>

                    <label htmlFor="status">Status:{ans.status}</label>
                    <br></br>

                    <button className="btn btn-danger" onClick={back}>Back</button>
                </form>
            </center>
        </></div>
    )
}

export default View