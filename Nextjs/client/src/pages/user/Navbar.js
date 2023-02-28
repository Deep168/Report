import React from "react";
import { useRouter } from 'next/router'

function Navbar(){
    const router = useRouter()

    function home(){
        router.push('/')
    }

    function add(){
        router.push('/user/adduser')
    }

    function importfile(){
        router.push('/user/importcsv')
    }
    return (
        <header style={{ backgroundColor: "brown", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 59px" }} >
        <div style={{ margin: "15px", textAlign: "center", fontSize: "50px" }}>
            <label style={{ margin: "10px", color: "white" }}>User Management</label>
        </div>
            <div>
       

                    <input type='submit' style={{ margin: "10px", padding: "7px 9px" }} value='HOME' onClick={home}
                        />
                    <input type='submit' style={{ margin: "10px", padding: "7px 9px" }} value='Create User'  onClick={add}/>
                    {/* <input type='submit' style={{ margin: "10px", padding: "7px 9px" }} value='Import' onClick={importfile} /> */}
                  
                    
                   
                    
             
            </div>
        </header>
    )
            }
export default Navbar;