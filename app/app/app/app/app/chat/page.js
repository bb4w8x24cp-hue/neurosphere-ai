"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    const botMsg = { role: "assistant", content: data.reply };
    setMessages((prev) => [...prev, botMsg]);

    setInput("");
  };

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4 neon-text">AI Chat</h1>

      <div className="bg-gray-900 p-4 rounded-xl h-[60vh] overflow-y-auto mb-4 border border-cyan-600">
        {messages.map((m, i) => (
          <p key={i} className={`${m.role === "user" ? "text-cyan-400" : "text-purple-400"} mb-2`}>
            <strong>{m.role === "user" ? "You" : "AI"}:</strong> {m.content}
          </p>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-grow p-3 rounded-lg border border-gray-700 bg-black"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="px-5 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-300 transition"
        >
          Send
        </button>
      </div>
    </main>
  );
}
