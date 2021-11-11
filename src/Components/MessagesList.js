import React from  "react"

class MessagesList extends React.Component {
    render() {
        return (
            <div className="messageList">
                <button className="btn">
                    <span>New Conversation</span>
                </button>
                <div className="messageslist__heading">
                    <h2>Messages</h2>
                    <button className="btn-1"></button>
                </div>
                <div className="searchbar">
                    <input className="search-input" type="text" placeholder="Search Messages" required/>
                    <button className="search-btn">Search</button>
                </div>
            </div>
        )
    }
} 

export default MessagesList