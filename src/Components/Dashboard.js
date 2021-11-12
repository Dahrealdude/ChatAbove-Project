import React from 'react'
import '../App.css'


export default function Dashboard() {
    return (
        <div className='dashInfo'>
            <span className='dashContacts'>Number of Contacts<p>13</p></span><br></br>
            <span className='dashGroups'>Number of Groups<p>13</p></span><br></br>
            <span className='dashMessages'>Number of Messages<p>13</p></span>
        </div>
    )
}