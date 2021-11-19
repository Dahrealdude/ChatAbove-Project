import React from "react"
import { Link } from 'react-router-dom';
import '../App.css'


export default function LandingPage() {

    return(
            
            <div>
                <div className="sign-in_form">

                    <form>
                        
                        <h4>Sign In</h4>

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