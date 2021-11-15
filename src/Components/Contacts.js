import React from 'react'
import Data from '../API/Data';
import{collection, query, getDocs, setDoc, doc } from "firebase/firestore/lite";


class Contacts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            contacts: [
                {contactName: "",
                contactNumber: ""}
            ]
        }
    this._updateContacts = this._updateContacts.bind(this)
    }

componentDidMount() {
    const c = query(collection(this.props.DB, "contacts"));
    getDocs(c).then((querySnapshot) =>{
        this._updateContacts(querySnapshot)
    })
}
    render(){
        return (
            <div className= "Contacts">
                <h1>Contacts</h1>
                {Data.map(function(contact) {
                    return (
                        <div>
                            <img style={{width: '100px', height: '100px'}} src={contact.imageUrl} alt={""}/>
                            <p>{contact.contactName}</p>
                            <p>{contact.contactNumber}</p>
                        </div>
                        
                    )
                })}
            </div>
        )
    }
    _updateContacts(querySnapshot) {
        let contactsData = [];
        querySnapshot.forEach((document) => {
            contactsData.push(document.data());
        });
        this.setState({contacts: contactsData});
        {this.state.contacts.map(function(contact){
            return <p>{contact.fullName}</p>
        })}
    }
}


export default Contacts;
/**"Contacts"
 * Search Bar input box
 * First name last name column
 * Phone number column
 * Date Added column
 */