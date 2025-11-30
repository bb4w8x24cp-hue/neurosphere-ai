"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: data.response }
    ]);

    setInput("");
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>NeuroSphere Chat</h1>

      <div style={{ marginBottom: 30 }}>
        {messages.map((m, i) => (
          <p key={i}><b>{m.role}:</b> {m.content}</p>
        ))}
      </div>

      <form onSubmit={sendMessage}>
        <input
          style={{ width: "300px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
