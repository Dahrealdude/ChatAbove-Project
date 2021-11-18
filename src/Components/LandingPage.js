import React from "react"
import { setDoc, doc } from "firebase/firestore/lite";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userEmail: "",
            userPassword: "",
        }

        this._updateuserEmail = this._updateuserEmail.bind(this)
        this._updateuserPassword = this._updateuserPassword.bind(this)
        this._addLogin = this._addLogin.bind(this)

    }

    render() {
        return(
            
            <div>
                <div className="nav">

                    <form className="form">
                        
                        <h2>Sign In</h2>

                        <div>
                            <input type="text" value={this.state.userEmail} onChange={this._updateuserEmail} placeholder="Email"/>   
                        </div>

                        <div>
                            <input type="text" value={this.state.userPassword} onChange={this._updateuserPassword} placeholder="Password"/>
                        </div>
{/* comment */}
                       
                        <p>{this.state.userEmail}</p>
                        <p>{this.state.userPassword}</p>

                        <button className="button" onClick={this._addLogin}>Login</button>
  
                    </form>
                </div>

            </div>
        )
    }

    _updateuserEmail(event) {
        this.setState({userEmail: event.target.value})
    }

    _updateuserPassword(event) {
        this.setState({userPassword: event.target.value})
    }


    _addLogin() {

        setDoc(doc(this.props.DB, "Login", this.state.userEmail), {
            userEmail: this.state.userEmail,
            userPassword: this.state.userPassword,
            groups:[]
        });
        
        this.setState({
            userEmail: "",
            userPassword: "",
        })
    }
}

export default LandingPage

/**Logo 
 * Welcome
 * info text
 * Login button */