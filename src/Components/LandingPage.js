import React from "react"
import { Link } from 'react-router-dom';
import '../App.css'


export default function LandingPage() {

    return(
            
            <div>
                <div className="sign-in_form">

                    <form className="signIn">

                        <h4>A Chat Above</h4>
                        <h5>Sign In</h5>

                        <div>
                            <input type="text" placeholder="Email"/>   
                        </div>

                        <div>
                            <input type="text" placeholder="Password"/>
                        </div>

                        <Link to="/dashboard">
                            <button className="button">Login</button>
                        </Link>
                        
                    </form>
                </div>

            </div>
    )
}