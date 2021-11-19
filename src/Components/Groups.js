import React from "react";
import{collection, query, getDocs } from "firebase/firestore/lite";
import Nav from './Nav';
import NewGroup from "./NewGroup";


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
                        
                    <h1>Groups</h1>
                    <br></br>

                    <div className="Groups">
                        {this.state.loading === true && <p>loading...</p>}
                        {!this.state.loading && this.state.Groups.map(function(Groups){

                            return(<div key={Groups.groupMember}>

                                <p>{Groups.groupName}</p>
                                <p>{Groups.groupMember} | {Groups.memberNumber}</p>
                                </div>)
                            })
                        }
                    </div>
                    <br></br>
                    <NewGroup />
                </div>
            </div>
        )
    }
}