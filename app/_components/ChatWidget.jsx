"use client";

import { Send, Trash } from 'lucide-react';
import React, { useState } from 'react';
import axios from 'axios';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export default function ChatWidget({ projectId, tags }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const placeholders = ['Hello!', 'How can I assist you?', 'Ask a question...', 'Message bot'];
  const introText = `Hello! 👋 I'm your AI assistant. How can I help? 😊`;

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const userMessage = { role: 'user', content: trimmedInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/query`, {
        query_text: trimmedInput,
        project_id: projectId,
        tags,
      });

      const assistantMessage = { role: 'assistant', content: res.data.answer };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling backend:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          💬
        </button>
      )}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 h-[400px] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 z-50">
          <div className="flex justify-between items-center p-3 bg-blue-500 text-white rounded-t-lg">
            <h3 className="font-medium">Chat Support</h3>
            <button onClick={() => setIsOpen(false)} className="text-xl">×</button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto bg-gray-50 space-y-3">
            {messages.length === 0 && <TextGenerateEffect words={introText} />}
            {messages.map((msg, idx) => (
              <div key={idx} className={`my-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg max-w-[80%] ${
                    msg.role === 'user'
                      ? 'bg-blue-200 text-black rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-left">
                <span className="bg-gray-200 px-3 py-2 rounded-lg inline-block rounded-bl-none">
                  Thinking...
                </span>
              </div>
            )}
          </div>

          <div className="p-3 border-t bg-white flex gap-2">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onSubmit={handleSend}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              <Send size={20} />
            </button>
            <button
              onClick={handleClearChat}
              className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <Trash size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}