import { useState, useEffect, useContext } from "react";
import MessageCard from "./MessageCard";
import { AppContext } from "../App";

function Messages() {
  const { messages, setMessages } = useContext(AppContext);

  const messagesR = messages.slice().reverse();

  const messagesElements = messagesR.map((message) => (
    <MessageCard key={message.id} date={message.date} name={message.author}>
      {message.content}
    </MessageCard>
  ));

  return <div className="messages-container">{messagesElements}</div>;
}
export default Messages;
