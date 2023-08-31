import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Dashbord from "./Dashbord/Dashbord";

function CustomRouts() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Dashbord/> */}
      <Routes>
        <Route exact path="/Signup" element={<Signup/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/dashbord" element={<Dashbord/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRouts;
