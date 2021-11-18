import React from 'react'
import {
    Link,
    Outlet
  } from 'react-router-dom';


class Home extends React.Component {
    render(){
        return (
        
            <div>
                <div className='header'>
                    <h1>A Chat Above</h1>
                </div>
                
                <nav className='topnav'>
                    
                    <ul>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/landingpage">Sign In</Link>
                        <Link to="/contacts">Contacts</Link>
                        <Link to="/messages">Messages</Link>
                        <Link to="/groups">Groups</Link>
                        <Link to="/newcontact">New Contact</Link>
                        <Link to="/newgroup">New Group</Link>
                        <Link to="/newmessage">New Message</Link>
                    </ul>
                    
                </nav>
                
                <Outlet/>

                <div class="row">

                    <div class="leftcolumn">

                        <div class="space">
                           <p>
                           About A Chat Above
                            A Chat Above is the best way to chat with everyone you know. 
                            It's absolutely free, whether you're talking to a group of friends, or texting with one person. 
                            Best of all, it works on nearly every phone, via push or SMS. With A Chat Above, it's easy to reach anyone, anytime, anywhere.

                            A Chat Above was founded in the Fall of 2021, inspired by a project conceived at the COR.
                           </p>
                        </div>
                    </div>
                
                </div>

            </div>


        )
    }
}
export default Home;