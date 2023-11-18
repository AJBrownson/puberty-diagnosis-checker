/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Input from "./pages/input-page";
import Login from "./pages/login";
import Home from "./pages/welcome";

const Routing = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  return (
    <>
      <Routes>
      <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        <Route path="/input" element={<Input />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
};

export default Routing;