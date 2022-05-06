// Imports the React class and the function useState contained within
import React, { useState} from "react";


//This is the default function to be called to return the component when it is ineeded
//The Login function is passed in as a paramater which will be called when a user attempts to login
//A error value is also passed through which will represent the current login error message
export default function Login({Login, error, setRegistering}) {

    //creates a local state storage named 'details' and a method to update the data contained called 'setDetails()'
    //{email: "", password: ""} states that the data is json and sets the default values
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }



    return (
        //Indicates the start of a form and allicates the onSubmit event to call the function submitHandler 
        <div>
            <form onSubmit={submitHandler}> 
            <div className="form-inner"> 

                <h2>Sign in</h2> 
        
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>

                <input type="submit" value="Login" />
            

                {(error != "") ? ( <div className="error">{error}</div>) : ""}
                <div id="register" onClick={setRegistering}>Dont have an account? <b>Click Here</b></div>
            </div>
        </form>
        
        </div>

    )

}