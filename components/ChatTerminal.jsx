import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiTerminal } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

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

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // User Message
    const userMsg = input.trim();
    setHistory(prev => [...prev, { type: 'user', content: userMsg }]);
    setInput('');

    // AI Processing
    processCommand(userMsg);
  };

  const processCommand = async (cmd) => {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: cmd }),
      });

      if (!res.ok) throw new Error('Failed to reach Orbital Command');

      const data = await res.json();

      // Update history with AI response
      setHistory(prev => [...prev, { type: 'ai', content: data.text }]);

      // Execute action if provided
      if (data.action && onCommand) {
        onCommand(data.action);
      }
    } catch (error) {
      console.error('Command failed:', error);
      setHistory(prev => [...prev, { type: 'system', content: 'Connection to Orbital Command interrupted.' }]);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  // Auto-open on desktop only
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 p-3 bg-card border border-secondary/30 rounded-full shadow-lg text-secondary animate-bounce"
        >
          <FiTerminal size={24} />
        </button>
      )}

      {/* Terminal Window */}
      <div className={`fixed z-50 transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}
        bottom-0 left-0 right-0 h-[50vh] w-full md:bottom-8 md:right-8 md:left-auto md:h-96 md:w-96 
        bg-card/95 backdrop-blur-md border-t md:border border-border md:rounded-lg shadow-2xl flex flex-col font-mono text-sm overflow-hidden`}
      >
        {/* Header */}
        <div className="bg-muted/50 p-3 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-foreground font-bold flex items-center gap-2">
              <FiTerminal /> ORBITAL_CMD
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-muted-foreground hover:text-foreground transition-colors">
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {history.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] rounded px-3 py-2 ${msg.type === 'user'
                  ? 'bg-secondary/10 text-secondary border border-secondary/20'
                  : msg.type === 'system'
                    ? 'text-muted-foreground text-xs italic'
                    : 'text-foreground'
                }`}>
                {msg.type === 'ai' && <span className="text-secondary mr-2 float-left">➜</span>}
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <ReactMarkdown components={{
                    a: ({ node, ...props }) => <a {...props} className="text-secondary underline hover:text-primary" target="_blank" rel="noopener noreferrer" />,
                    p: ({ node, ...props }) => <p {...props} className="m-0 inline" />
                  }}>
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 border-t border-border bg-card">
          <div className="flex items-center gap-2">
            <span className="text-secondary animate-pulse">_</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command..."
              className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
              // Remove autoFocus on mobile to prevent keyboard pop-up
              autoFocus={typeof window !== 'undefined' && window.innerWidth > 768}
            />
            <button type="submit" className="text-muted-foreground hover:text-foreground transition-colors">
              <FiSend />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
