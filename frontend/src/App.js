import React, { useState } from "react";
import { Routes, Route, useLocation, Outlet} from "react-router-dom";
import { Link } from 'react-router-dom';
import "./App.css";
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

//pagelayout component contains the header and footer that apears on all pages of under / and its children
import Pagelayout from "./components/Pagelayout/Pagelayout";

//import chidlren pages of /
import Membership from "./pages/Membership";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Test from "./pages/Test";


export default function App() {

  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regsiter" element={<Register />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

/*
import React, { useState } from "react";
import { Routes, Route, useLocation, Outlet} from "react-router-dom";
import { Link } from 'react-router-dom';
import "./App.css";
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"

//pagelayout component contains the header and footer that apears on all pages of under / and its children
import Pagelayout from "./components/Pagelayout/Pagelayout";

//import chidlren pages of /
import Membership from "./pages/Membership";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Test from "./pages/Test";


export default function App() {

  const[currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className="overflow-hidden">
      <Routes>
        <Route>
          <Route path="/" element={<Pagelayout><Home /></Pagelayout>} />
          <Route path="/membership" element={<Pagelayout><Membership /></Pagelayout>} />
          <Route path="/contact-us" element={<Pagelayout><ContactUs /></Pagelayout>} />
          <Route path="/about-us" element={<Pagelayout><AboutUs /></Pagelayout>} />
          <Route path="/test" element={<Pagelayout><Test /></Pagelayout>} />
        </Route>
        <Route>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}
*/