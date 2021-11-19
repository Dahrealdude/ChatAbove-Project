import React from "react";
import { Link } from 'react-router-dom';


export default class Nav extends React.Component {
    render(){
        return(
            <nav className='topnav'>

                <ul>
                    <Link to="/"></Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/groups">Groups</Link>
                    <Link to="/"></Link>
                </ul>

            </nav>
        )
    }
}