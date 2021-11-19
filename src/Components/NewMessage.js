import React from "react"
import { setDoc, doc } from "firebase/firestore/lite";



class NewMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            phoneNumber: "",
            newMessage: "",
        }

        this._updatefullName = this._updatefullName.bind(this)
        this._updatephoneNumber = this._updatephoneNumber.bind(this)
        this._updatenewMessage = this._updatenewMessage.bind(this)
        this._addMessage = this._addMessage.bind(this)
        

    }

    render() {
        return(
            <div>
                
                <div>
                    <form className="form">

                        <div>
                            <input className="name" type="text" value={this.state.fullName} onChange={this._updatefullName} placeholder="Enter full name"/>   
                        </div>

                        <div className="number">
                            <input type="text" value={this.state.phoneNumber} onChange={this._updatephoneNumber} placeholder="Enter phone number"/>
                        </div>

                        <div className="message">
                            <input id="message" type="text" value={this.state.newMessage} onChange={this._updatenewMessage} placeholder="Enter new message"/>
                            <button className="submitButton" onClick={this._addMessage}>Send</button>
                        </div>
                        
                        <p>{this.state.fullName}</p>
                        <p>{this.state.phoneNumber}</p>
                        <p>{this.state.newMessage}</p>
                      
                        
                
                        
                        
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

    _updatenewMessage(event) {
        this.setState({newMessage: event.target.value})
    }

    _addMessage() {

        setDoc(doc(this.props.DB, "New Message", this.state.fullName), {
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            newMessage: this.state.newMessage,
            groups:[]
        });
        
        this.setState({
            fullName: "",
            phoneNumber: "",
            newMessage: "",
        })
    }
}

export default NewMessage