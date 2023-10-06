import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"

import Header from "./components/header";
import Home from "./pages/Home";
import Test from "./pages/Test";


export default function App() {

  const[currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div>
      <Header />
        {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm}/>
        }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}
