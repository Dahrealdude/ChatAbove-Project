import React from "react";
import {
    Link,
    Outlet
} from 'react-router-dom';
import Nav from './Nav'


export default function Groups() {
    return (
            
        <div>
            <div>
                <div className='header'>
                    <h1>A Chat Above</h1>
                </div>
                <Nav />
                {/* <nav className='topnav'>

                    <ul>
                        <Link to="/home">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/contacts">Contacts</Link>
                        <Link to="/messages">Messages</Link>
                    </ul>

                </nav>
                    
                <Outlet/> */}
                </div>
                
                <h1>Groups</h1>
                <div class="row">

                    <div class="leftcolumn">

                        <div class="space">

                    </div>
                </div>

            </div>


        </div>
    )
}

/**"Groups"
 * Div with an image, timestamp, group name, message
*/