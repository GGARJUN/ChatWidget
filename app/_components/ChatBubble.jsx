import { MessageCircle } from 'lucide-react';

export default function ChatBubble({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition"
    >
      <MessageCircle />
    </button>
  );
}