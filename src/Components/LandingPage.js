import React from "react"
import { Link } from 'react-router-dom';

export default function LandingPage() {

    return(
            
            <div>
                <div className="sign-in_form">

                    <form>
                        
                    <h2>Sign In</h2>

                    <div>
                        <input type="text" placeholder="Email"/>   
                    </div>

                    <div>
                        <input type="text" placeholder="Password"/>
                    </div>

                    <Link to="/home">
                        <button className="button">Login</button>
                    </Link>
                        
                </form>
            </div>

        </div>
    )
}

/**Logo 
 * Welcome
 * info text
 * Login button */