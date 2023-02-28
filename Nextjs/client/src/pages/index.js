import React from 'react';
import Navbar from './user/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './user/User';
import adduser from './user/adduser';

 

export default function Home() {
  return (
    <>
     
      <main >
        <div >
          
           <User />
         {/* <Router>
        <Routes>
           <Route exact path="/" element={<User />}></Route> 
          
         </Routes>
      </Router >  */}
        </div>
      </main>
    </>
  )
}
