import React, { useState } from "react"

export const Login = (props) => {
    const [eml, setEmail] = useState ('');
    const [pass, setPassword] = useState ('');

    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        console.log(eml);
    }
    return (
        <div className="auth-form-container">
            <form className= "login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={eml} onChange={(evnt) => setEmail(evnt.target.value)} type="email" placeholder="myemail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(evnt) => setPassword(evnt.target.value)} type="password" placeholder="********" id="password " name="password" />
                <button type="submit"> Login</button>
            </form>       

            <button className="link-button" onClick={() => props.onFormSwitch('signin')}>Don't have an account? Sign Up here</button>
        </div>


        // ** Don't need this anymore **
        // <>Login</>
    )
}