import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        console.log(email);
    }

    return (
        // <>Login</>
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange={(evnt) => setEmail(evnt.target.value)} type="email" placeholder="myemail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(evnt) => setPassword(evnt.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-button" href='/register'>Don't have an account? Register here</button>
        </div>
    )
}