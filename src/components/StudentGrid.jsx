import StudentCard from './StudentCard';
import { useStudents } from '../context/StudentsContext';
import EmptyState from './EmptyState';

export default function StudentGrid({ students, emptyTitle, emptyDescription }) {
  const { isFavorite, toggleFavorite } = useStudents();
  if (!students.length) return <EmptyState title={emptyTitle || 'No students found'} description={emptyDescription || 'Try changing your search or filters.'} />;
  return <div className="student-grid">{students.map((student, index) => <StudentCard key={student.id} student={student} index={index} isFavorite={isFavorite(student.id)} onToggle={toggleFavorite} />)}</div>;
}
