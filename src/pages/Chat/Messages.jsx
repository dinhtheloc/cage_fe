import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

export default function Messages({ messages, name, avatar, userId }) {
    return (

        <ScrollToBottom className="height-537">
            <ul className="conversation-list">
                {messages.map((message, i) => <Message key={i} message={message} userId={userId} name={name} avatar={avatar} />)}
            </ul>
        </ScrollToBottom>

    )
}
