import { useEffect, useState } from "react";
import axios from "axios";

export default function Inbox({ userEmail }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const res = await axios.get(`http://localhost:5000/api/inbox/${userEmail}`);
      setMessages(res.data);
    }
    fetchMessages();
  }, [userEmail]);

  const markAsRead = async (id) => {
    await axios.patch(`http://localhost:5000/api/inbox/read/${id}`);
    setMessages((msgs) => msgs.map(m => m._id === id ? { ...m, read: true } : m));
  };

  return (
    <div>
      <h2>Inbox</h2>
      {messages.map(msg => (
        <div key={msg._id} style={{ background: msg.read ? "#eee" : "#fff", padding: 10, margin: 5 }}>
          <strong>{msg.title}</strong>
          <p>{msg.message}</p>
          {!msg.read && <button onClick={() => markAsRead(msg._id)}>Mark as read</button>}
        </div>
      ))}
    </div>
  );
}
