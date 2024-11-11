import Header from "./components/Header";
import Messages from "./components/Messages";
import MessageForm from "./components/MessageForm";
import { createContext, useState, useEffect, useRef } from "react";

export const AppContext = createContext();

function App() {
  const [messages, setMessages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetch("https://mini-messages-server-production.up.railway.app/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [showForm]);

  return (
    <AppContext.Provider value={{ setShowForm, messages, setMessages }}>
      <div className="container">
        <Header />
        {messages.length > 1 ? <Messages /> : <h5>Loading messages..</h5>}
        {showForm && <MessageForm ref={formRef} />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
