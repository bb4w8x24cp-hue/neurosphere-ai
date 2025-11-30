import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold neon-text mb-4">NeuroSphere AI</h1>
      <p className="text-lg max-w-lg opacity-80 mb-8">
        The next-generation AI platform providing powerful intelligence to everyone worldwide.
      </p>

      <Link
        href="/chat"
        className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-300 transition"
      >
        Try AI Chat
      </Link>
    </main>
  );
}
