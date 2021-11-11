import React from 'react';

export default function SignIn(){
    return(
        <div className="nav">
            <form className="form">
                <input placeholder="email"></input><br></br>
                <input placeholder="password"></input><br></br>
                <button className="button">Sign In</button><br></br>
                {/* <button>Create Account</button><br></br> */}
                {/* <a href="#">Forgot Password</a> */}
            </form>
        </div>
    )
}