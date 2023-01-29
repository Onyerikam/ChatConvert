import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import ConvertEmailToChat from '../utils/ConvertEmailToChat';
import '../styles/EmailConverter.css';

const EmailConverter = () => {
  const [email, setEmail] = useState('');
  const [chats, setChats] = useState([]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConvertClick = () => {
    const convertedChats = ConvertEmailToChat(email);
    setChats(convertedChats);
  };

  return (
    <div className="email-converter-container">
      <div className="email-converter-header">Email Converter</div>
      <div className="email-converter-body">
        <textarea
          className="email-textarea"
          placeholder="Enter your email here..."
          value={email}
          onChange={handleEmailChange}
        />
        <button className="convert-button" onClick={handleConvertClick}>
          Convert
        </button>
      </div>
      {chats.length > 0 && <ChatRoom chats={chats} />}
    </div>
  );
};

export default EmailConverter;
