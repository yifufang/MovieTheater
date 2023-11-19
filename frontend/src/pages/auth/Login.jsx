import React, { useState } from "react";
import { Link } from "react-router-dom";
import httpClient from "../../httpClient";
import "./auth.css";


export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    console.log(email);
  };

  const logInUser = async (evnt) => {
    console.log(email, password);


    try {
      const resp = await httpClient.post("//localhost:5000/login", {
        email,
        password,
      });
      window.location.href = "/";
    } 
    catch (error) {
      if (error.response.status === 401) {
        alert("Invalid login information, either your email or password is incorrect");
      }
    }
  };

  return (
    <div className="auth">
      <h1 className="text-white font-extrabold mb-4 text-3xl md:text-4xl lg:text-5xl">LOG IN</h1>
      <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            onChange={(evnt) => setEmail(evnt.target.value)}
            type="email"
            placeholder="myemail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(evnt) => setPassword(evnt.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button
            type="submit"
            className="mt-1 py-1.5 px-4 transition-colors bg-blue-600 border active:bg-blue-800 font-medium border-black border-opacity-20 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            onClick={() => logInUser()}>
            Log in
          </button>
        </form>
        <a className="link-button" href="/auth/Register">
          Don't have an account? Register here
        </a>
      </div>
    </div>
  );
};
