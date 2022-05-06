import React, { useState} from "react";

import Link from 'react-router-dom'

export default function Register({register, error, setRegistering}) {

    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
    }

    const back = () => {
        setRegistering(false)
    }

    const registerHandler = () => {
            register(details)
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
            <h2>Register</h2>
        
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="Register" onClick={registerHandler}/>
            <input type="submit" id="back" value="Back" onClick={back}/>
            {(error != "") ? ( <div className="error">{error}</div>) : ""}
        </div>
        </form>
    )

}