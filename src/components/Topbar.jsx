import { Bell, Menu, Search } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const titles = {
  '/': ['Good to see you!', 'Here’s what’s happening in your student community.'],
  '/students': ['All students', 'Discover and connect with students in your directory.'],
  '/favorites': ['Your favorites', 'Your saved students, all in one place.'],
};

export default function Topbar({ onMenu }) {
  const location = useLocation();
  const navigate = useNavigate();
  const titleInfo = location.pathname.startsWith('/students/') ? ['Student profile', 'Get to know this student a little better.'] : (titles[location.pathname] || titles['/']);
  return (
    <header className="topbar">
      <button className="icon-button menu-toggle" onClick={onMenu} aria-label="Open menu"><Menu size={21} /></button>
      <div className="topbar-heading"><h1>{titleInfo[0]}</h1><p>{titleInfo[1]}</p></div>
      <div className="topbar-actions">
        <button className="top-search" onClick={() => navigate('/students')} aria-label="Browse students"><Search size={17} /><span>Find a student</span><kbd>⌘ K</kbd></button>
        <button className="icon-button notification-button" aria-label="Notifications"><Bell size={19} /><i /></button>
        <div className="profile-avatar">HS</div>
      </div>
    </header>
  );
}
