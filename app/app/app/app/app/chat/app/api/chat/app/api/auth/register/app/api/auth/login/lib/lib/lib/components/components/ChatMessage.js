export default function ChatMessage({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`my-2 ${isUser ? "text-purple-400" : "text-green-400"}`}>
      <strong>{isUser ? "You" : "AI"}:</strong> {content}
    </div>
  );
}
