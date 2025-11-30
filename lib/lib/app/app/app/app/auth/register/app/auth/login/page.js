"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      // store token in localStorage for simplicity
      localStorage.setItem("ns_token", data.token);
      window.location.href = "/dashboard";
    } else {
      alert(data.error || "Login failed");
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: "40px auto" }}>
      <h2 className="neon">Login</h2>
      <form onSubmit={submit} style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
        <input required value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 rounded" />
        <input required value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" className="p-2 rounded" />
        <button className="button" style={{ marginTop: 8 }}>Login</button>
      </form>
    </div>
  );
}
