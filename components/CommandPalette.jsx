import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useRouter } from 'next/router';
import { FiSearch, FiHome, FiGrid, FiBriefcase, FiBook, FiMail, FiGithub, FiLinkedin, FiTwitter, FiFileText, FiCommand } from 'react-icons/fi';
import config from '../config';

const commands = [
  // Navigation
  { id: 'home', label: 'Go to Home', icon: FiHome, action: 'navigate', path: '/', category: 'Navigation' },
  { id: 'services', label: 'View Services', icon: FiGrid, action: 'scroll', path: '#services', category: 'Navigation' },
  { id: 'portfolio', label: 'View Projects', icon: FiBriefcase, action: 'scroll', path: '#portfolio', category: 'Navigation' },
  { id: 'contact', label: 'Contact Me', icon: FiMail, action: 'scroll', path: '#contact', category: 'Navigation' },
  { id: 'blog', label: 'Read Blog', icon: FiBook, action: 'navigate', path: '/blog', category: 'Navigation' },

  // Projects
  { id: 'ngdi', label: 'NGDI Metadata Portal', icon: FiBriefcase, action: 'navigate', path: '/projects/ngdi-metadata-portal', category: 'Projects' },
  { id: 'navi', label: 'NasrdaNavi Campus Navigation', icon: FiBriefcase, action: 'navigate', path: '/projects/nasrdanavi', category: 'Projects' },
  { id: 'station', label: 'Station Stock Manager', icon: FiBriefcase, action: 'navigate', path: '/projects/station-stock-manager', category: 'Projects' },
  { id: 'flood', label: 'Flood & Cholera Surveillance', icon: FiBriefcase, action: 'navigate', path: '/projects/flood-cholera-dashboard', category: 'Projects' },

  // External Links — use centralized config to avoid duplication
  { id: 'github', label: 'GitHub Profile', icon: FiGithub, action: 'external', path: config.socialMedia.github, category: 'Links' },
  { id: 'linkedin', label: 'LinkedIn Profile', icon: FiLinkedin, action: 'external', path: config.socialMedia.linkedin, category: 'Links' },
  { id: 'twitter', label: 'Twitter Profile', icon: FiTwitter, action: 'external', path: config.socialMedia.twitter, category: 'Links' },
  { id: 'resume', label: 'Download Resume', icon: FiFileText, action: 'external', path: config.resumeUrl, category: 'Links' },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const inputRef = useRef(null);
  const paletteRef = useRef(null);
  const router = useRouter();

  // Detect platform
  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setIsMac(navigator.platform?.toUpperCase().includes('MAC') || navigator.userAgent?.includes('Mac'));
    }
  }, []);

  const filteredCommands = useMemo(() => commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  ), [search]);

  const groupedCommands = useMemo(() => filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {}), [filteredCommands]);

  const executeCommand = useCallback((cmd) => {
    setIsOpen(false);
    setSearch('');

    if (cmd.action === 'navigate') {
      router.push(cmd.path);
    } else if (cmd.action === 'scroll') {
      if (router.pathname !== '/') {
        router.push('/' + cmd.path);
      } else {
        const el = document.querySelector(cmd.path);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (cmd.action === 'external') {
      window.open(cmd.path, '_blank');
    }
  }, [router]);

  // Unified keyboard handler — single listener for all keydown events
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
        return;
      }

      // All remaining shortcuts only apply when open
      if (!isOpen) return;

      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearch('');
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, filteredCommands.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault();
        executeCommand(filteredCommands[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, executeCommand]);

  // Focus trap — keep Tab/Shift+Tab within the palette
  useEffect(() => {
    if (!isOpen || !paletteRef.current) return;

    const handleTrapFocus = (e) => {
      if (e.key !== 'Tab') return;

      const focusable = paletteRef.current.querySelectorAll(
        'input, button, [href], [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    paletteRef.current.addEventListener('keydown', handleTrapFocus);
    const el = paletteRef.current;
    return () => el.removeEventListener('keydown', handleTrapFocus);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    setSelectedIndex(0);
  }, [isOpen]);

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
        onClick={() => { setIsOpen(false); setSearch(''); }}
      />

      {/* Palette */}
      <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-[101] p-4">
        <div ref={paletteRef} className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden" role="dialog" aria-modal="true" aria-label="Command palette">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <FiSearch className="text-muted-foreground text-lg" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground bg-muted rounded">
              esc
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto p-2">
            {Object.entries(groupedCommands).map(([category, cmds]) => (
              <div key={category} className="mb-2">
                <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {category}
                </div>
                {cmds.map((cmd) => {
                  const globalIndex = filteredCommands.indexOf(cmd);
                  const isSelected = globalIndex === selectedIndex;
                  const Icon = cmd.icon;

                  return (
                    <button
                      key={cmd.id}
                      onClick={() => executeCommand(cmd)}
                      onMouseEnter={() => setSelectedIndex(globalIndex)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${isSelected
                        ? 'bg-secondary/10 text-secondary'
                        : 'text-foreground hover:bg-muted'
                        }`}
                    >
                      <Icon className="text-lg" />
                      <span className="flex-1 text-sm">{cmd.label}</span>
                      {isSelected && (
                        <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded text-muted-foreground">
                          ↵
                        </kbd>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}

            {filteredCommands.length === 0 && (
              <div className="px-3 py-8 text-center text-muted-foreground text-sm">
                No commands found for &quot;{search}&quot;
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-border text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-muted rounded">↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded">↵</kbd>
                select
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FiCommand className="text-secondary" />
              <span>Orbital Command</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
