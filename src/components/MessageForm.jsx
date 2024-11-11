import React, { forwardRef, useContext, useState } from "react";
import { AppContext } from "../App";
const MessageForm = forwardRef((props, ref) => {
  const [message, setMessage] = useState({ name: "", content: "" });
  const { setShowForm } = useContext(AppContext);
  const handleInputChange = (event) => {
    setMessage((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.name && message.content) {
      fetch("https://mini-messages-server-production.up.railway.app/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setMessage({ name: "", content: "" });
          setShowForm(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <form ref={ref} className="message-form" onSubmit={handleSubmit}>
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          required
          autoComplete="off"
          value={message.name}
        />
      </div>
      <div className="input-field">
        <label htmlFor="content">Message</label>
        <textarea
          onChange={handleInputChange}
          autoComplete="off"
          required
          name="content"
          id="content"
          placeholder="Add message.."
          rows={10}
          value={message.content}
        ></textarea>
      </div>
      <input type="submit" value="Add message" />
    </form>
  );
});

export default MessageForm;
