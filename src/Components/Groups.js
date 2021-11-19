import React from "react";
import {
    Link,
    Outlet
} from 'react-router-dom';
import{collection, query, getDocs, doc, setDoc } from "firebase/firestore/lite";
import Nav from './Nav'


export default class Groups extends React.Component {
    constructor() {
        super()
        this.state = {
            loading:false,
            Groups: [
                {
                    groupMember: "Ashley Savage",
                    groupName: "Friends",
                    memberNumber: "7707778888",
                    groups: []
                }
            ]
            
        }

    }
    componentDidMount() {
        const q = query(collection(this.props.DB, "groups"));
        getDocs(q).then((querySnapshot) => {
            let groupData = [];
            querySnapshot.forEach((doc) => {
                groupData.push(doc.data());
            });
            console.log(groupData)
            this.setState({Groups: groupData, loading: false})
        })
    }
    render(){
    return (
            
        <div>
            <div>
                <div className='header'>
                    <h1>A Chat Above</h1>
                </div>
                <Nav />
                {/* <nav className='topnav'>

                    <ul>
                        <Link to="/home">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/contacts">Contacts</Link>
                        <Link to="/messages">Messages</Link>
                    </ul>

                </nav>
                    
                <Outlet/> */}
                </div>
                    
                <h1>Groups</h1>
                <br></br>
                <div className="row">
                {this.state.loading === true && <p>loading...</p>}
                    {!this.state.loading && this.state.Groups.map(function(Groups){
                        return(<div key={Groups.groupMember}>
                            <p>{Groups.groupName}</p>
                            <p>{Groups.groupMember} | {Groups.memberNumber}</p>
                            </div>)
                    })}
                    

            </div>


        </div>
    )
}
}