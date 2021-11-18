import React from "react"
import {
    Link,
    Outlet
  } from 'react-router-dom';
import Nav from './Nav'

  export default function Messages() {
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
                        <Link to="/groups">Groups</Link>
                    </ul>
                        
                </nav>
                    
                <Outlet/> */}
            </div>

            <h1>Messages</h1>
            <div class="row">

                <div class="leftcolumn">

                    <div class="space">
                    </div>
                </div>
                
            </div>
        </div>
    )
}

/**"Messages"
 * Div with an image, timestamp, contact name, list of messages 
*/