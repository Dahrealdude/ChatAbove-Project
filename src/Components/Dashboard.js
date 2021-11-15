import React from 'react'
import '../App.css'
import {
    Link,
    Outlet
  } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            <div>
                <div className='header'>
                    <h1>A Chat Above</h1>
                </div>
                
                <nav className='topnav'>
                    <ul>

                        <li>
                            <Link to="/home">Home</Link>
                        </li>

                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>

                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>

                        <li>
                            <Link to="/messages">Messages</Link>
                        </li>

                        <li>
                            <Link to="/newcontact">New Contact</Link>
                        </li>

                        <li>
                            <Link to="/newgroup">New Group</Link>
                        </li>

                        <li>
                            <Link to="/newmessage">New Message</Link>
                        </li>

                    </ul>
                </nav>
                
                <Outlet/>
            </div>

            <h1>Dashboard</h1>

            <div className='dashInfo'>
                <span className='dashContacts'>Number of Contacts<p>13</p></span><br></br>
                <span className='dashGroups'>Number of Groups<p>13</p></span><br></br>
                <span className='dashMessages'>Number of Messages<p>13</p></span>
            </div>

        </div>
    )
}