"use client";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendMessage(e) {
    e?.preventDefault();
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: "user", text: input }]);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setMessages((m) => [...m, { role: "assistant", text: data.reply || data.error || "No reply" }]);
    setInput("");
  }

  return (
    <div>
      <h2 className="neon">AI Chat</h2>
      <div style={{ marginTop: 12, padding: 12, background: "#050616", borderRadius: 12, minHeight: 220 }}>
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.role}:</strong> {msg.text}</p>
        ))}
      </div>

      <form onSubmit={sendMessage} style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask the AI..." className="flex-1 p-2 rounded" />
        <button className="button" onClick={sendMessage}>Send</button>
      </form>
    </div>
  );
}
