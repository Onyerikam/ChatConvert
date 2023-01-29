const ConvertEmailToChat = (email) => {
    // Extract the sender, subject, and message from the email
    const sender = email.from;
    const subject = email.subject;
    const message = email.body;
  
    // Create a chat message object with the sender, subject, and message
    const chatMessage = {
      sender,
      subject,
      message,
    };
  
    return chatMessage;
};
  
export default ConvertEmailToChat;
  