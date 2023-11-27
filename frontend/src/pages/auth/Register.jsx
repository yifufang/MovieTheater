import React, { useState } from "react";
import "./auth.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          window.location.href = "/";
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <div className="auth">
      <h1 className="text-white font-extrabold mb-4 text-3xl md:text-4xl lg:text-5xl">
        REGISTER
      </h1>
      <div className="auth-form-container">
        <form className="register-form">
          <label htmlFor="name">First Name</label>
          <input
            value={firstName}
            onChange={(evnt) => setFirstName(evnt.target.value)}
            type="name"
            placeholder="John Smith"
            id="name"
            name="name"
          />
          <label htmlFor="name">Last Name</label>
          <input
            value={lastName}
            onChange={(evnt) => setLastName(evnt.target.value)}
            type="name"
            placeholder="John Smith"
            id="name"
            name="name"
          />
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
            Register
          </button>
        </form>
        <a className="link-button" href="/auth/login">
          Already have an account? Log in here
        </a>
      </div>
    </div>
  );
};
