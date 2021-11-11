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

    }
    render() {
        return(
            <div>
                <div>
                    <input type="text" value={this.state.fullName} onChange={this._updatefullName} placeholder="Enter full name"/>   
                </div>
                <div>
                    <input type="text" value={this.state.phoneNumber} onChange={this._updatephoneNumber} placeholder="Enter phone number"/>
                </div>
                <div>
                    <input type="text" value={this.state.relationship} onchange={this._updaterelationship} placeholder="How do you know this person"/>
                </div>
                <p>{this.state.fullName}</p>
                <p>{this.state.phoneNumber}</p>
                <p>{this.state.relationship}</p>
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
    
}



/**"New Contact" text with a cancel and done option
 * Add photo option
 * First name input
 * Last name input
 * Phone number input
 * Company/How you met input
 */