import React, { useState } from "react";
import "../styles/Chatbot.css";

const Chatbot = ({ sendMessage, userName }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({ sender: userName, message: input });
    setInput("");
  };

  console.log(sendMessage || userName);
  if (!sendMessage || !userName || !Array.isArray(userName || sendMessage)) {
    return <div className="chatbotr">No messages or usernames to display</div>;
  }

  return (
    <form className="chatbot">
      <input
        className="chatbot-input"
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="chatbot-submit"
        type="button"
        onClick={handleSubmit}
      >
        Send
      </button>
    </form>
  );
};

export default Chatbot;
