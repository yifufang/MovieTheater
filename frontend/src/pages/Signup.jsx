import React, { useState } from "react"

export const Signup = (props) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return ( 
        // <>Signup</>
        <div className="auth-form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <label value= {name} name="name" id= "name" placeholder="Full Name" />
                {/* <label htmlFor="email"> email</label> */}
                <input value={email} type="email " placeholder=" youremail@gmail.com" id="email " name="name" />
                <label htmlFor="password"> password</label>
                <input value={pass} type="password" placeholder="*****" id="password " name="password" />
                <button type="submit"> Log In</button>
            </form>       

            <button className="link-button" onClick={() => props.onFormSwitch('logiin')}>Already have an account? Login here </button>
        </div> 
    )
}
