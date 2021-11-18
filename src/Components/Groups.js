import React from "react";
import { setDoc, doc } from "firebase/firestore/lite";
import {
    Link,
    Outlet
  } from 'react-router-dom';


class Groups extends React.Component {
    
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
        this._searchGroup = this._searchGroup.bind(this);
    
    }

    render() {
        return(
            
            <div>
                <div>
                    <div className='header'>
                        <h1>A Chat Above</h1>
                    </div>
                
                    <nav className='topnav'>

                        <ul>
                            <Link to="/home">Home</Link>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/contacts">Contacts</Link>
                            <Link to="/messages">Messages</Link>
                        </ul>

                    </nav>
                    
                    <Outlet/>
                </div>
                
                <h1>Groups</h1>
                <div class="row">

                    <div class="leftcolumn">

                        <div class="space">
                            
                        </div>
                    </div>

                </div>


                <div className="nav">

                    <form className="form">
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

                        <button className="button"  onClick={this._searchGroup}>Search Group</button>
                    </form>
                    
                </div>

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

  
    _searchGroup() {

        setDoc(doc(this.props.DB, "Groups", this.state.groupName), {
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

export default Groups


/**"Groups"
 * Search bar
 * List of groups with scroll
 * Div with an image, timestamp, group name, message
 *  
*/