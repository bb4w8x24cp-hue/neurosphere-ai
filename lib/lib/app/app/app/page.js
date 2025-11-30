import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", paddingTop: 80 }}>
      <h1 className="neon" style={{ fontSize: 44 }}>NeuroSphere AI</h1>
      <p style={{ marginTop: 12 }}>Next-gen AI platform — sign up, chat, and grow.</p>

      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        <Link href="/auth/register"><a className="button">Register</a></Link>
        <Link href="/auth/login"><a className="button">Login</a></Link>
        <Link href="/chat"><a className="button">Try Chat</a></Link>
      </div>
    </div>
  );
}
