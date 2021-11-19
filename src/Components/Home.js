import React from 'react'
import Nav from './Nav'


export default function Home() {
    return (
        
        <div>
            <div className='header'>
                <h1>A Chat Above</h1>
            </div>
      
            <Nav />

            <div class="row">

                <div class="leftcolumn">

                    <div className="space">
                        <p className="space-text">
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