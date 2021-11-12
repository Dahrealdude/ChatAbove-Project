import React from "react";
import { setDoc, doc } from "firebase/firestore/lite";

class Groups extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groupName: "",
            groupMember: "",
        }
        this._updateGroupName = this._updateGroupName.bind(this);
        this._updateGroupMember = this._updateGroupMember.bind(this)
    
    }
    render() {
        return(
            <div>
                <div>
                    <input type="text" value={this.state.groupName} onChange={this._updateGroupName} placeholder="Name your group"/>
                </div>
                <div>
                    <input type="text" value={this.state.groupMember} onChange={this._updateGroupMember} placeholder="Add new member"/>
                </div>
                <p>{this.state.groupName}</p>
                <p>{this.state.groupMember}</p>
                <button onClick={this._addGroup}>Add Group</button>
            </div>
        )
    }
    _updateGroupName(event) {
        this.setState({groupName: event.target.value})
    }
    _updateGroupMember(event) {
        this.setState({groupMember:event.target.value})
    }
    _addGroup() {
        setDoc(doc(this.props.DB, "groups", this.state.groupName), {
            groupName:this.state.groupName,
            groupMember: this.state.groupMember,
            groups:[]
        });
        this.setState({
            groupName: "",
            groupMember: "",
        })
    }
}

export default Groups

/**"Groups"
 * Search bar
 * List of groups with scroll
 * Div with an image, timestamp, group name, message
 *  
*/