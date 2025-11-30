export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-black border-b border-gray-800 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-400">NeuroSphere AI</h1>

      <div className="flex gap-4">
        <a href="/" className="hover:text-purple-400">Home</a>
        <a href="/chat" className="hover:text-purple-400">Chat</a>
      </div>
    </nav>
  );
}
