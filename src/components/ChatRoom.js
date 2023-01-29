import React from 'react';
import ChatMessage from './ChatMessage';
import '../styles/ChatRoom.css';

const ChatRoom = ({ chats }) => {
  return (
    <div className="chat-room-container">
      <div className="chat-room-header">Converted Emails</div>
      <div className="chat-room-body">
        {chats.map((chat, index) => (
          <ChatMessage key={index} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
