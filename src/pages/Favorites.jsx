import { Heart, Sparkles } from 'lucide-react';
import { useStudents } from '../context/StudentsContext';
import StudentGrid from '../components/StudentGrid';
import PageTransition from '../components/PageTransition';

export default function Favorites() {
  const { favorites } = useStudents();
  return <PageTransition>
    <div className="favorites-banner"><div className="favorites-icon"><Heart size={24} fill="currentColor" /></div><div><div className="eyebrow"><Sparkles size={13} /> YOUR PERSONAL SHORTLIST</div><h2>People worth remembering.</h2><p>Your favorite students are saved here automatically on this device.</p></div><div className="favorites-number"><strong>{favorites.length}</strong><span>{favorites.length === 1 ? 'student saved' : 'students saved'}</span></div></div>
    <div className="section-heading favorites-heading"><div><h2>Saved students</h2><p>Keep your campus connections close.</p></div></div>
    <StudentGrid students={favorites} emptyTitle="Your favorites list is waiting" emptyDescription="Explore the directory and tap the heart on a student card to save them here." />
  </PageTransition>;
}
