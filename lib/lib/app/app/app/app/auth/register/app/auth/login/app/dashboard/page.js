"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("ns_token");
    if (!token) return;
    fetch("/api/me", { headers: { Authorization: "Bearer " + token } })
      .then((r) => r.json())
      .then((d) => setUser(d.user || null));
  }, []);

  if (!user) return <div style={{ padding: 40 }}>Please login to access dashboard.</div>;
  return (
    <div style={{ paddingTop: 24 }}>
      <h2 className="neon">Welcome, {user.email}</h2>
      <p style={{ marginTop: 12 }}>Use the chat or manage billing.</p>
    </div>
  );
}
