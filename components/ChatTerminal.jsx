import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiSend, FiTerminal, FiTrash2 } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

const INITIAL_MESSAGES = [
  { type: 'system', content: 'NASRDA Geospatial Agent v2.0 initialized.' },
  { type: 'ai', content: 'Orbital Command online. Ask me about projects, navigate the globe, or explore the portfolio.' }
];

const SUGGESTION_CHIPS = [
  { label: '🚀 Show projects', message: 'Show me all projects' },
  { label: '🌍 Navigate to Abuja', message: 'Navigate to Abuja and show me the NGDI portal' },
  { label: '📄 Get resume', message: 'Can I get a link to the resume?' },
  { label: '🛰️ Flood dashboard', message: 'Tell me about the flood surveillance project' },
];

const MIN_SEND_INTERVAL_MS = 1000;

function TypingIndicator() {
  return (
    <div className="flex items-start">
      <div className="text-foreground">
        <span className="text-secondary mr-2">➜</span>
        <span className="inline-flex gap-1 items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '300ms' }} />
        </span>
      </div>
    </div>
  );
}

function ChatMessage({ msg, idx }) {
  return (
    <div
      className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'} chat-message-enter`}
      style={{ animationDelay: `${Math.min(idx * 30, 150)}ms` }}
    >
      <div className={`max-w-[85%] rounded px-3 py-2 ${msg.type === 'user'
        ? 'bg-secondary/10 text-secondary border border-secondary/20'
        : msg.type === 'system'
          ? 'text-muted-foreground text-xs italic'
          : msg.type === 'error'
            ? 'text-destructive text-sm border border-destructive/20 bg-destructive/5 rounded'
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
  );
}

export default function ChatTerminal({ onCommand }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [lastSendTime, setLastSendTime] = useState(0);
  const [lastFailedMessage, setLastFailedMessage] = useState(null);
  const messagesEndRef = useRef(null);
  const inputFieldRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, isLoading, scrollToBottom]);

  // Build conversation history for the API (user + ai messages only)
  const buildApiHistory = useCallback(() => {
    return history
      .filter(msg => msg.type === 'user' || msg.type === 'ai')
      .map(msg => ({
        role: msg.type === 'user' ? 'user' : 'model',
        content: msg.content
      }));
  }, [history]);

  const processCommand = useCallback(async (cmd) => {
    setIsLoading(true);
    setLastFailedMessage(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: cmd,
          history: buildApiHistory()
        }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setHistory(prev => [...prev, { type: 'error', content: data.text || 'Too many messages. Please slow down.' }]);
        setIsLoading(false);
        return;
      }

      if (!res.ok) {
        setHistory(prev => [...prev, { type: 'error', content: data.text || 'Failed to reach Orbital Command.' }]);
        setIsLoading(false);
        return;
      }

      setHistory(prev => [...prev, { type: 'ai', content: data.text }]);

      if (data.action && onCommand) {
        onCommand(data.action);
      }
    } catch (error) {
      console.error('Command failed:', error);
      setLastFailedMessage(cmd);
      setHistory(prev => [...prev, { type: 'error', content: 'Connection to Orbital Command interrupted.' }]);
    } finally {
      setIsLoading(false);
    }
  }, [buildApiHistory, onCommand]);

  const handleSend = useCallback((e) => {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    // Client-side rate limiting
    const now = Date.now();
    if (now - lastSendTime < MIN_SEND_INTERVAL_MS) return;
    setLastSendTime(now);

    setHistory(prev => [...prev, { type: 'user', content: trimmed }]);
    setInput('');
    setShowSuggestions(false);
    processCommand(trimmed);
  }, [input, isLoading, lastSendTime, processCommand]);

  const handleSuggestionClick = useCallback((message) => {
    if (isLoading) return;

    const now = Date.now();
    if (now - lastSendTime < MIN_SEND_INTERVAL_MS) return;
    setLastSendTime(now);

    setHistory(prev => [...prev, { type: 'user', content: message }]);
    setShowSuggestions(false);
    processCommand(message);
  }, [isLoading, lastSendTime, processCommand]);

  const handleRetry = useCallback(() => {
    if (!lastFailedMessage || isLoading) return;
    processCommand(lastFailedMessage);
  }, [lastFailedMessage, isLoading, processCommand]);

  const handleClear = useCallback(() => {
    setHistory(INITIAL_MESSAGES);
    setShowSuggestions(true);
    setLastFailedMessage(null);
  }, []);

  // Auto-open on desktop
  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    }
  }, []);

  // Focus input when chat opens on desktop
  useEffect(() => {
    if (isOpen && window.innerWidth > 768) {
      inputFieldRef.current?.focus();
    }
  }, [isOpen]);

  // Escape key to close terminal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Orbital Command chat"
          className="fixed bottom-4 right-4 z-50 p-3 bg-card border border-secondary/30 rounded-full shadow-lg text-secondary animate-bounce"
        >
          <FiTerminal size={24} />
        </button>
      )}

      {/* Terminal Window */}
      <div
        role="dialog"
        aria-label="Orbital Command chat terminal"
        className={`fixed z-50 transition-all duration-300 ease-in-out
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
          <div className="flex items-center gap-2">
            <button
              onClick={handleClear}
              aria-label="Clear chat history"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              title="Clear chat"
            >
              <FiTrash2 size={14} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat terminal"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-3"
          role="log"
          aria-live="polite"
          aria-label="Chat messages"
        >
          {history.map((msg, idx) => (
            <ChatMessage key={idx} msg={msg} idx={idx} />
          ))}

          {/* Typing Indicator */}
          {isLoading && <TypingIndicator />}

          {/* Retry Button */}
          {lastFailedMessage && !isLoading && (
            <div className="flex items-start">
              <button
                onClick={handleRetry}
                className="text-xs text-secondary hover:text-primary underline transition-colors"
              >
                ↻ Retry last message
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        {showSuggestions && !isLoading && (
          <div className="px-3 pb-2 flex flex-wrap gap-1.5">
            {SUGGESTION_CHIPS.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(chip.message)}
                className="text-xs px-2.5 py-1 rounded-full border border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-200"
              >
                {chip.label}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 border-t border-border bg-card">
          <div className="flex items-center gap-2">
            <span className={`text-secondary ${isLoading ? 'animate-pulse' : ''}`}>
              {isLoading ? '⏳' : '_'}
            </span>
            <label htmlFor="chat-input" className="sr-only">Enter command</label>
            <input
              id="chat-input"
              ref={inputFieldRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isLoading ? 'Processing...' : 'Enter command...'}
              disabled={isLoading}
              className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
            >
              <FiSend />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
