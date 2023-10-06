import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <form className= "login-form" onSubmit={handleSubmit}>
                <label htmlFor="email"> email</label>
                <input value={email} type="email " placeholder=" youremail@gmail.com" id="email " name="name" />
                <label htmlFor="password"> password</label>
                <input value={pass} type="password" placeholder="*****" id="password " name="password" />
                <button type="submit"> Log In</button>
            </form>       

            <button className="link-button" onClick={() => props.onFormSwitch('signin')}>Don't have an account? Sign Up here</button>
        </div>


        // ** Don't need this anymore **
        // <>Login</>
    )
}