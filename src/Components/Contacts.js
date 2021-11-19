import React from 'react';
import{collection, query, getDocs } from "firebase/firestore/lite";
import Nav from './Nav';
import NewContact from "./NewContact";

export default class Contacts extends React.Component {
    constructor() {
        super()

        this.state = {
            loading:false,
            contacts: [
                {
                    fullName: "Ashley Savage",
                    phoneNumber: "7707778888",
                    relationship: "self",
                    groups: []
                }
            ]
            
        }

    }

componentDidMount() {
    const q = query(collection(this.props.DB, "Contacts"));
    getDocs(q).then((querySnapshot) => {
        let contactData = [];
        querySnapshot.forEach((doc) => {
            contactData.push(doc.data());
        });
        console.log(contactData)
        this.setState({contacts: contactData, loading: false})
    })
}
    render(){
        return (
            <div>
                
                <div className='header'>
                    <h1>A Chat Above</h1>
                </div>

                <Nav />

                <h1>Contacts</h1>
                <br></br>

                <div className='Contacts'>
                    {this.state.loading === true && <p>loading...</p>}
                    {!this.state.loading && this.state.contacts.map(function(contact){
                        return(<div key={contact.phoneNumber}>
                            <p>{contact.fullName} | {contact.phoneNumber} | {contact.relationship}</p>
                            </div>)
                    })}
                </div>
                <br></br>
                <NewContact />

            </div>
        )
    }
}