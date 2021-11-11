import React from "react";
import MessagesList from "./MessagesList";
import MessagesContent from "./MessagesContent";
import MessagesUser from "./MessagesUser";

class Messages extends React.Component {
    render() {
        return (
            <div className="message">
                <MessagesList/>
                <MessagesContent/>
                <MessagesUser/>
            </div>
        )
    }
} 

export default Messages

/**"Messages"
 * Search bar
 * List of messages with scroll
 * Div with an image, timestamp, contact name, message 
*/