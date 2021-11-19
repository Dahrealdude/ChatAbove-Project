import React from "react"
import Nav from './Nav'
import NewMessage from "./NewMessage"

  export default function Messages() {
    return (
        <div>
    
            <div className='header'>
                <h1>A Chat Above</h1>
            </div>
    
            <Nav />

            <h1>Messages</h1>
            
            <NewMessage />
              
        </div>
    )
}