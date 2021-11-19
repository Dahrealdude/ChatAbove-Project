import React from "react";
import {
    Link,
    Outlet
} from 'react-router-dom';


export default class Nav extends React.Component {
    render(){
        return(
            <nav className='topnav'>

                <ul>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/">Sign In</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/groups">Groups</Link>
                    <Link to="/newcontact">New Contact</Link>
                    <Link to="/newgroup">New Group</Link>
                    <Link to="/newmessage">New Message</Link>
                </ul>

            </nav>
        )
    }
}