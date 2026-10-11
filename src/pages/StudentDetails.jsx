import { ArrowLeft, ArrowUpRight, BookOpen, GraduationCap, Heart, Mail, Star } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStudents } from '../context/StudentsContext';
import PageTransition from '../components/PageTransition';

export default function StudentDetails() {
  const { studentId } = useParams();
  const { students, isFavorite, toggleFavorite } = useStudents();
  const student = students.find((item) => item.id === studentId);
  if (!student) return <Navigate to="/students" replace />;
  const favorite = isFavorite(student.id);
  return <PageTransition>
    <Link to="/students" className="back-link"><ArrowLeft size={17} /> Back to all students</Link>
    <motion.div className="profile-panel" initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }}>
      <div className="profile-cover"><div className="cover-decoration cover-decoration-one" /><div className="cover-decoration cover-decoration-two" /><span className="class-pill profile-class">{student.className}</span></div>
      <div className="profile-content">
        <div className={`profile-avatar avatar-${student.color}`}>{student.avatar}</div>
        <div className="profile-title-row"><div><h2>{student.name}</h2><p>{student.course} · {student.year}</p></div><button className={`button ${favorite ? 'button-favorited' : 'button-primary'}`} onClick={() => toggleFavorite(student.id)}><Heart size={17} fill={favorite ? 'currentColor' : 'none'} />{favorite ? 'Favorited' : 'Add to favorites'}</button></div>
        <p className="profile-bio">{student.bio}</p>
        <div className="profile-info-grid"><div className="profile-info-item"><span className="info-icon"><Mail size={18} /></span><div><small>Email address</small><a href={`mailto:${student.email}`}>{student.email} <ArrowUpRight size={13} /></a></div></div><div className="profile-info-item"><span className="info-icon"><GraduationCap size={18} /></span><div><small>Class / section</small><strong>{student.className}</strong></div></div><div className="profile-info-item"><span className="info-icon"><Star size={18} /></span><div><small>Current GPA</small><strong>{student.gpa.toFixed(2)} / 4.00</strong></div></div><div className="profile-info-item"><span className="info-icon"><BookOpen size={18} /></span><div><small>Study year</small><strong>{student.year}</strong></div></div></div>
        <div className="interests-section"><h3>Interests & hobbies</h3><div className="interest-tags">{student.interests.map((interest) => <span key={interest}>{interest}</span>)}</div></div>
      </div>
    </motion.div>
  </PageTransition>;
}
