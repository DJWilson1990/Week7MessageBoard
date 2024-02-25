import { useState, useEffect } from "react";
import MessageList from "../components/MessageList";

export default function ViewMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const response = await fetch(`http://localhost:1212/messages`);
      let result = await response.json();
      setMessages(result);
    }
    getMessages();
  }, []);
  // console.log(messages);
  return (
    <div>
      <h1>Read messages</h1>
      <MessageList props={messages} />
    </div>
  );
}
