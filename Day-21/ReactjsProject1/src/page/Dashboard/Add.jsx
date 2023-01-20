import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [department, setDepartment] = useState('');
    const [skills, setSkills] = useState([]);
    const [about, setAbouts] = useState('');

    useEffect(() => {

    }, [])

    const getSkills = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setSkills([...skills, value])

        }
        else {
            setSkills(skills.filter((e) => e !== value))
        }
    }

    const handleAdd = e => {

        if (!firstName || !lastName || !email || !department) {
        return Swal.fire({
         icon: 'error',
         title: 'Error!',
        text: 'All fields are required.',
         showConfirmButton: true
         });
        }



        const id = employees.length + 1;

        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            phone,
            gender,
            department,
            skills,
            about
        }


        const tempemployee = employees;
        tempemployee.push(newEmployee);
        setEmployees(tempemployee);
        setIsAdding(false);



        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });


    }


    return (
        <div>
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <br></br>
                <div>
                    <label htmlFor="firstname">First Name: </label>
                    <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value) }}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="lastname">Last Name: </label>
                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value) }}
                    />
                </div>
                <br></br>
                <div><label htmlFor="email">Email: </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    /></div>
                <br></br>
                <div><label htmlFor="phone">Phone: </label>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                    /></div>
                <br></br>
                <div>
                    <label htmlFor="gender">Gender: </label>&nbsp;
                    <input
                        id="male"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={(e) => { setGender(e.target.value) }}

                    />
                    <label htmlFor="male" className='px-2'>Male</label>
                    &nbsp;
                    <input
                        id="female"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={(e) => setGender(e.target.value)}

                    />
                    <label htmlFor="female" className='px-2'>Female</label>
                </div>
                <br></br>
                <div> <label htmlFor="department">Department: </label>
                    <select
                        id="department"
                        type="text"
                        name="department"
                        value={department}
                        onChange={e => { setDepartment(e.target.value) }} >

                        <option value="PHP">PHP</option>
                        <option value=".NET">.Net</option>
                        <option value="SEO">SEO</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Admin/HR">Admin/HR</option>
                        <option value="Account">Account</option>
                    </select>
                </div>
                <br></br>
                <div>
                    <label htmlFor="skills">Skills: </label> &nbsp;

                    <input id="skills" type="checkbox" name="Programming" value="Programming" onChange={getSkills} />
                    <label htmlFor="Programming">Programming</label> &nbsp;
                    <input id="skills" type="checkbox" name="Communication" value="Communication" onChange={getSkills} />
                    <label htmlFor="Communication">Communication</label> &nbsp;
                    <input id="skills" type="checkbox" name="ProCommunication" value="ProCommunication" onChange={getSkills} />
                    <label htmlFor="ProCommunication">ProCommunication</label> &nbsp;
                    <input id="skills" type="checkbox" name="Finance" value="Finance" onChange={getSkills} />
                    <label htmlFor="Finance">Finance</label> &nbsp;
                    <input id="skills" type="checkbox" name="Recruitment" value="Recruitment" onChange={getSkills} />
                    <label htmlFor="Recruitment">Recruitment</label> &nbsp;
                </div>
                <br></br>
                <div>
                    <label htmlFor="about">About: </label>
                    <input
                        id="about"
                        type="text"
                        name="about"
                        value={about}
                        onChange={e => { setAbouts(e.target.value) }}
                    />
                </div>

                <div style={{ marginTop: '30px' }}>
                    <input type="button" className="btn btn-primary" value="Add" onClick={() => handleAdd()} />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="btn btn-danger"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>

        </div>

    )
}

export default Add;

