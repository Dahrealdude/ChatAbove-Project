import React from "react"
import { setDoc, doc } from "firebase/firestore/lite";
import {
    Link,
    Outlet
  } from 'react-router-dom';

class Messages extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchBar: "",

        }

        this._updatesearchBar = this._updatesearchBar.bind(this)
        this._addSearch = this._addSearch.bind(this)
        

    }

    render() {
        return(
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

                <div>
                    <div>
                        <input type="text" value={this.state.searchBar} onChange={this._updatesearchBar} placeholder="Search messages"/>   
                    </div>
                    
                    <p>{this.state.searchBar}</p>
                    
                    <button className="button" onClick={this._addSearch}>Search</button>

                </div>
                <br></br>
                <div>
                
                    <div className='dashInfo'>
                        <span className='dashMessages'>Messages<p></p></span>
                    </div>

                </div>

            </div>
        )
    }

    _updatesearchBar(event) {
        this.setState({searchBar: event.target.value})
    }

    _addSearch() {

        setDoc(doc(this.props.DB, "Searched", this.state.searchBar), {
            searchBar: this.state.searchBar,
            groups:[]
        });
        
        this.setState({
            searchBar: "",
        })
    }
}

export default Messages

/**"Messages"
 * Search bar
 * List of messages with scroll
 * Div with an image, timestamp, contact name, list of messages 
*/