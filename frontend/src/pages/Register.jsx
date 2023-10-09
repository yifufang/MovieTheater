import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        // <>Register</>
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(evnt) => setName(evnt.target.value)} type="name" placeholder="John Smith" id="name" name="name" />
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange={(evnt) => setEmail(evnt.target.value)} type="email" placeholder="myemail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(evnt) => setPassword(evnt.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Register Now!</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}
