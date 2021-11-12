import React from "react";
import { setDoc, doc } from "firebase/firestore/lite";

class NewGroup extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            groupName: "",
            groupMember: "",
            memberNumber: "",
        }

        this._updateGroupName = this._updateGroupName.bind(this);
        this._updateGroupMember = this._updateGroupMember.bind(this);
        this._updateMemberNumber = this._updateMemberNumber.bind(this);
        this._addGroup = this._addGroup.bind(this);
    
    }

    render() {
        return(
            <div>
                <h2 className="newgroup">New Group</h2>
                <div className="groupname">
                    <input type="text" value={this.state.groupName} onChange={this._updateGroupName} placeholder="Enter your group name"/>
                </div>

                <div className="groupmember">
                    <input type="text" value={this.state.groupMember} onChange={this._updateGroupMember} placeholder="Enter member name"/>
                </div>

                <div className="membernumber">
                    <input type="text" value={this.state.memberNumber} onChange={this._updateMemberNumber} placeholder="Add member number"/>
                </div>

                <p>{this.state.groupName}</p>
                <p>{this.state.groupMember}</p>
                <p>{this.state.memberNumber}</p>

                <button className="button"  onClick={this._addGroup}>Add Group</button>
            </div>
        )
    }

    _updateGroupName(event) {
        this.setState({groupName: event.target.value})
    }

    _updateGroupMember(event) {
        this.setState({groupMember: event.target.value})
    }

    _updateMemberNumber(event) {
        this.setState({memberNumber: event.target.value})
    }

  
    _addGroup() {

        setDoc(doc(this.props.DB, "New Group", this.state.groupName), {
            groupName:this.state.groupName,
            groupMember: this.state.groupMember,
            memberNumber:this.state.memberNumber,
            groups:[]
        });

        this.setState({
            groupName: "",
            groupMember: "",
            memberNumber: "",
        })
    }
}

export default NewGroup

/**"New Group" text with a cancel and done option
 * Add photo option
 * Group name input
 * Add member by name or number input
 * Group description
 */