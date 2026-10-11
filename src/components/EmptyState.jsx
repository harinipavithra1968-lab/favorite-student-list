import { Heart, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function EmptyState({ title, description }) {
  const location = useLocation();
  const isFavorites = location.pathname === '/favorites';
  const Icon = isFavorites ? Heart : Search;
  return <div className="empty-state"><div className="empty-icon"><Icon size={25} /></div><h3>{title}</h3><p>{description}</p>{isFavorites && <Link to="/students" className="button button-primary">Explore students</Link>}</div>;
}
