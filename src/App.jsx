import React, { useState } from "react";
import ChatRoom from "./components/ChatRoom";
import ChatMessage from "./components/ChatMessage";
import EmailConverter from "./components/EmailConverter";
import GroupChat from "./components/GroupChat";
import Chatbot from "./components/Chatbot";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("chatroom");
  const [email, setEmail] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groupMembers, setGroupMembers] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleGroupMembersChange = (event) => {
    setGroupMembers(event.target.value);
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleCreateGroup = () => {
    setCurrentView("groupchat");
  };

  const handleBackToChatroom = () => {
    setCurrentView("chatroom");
  };

  return (
    <div className="App">
      {currentView === "chatroom" && (
        <ChatRoom
          email={email}
          onEmailChange={handleEmailChange}
          onCreateGroup={handleCreateGroup}
        />
      )}
      {currentView === "groupchat" && (
        <GroupChat
          groupName={groupName}
          groupMembers={groupMembers}
          onGroupNameChange={handleGroupNameChange}
          onGroupMembersChange={handleGroupMembersChange}
          onBackToChatroom={handleBackToChatroom}
        />
      )}
      {currentView === "emailconverter" && (
        <EmailConverter email={email} />
      )}
      {currentView === "chatmessage" && (
        <ChatMessage messages={messages} onSendMessage={handleSendMessage} />
      )}
      {currentView === "chatbot" && <Chatbot />}
    </div>
  );
}

export default App;
