import React from 'react';
import ChatMessage from './ChatMessage';
import '../styles/ChatRoom.css';

const ChatRoom = ({ chats }) => {
  console.log(chats);
  if (!chats || !Array.isArray(chats)) {
    return <div className="chat-room-container">No chats to display</div>;
  }

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
