import React, { useState } from "react";
import "./auth.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          localStorage.setItem("user_info", JSON.stringify(data.data));
          localStorage.setItem("token", JSON.stringify(data.token));
          window.location.href = "/dashboard";
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <div className="auth">
      <h1 className="text-white font-extrabold mb-4 text-3xl md:text-4xl lg:text-5xl">
        LOG IN
      </h1>
      <div className="auth-form-container">
        <form className="login-form">
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
            onClick={handleSubmit}
          >
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
