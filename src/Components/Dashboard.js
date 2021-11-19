import React from 'react'
import '../App.css'
import Nav from './Nav'

export default function Dashboard() {
    return (
        <div>
          
            <div className='header'>
                <h1>A Chat Above</h1>
            </div>

            <Nav />

            <h1>Dashboard</h1>

            <div className='dashInfo'>
                <span className='dashMessages'><h3>Number of Messages</h3><p>4</p></span>
                <span className='dashContacts'><h3>Number of Contacts</h3><p>10</p></span><br></br>
                <span className='dashGroups'><h3>Number of Groups</h3><p>12</p></span><br></br>
            </div>

        </div>
    )
}