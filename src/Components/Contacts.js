import React from 'react'
import Data from '../API/Data';

import {
    Link,
    Outlet
  } from 'react-router-dom';

class Contacts extends React.Component {
    render(){
        return (
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
                
                <h1>Contacts</h1>

                <div className='Contacts'>
                    {Data.map(function(contact) {
                        return (
                            <div>
                                <br></br>
                                <img style={{width: '100px', height: '100px'}} src={contact.imageUrl} alt={""}/>
                                <p>{contact.name}</p>
                                <p>{contact.number}</p>
                            </div>
                            
                        )
                    })}
                </div>
                
            </div>
        )
    }
}
export default Contacts;
/**"Contacts"
 * Search Bar input box
 * First name last name column
 * Phone number column
 * Date Added column
 */