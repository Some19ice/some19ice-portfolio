import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiTerminal } from 'react-icons/fi';

export default function ChatTerminal({ onCommand }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'NASRDA Geospatial Agent v1.0 initialized.' },
    { type: 'system', content: 'Connected to Sentinel-1 downlink.' },
    { type: 'ai', content: 'Orbital Command online. Ask me to navigate to a project or analyze a region.' }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // User Message
    const userMsg = input.trim();
    setHistory(prev => [...prev, { type: 'user', content: userMsg }]);
    setInput('');

    // Call Backend Agent
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: history })
      });
      
      if (!response.ok) throw new Error('Comms link failed');
      
      const data = await response.json();
      
      setHistory(prev => [...prev, { type: 'ai', content: data.response }]);
      
      // Execute Tool Action
      if (data.action && data.action.type === 'navigate' && onCommand) {
        onCommand(data.action.payload);
      }
    } catch (error) {
      setHistory(prev => [...prev, { type: 'system', content: 'Error: Uplink offline. Using local backup.' }]);
      // Fallback local logic could go here
      console.error(error);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 w-96 h-96 bg-[#0f172a]/95 backdrop-blur-md border border-[#1e293b] rounded-lg shadow-2xl flex flex-col z-50 font-mono text-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#1e293b] p-3 flex items-center gap-2 border-b border-[#334155]">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-slate-300 font-bold flex items-center gap-2">
          <FiTerminal /> ORBITAL_CMD
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {history.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-[85%] rounded px-3 py-2 ${
              msg.type === 'user' 
                ? 'bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/20' 
                : msg.type === 'system'
                ? 'text-slate-500 text-xs italic'
                : 'text-slate-300'
            }`}>
              {msg.type === 'ai' && <span className="text-green-500 mr-2">➜</span>}
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 border-t border-[#334155] bg-[#0f172a]">
        <div className="flex items-center gap-2">
          <span className="text-green-500 animate-pulse">_</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter command..."
            className="flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-600"
            autoFocus
          />
          <button type="submit" className="text-slate-400 hover:text-white">
            <FiSend />
          </button>
        </div>
      </form>
    </div>
  );
}
