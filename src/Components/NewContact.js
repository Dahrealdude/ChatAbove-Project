import React from "react"
import { setDoc, doc } from "firebase/firestore/lite";

class NewContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            phoneNumber: "",
            relationship: "",
        }

        this._updatefullName = this._updatefullName.bind(this)
        this._updatephoneNumber = this._updatephoneNumber.bind(this)
        this._updaterelationship = this._updaterelationship.bind(this)
        this._addContact = this._addContact.bind(this)
        

    }

    render() {
        return(
            
            <div>
                <div>
                    <form className="forms">
                        <div className="input">
                            <input type="text" value={this.state.fullName} onChange={this._updatefullName} placeholder="Enter full name"/>   
                        </div>

                        <div className="input">
                            <input type="text" value={this.state.phoneNumber} onChange={this._updatephoneNumber} placeholder="Enter phone number"/>
                        </div>

                        <div className="input">
                            <input type="text" value={this.state.relationship} onChange={this._updaterelationship} placeholder="How do you know this person"/>
                            <button className="inputButton"  onClick={this._addContact}>Add Contact</button>
                        </div>
                        
                        <p>{this.state.fullName}</p>
                        <p>{this.state.phoneNumber}</p>
                        <p>{this.state.relationship}</p>
                    </form>
                </div>

            </div>
        )
    }

    _updatefullName(event) {
        this.setState({fullName: event.target.value})
    }

    _updatephoneNumber(event) {
        this.setState({phoneNumber: event.target.value})
    }

    _updaterelationship(event) {
        this.setState({relationship: event.target.value})
    }

    _addContact() {

        setDoc(doc(this.props.DB, "Contacts", this.state.fullName), {
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            relationship: this.state.relationship,
            groups:[]
        });
        
        this.setState({
            fullName: "",
            phoneNumber: "",
            relationship: "",
        })
    }
}

export default NewContact