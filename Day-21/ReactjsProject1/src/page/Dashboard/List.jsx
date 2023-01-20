import React from 'react'
import { useState } from 'react'
import Pagination from './Pagination';

function List({ employees, handleEdit, handleDelete, setEmployees }) {
    const [searchEmployee, setsearchEmployee] = useState('');
    const serachEmp = (e) => {
        setsearchEmployee(e);

    }
    const handleSearch = () => {
        const arr = [];
        let serachEmp = searchEmployee.toLowerCase();
        for (let i = 0; i < employees.length; i++) {
            if (JSON.stringify(employees[i]).toLocaleLowerCase().includes(serachEmp)) {
                arr.push(employees[i])
            }
        }
        setEmployees(arr);
    }
    // const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const nPages = Math.ceil(employees.length / recordsPerPage)

    return (
        <div className='contain-table'>
            <div style={{ marginLeft: '60%' }} className="col-xm-10 col-sm-8 col-md-6 col-lg-4 d-flex">
                <input className="form-control mr-sm-2 me-3" onChange={(e) => setsearchEmployee(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary" type="submit" onClick={() => handleSearch()}>Search</button>
            </div>
            <br></br>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>

                        <th>Gender</th>
                        <th>Department</th>
                        <th>Skills</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees
                            .slice(indexOfFirstRecord, indexOfLastRecord)
                            .map((employee, i) => (
                                <tr key={employee.id}>
                                    <td>{i + 1}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.department} </td>
                                    <td>{employee.skills}</td>
                                    <td className="text-right">
                                        <button
                                            onClick={() => handleEdit(employee.id)}
                                            className="button muted-button"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td className="text-left">
                                        <button
                                            onClick={() => handleDelete(employee.id)}
                                            className="button muted-button"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <div>
                <b>Total_Employees={employees.length}</b>
            </div>


        </div>



    )
}

export default List