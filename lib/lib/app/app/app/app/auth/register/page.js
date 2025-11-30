"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.success) {
      alert("Registered! Please login.");
      window.location.href = "/auth/login";
    } else {
      alert(data.error || "Error");
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: "40px auto" }}>
      <h2 className="neon">Create an account</h2>
      <form onSubmit={submit} style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
        <input required value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 rounded" />
        <input required value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" className="p-2 rounded" />
        <button className="button" style={{ marginTop: 8 }}>Register</button>
      </form>
    </div>
  );
}
