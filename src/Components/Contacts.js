import React from 'react'
import Data from '../API/Data';

class Contacts extends React.Component {
    render(){
        return (
            <div className= "Contacts">
                <h1>Contacts</h1>
                {Data.map(function(contact) {
                    return (
                        <div>
                            <img style={{width: '100px', height: '100px'}} src={contact.imageUrl} alt={""}/>
                            <p>{contact.name}</p>
                            <p>{contact.number}</p>
                        </div>
                        
                    )
                })}
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