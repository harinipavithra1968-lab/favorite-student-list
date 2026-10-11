import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AppLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app-shell">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="main-panel">
        <Topbar onMenu={() => setMenuOpen(true)} />
        <div className="page-content">{children}</div>
        <footer className="page-footer"><span>© 2026 StudentSpace</span><span>Made for better connections <span className="footer-heart">♥</span></span></footer>
      </main>
    </div>
  );
}
