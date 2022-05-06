// Imports the React class and the function useState contained within
import React, { useState} from "react";



export default function Register({Register, error, setRegistering}) {


    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {

        Register(details)
    }



    return (
        <div>
            <form> 
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

                <input onClick={setRegistering} type="submit" value="Register"/>
                <input onClick={submitHandler} type="submit" value="Back"/>
            

                {(error != "") ? ( <div className="error">{error}</div>) : ""}
            </div>
        </form>
        
        </div>

    )

}