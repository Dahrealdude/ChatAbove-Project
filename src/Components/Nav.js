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
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/groups">Groups</Link>   
                </ul>

            </nav>
        )
    }
}