import { NavLink } from 'react-router-dom';
import { GraduationCap, LayoutDashboard, Users, Heart, Sparkles, X } from 'lucide-react';
import { useStudents } from '../context/StudentsContext';

const navItems = [
  { to: '/', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/students', label: 'All students', icon: Users },
  { to: '/favorites', label: 'Favorites', icon: Heart },
];

export default function Sidebar({ open, onClose }) {
  const { favoriteIds } = useStudents();
  return (
    <>
      {open && <button className="sidebar-scrim" aria-label="Close menu" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="brand-row">
          <div className="brand-icon"><GraduationCap size={23} /></div>
          <div><strong>StudentSpace</strong><span>Student directory</span></div>
          <button className="icon-button mobile-close" onClick={onClose} aria-label="Close menu"><X size={19} /></button>
        </div>
        <p className="nav-caption">WORKSPACE</p>
        <nav className="main-nav">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} onClick={onClose} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <Icon size={19} strokeWidth={1.9} />
              <span>{label}</span>
              {label === 'Favorites' && <span className="nav-count">{favoriteIds.length}</span>}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="tip-icon"><Sparkles size={17} /></div>
          <strong>Stay connected</strong>
          <p>Save your favorite students to find them quickly anytime.</p>
          <button className="tip-button" onClick={() => { window.location.href = '/favorites'; }}>View favorites <span>↗</span></button>
        </div>
        <div className="sidebar-footer"><span className="status-dot" /> All systems ready</div>
      </aside>
    </>
  );
}
