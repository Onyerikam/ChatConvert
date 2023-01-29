import React, { useState } from 'react';
import './GroupChat.css';

const GroupChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div className="group-chat-container">
      <div className="group-chat-header">Group Chat</div>
      <div className="group-chat-body">
        <ul className="message-list">
          {messages.map((msg, index) => (
            <li key={index} className="message-item">
              {msg}
            </li>
          ))}
        </ul>
        <div className="message-input-container">
          <input
            className="message-input"
            placeholder="Enter message here..."
            value={message}
            onChange={handleMessageChange}
          />
          <button className="send-button" onClick={handleSendClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
