import React from "react"
import { setDoc, doc } from "firebase/firestore/lite";

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchBar: "",

        }

        this._updatesearchBar = this._updatesearchBar.bind(this)
        this._addSearch = this._addSearch.bind(this)
        

    }

    render() {
        return(
            <div className="nav">
                <form className="form">
                    <div>
                        <input type="text" value={this.state.searchBar} onChange={this._updatesearchBar} placeholder="Search messages"/>   
                    </div>
                
                    <p>{this.state.searchBar}</p>
                    <button className="button" onClick={this._addSearch}>Search</button>
                </form>
            </div>
        )
    }

    _updatesearchBar(event) {
        this.setState({searchBar: event.target.value})
    }

    _addSearch() {

        setDoc(doc(this.props.DB, "Searched", this.state.searchBar), {
            searchBar: this.state.searchBar,
            searchHistory:[]
        });
        
        this.setState({
            searchBar: "",
        })
    }
}

export default Messages

/**"Messages"
 * Search bar
 * List of messages with scroll
 * Div with an image, timestamp, contact name, list of messages 
*/