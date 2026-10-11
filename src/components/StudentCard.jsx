import { motion } from 'framer-motion';
import { Heart, ArrowUpRight, Mail, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudentCard({ student, isFavorite, onToggle, index = 0 }) {
  return (
    <motion.article className="student-card" layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, delay: Math.min(index * 0.035, 0.25) }} whileHover={{ y: -4 }} whileTap={{ scale: 0.99 }}>
      <div className="card-topline"><span className="class-pill">{student.className}</span><button className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`} onClick={() => onToggle(student.id)} aria-label={isFavorite ? `Remove ${student.name} from favorites` : `Add ${student.name} to favorites`} aria-pressed={isFavorite}><Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} /></button></div>
      <Link className="student-main-link" to={`/students/${student.id}`} aria-label={`View ${student.name}'s profile`}>
        <div className={`student-avatar avatar-${student.color}`}>{student.avatar}</div>
        <h3>{student.name}</h3><p className="student-course">{student.course}</p>
      </Link>
      <div className="student-meta"><span><GraduationCap size={15} /> {student.year}</span><span className="gpa">GPA <b>{student.gpa.toFixed(2)}</b></span></div>
      <div className="card-divider" />
      <div className="card-bottom"><span className="email-label"><Mail size={14} /> {student.email}</span><Link className="view-link" to={`/students/${student.id}`} aria-label={`View ${student.name}`}><ArrowUpRight size={17} /></Link></div>
    </motion.article>
  );
}
