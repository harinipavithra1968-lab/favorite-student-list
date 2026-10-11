import { ArrowRight, Heart, Users, Star, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStudents } from '../context/StudentsContext';
import StudentGrid from '../components/StudentGrid';
import PageTransition from '../components/PageTransition';

export default function Dashboard() {
  const { students, favorites } = useStudents();
  const topStudents = [...students].sort((a, b) => b.gpa - a.gpa).slice(0, 4);
  return (
    <PageTransition>
      <section className="welcome-banner">
        <div className="welcome-copy"><div className="eyebrow"><Sparkles size={14} /> YOUR CAMPUS, CONNECTED</div><h2>Great people.<br /><span>Bright futures.</span></h2><p>Keep track of the people who make your learning journey special. Discover students and save your favorites.</p><Link to="/students" className="button button-light">Explore students <ArrowRight size={17} /></Link></div>
        <div className="welcome-art" aria-hidden="true"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-card art-card-one"><div className="mini-avatar mini-lavender">MP</div><div><b>Maya Patel</b><small>Creative thinker</small></div><Heart size={17} fill="currentColor" /></div><div className="art-card art-card-two"><div className="mini-avatar mini-mint">AS</div><div><b>Aarav Sharma</b><small>Problem solver</small></div><Star size={16} fill="currentColor" /></div><div className="art-center"><Users size={43} /></div><span className="sparkle sparkle-a">✦</span><span className="sparkle sparkle-b">✧</span></div>
      </section>
      <div className="section-heading stats-heading"><div><h2>Your community at a glance</h2><p>A little snapshot of your student network.</p></div></div>
      <div className="stats-grid">
        <motion.div className="stat-card" whileHover={{ y: -3 }}><div className="stat-icon stat-purple"><Users size={20} /></div><span className="stat-label">Total students</span><strong>{students.length}</strong><small><TrendingUp size={13} /> Ready to discover</small></motion.div>
        <motion.div className="stat-card" whileHover={{ y: -3 }}><div className="stat-icon stat-pink"><Heart size={20} /></div><span className="stat-label">Your favorites</span><strong>{favorites.length}</strong><small>People you’ve saved</small></motion.div>
        <motion.div className="stat-card" whileHover={{ y: -3 }}><div className="stat-icon stat-yellow"><Star size={20} /></div><span className="stat-label">Top GPA</span><strong>{Math.max(...students.map((s) => s.gpa)).toFixed(2)}</strong><small>Academic highlights</small></motion.div>
      </div>
      <div className="section-heading"><div><h2>Academic standouts <span className="heading-sparkle">✦</span></h2><p>Meet a few students with outstanding GPAs.</p></div><Link to="/students" className="text-link">View all students <ArrowRight size={16} /></Link></div>
      <StudentGrid students={topStudents} />
      <div className="bottom-callout"><div className="callout-icon"><Heart size={20} /></div><div><strong>Your people, one click away</strong><p>Tap the heart on any student card to add them to your favorites.</p></div><Link to="/favorites" className="button button-outline">My favorites <ArrowRight size={16} /></Link></div>
    </PageTransition>
  );
}
