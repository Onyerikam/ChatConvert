import React from 'react';
import '../styles/ChatMessage.css';

const ChatMessage = ({ chat }) => {
  console.log(chat);
  if (!chat || !Array.isArray(chat)) {
    return <div className="chat-message-container">No chats to display</div>;
  }

  return (
    <div className="chat-message-container">
      <div className="chat-message-header">
        <div className="sender-name">{chat.sender}</div>
        <div className="timestamp">{chat.timestamp}</div>
      </div>
      <div className="chat-message-body">{chat.message}</div>
    </div>
  );
};

export default ChatMessage;
