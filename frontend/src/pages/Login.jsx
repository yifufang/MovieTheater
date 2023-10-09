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
                <label htmlFor="email">email</label>
                <input value={email} onChange={(evnt) => setEmail(evnt.target.value)} type="email" placeholder="myemail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(evnt) => setPassword(evnt.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit"> Login</button>
            </form>
            <>Don't have an account?</>
            <button onClick={() => props.onFormSwitch('register')}>Register here</button>
        </div>
    )
}