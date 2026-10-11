import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, Users, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStudents } from '../context/StudentsContext';
import StudentGrid from '../components/StudentGrid';
import PageTransition from '../components/PageTransition';

export default function Students() {
  const { students } = useStudents();
  const [query, setQuery] = useState('');
  const [course, setCourse] = useState('All courses');
  const [sort, setSort] = useState('name');
  const courses = ['All courses', ...new Set(students.map((student) => student.course))];
  const filtered = useMemo(() => students.filter((student) => {
    const term = query.trim().toLowerCase();
    const matchesQuery = !term || [student.name, student.course, student.className, student.email].some((value) => value.toLowerCase().includes(term));
    return matchesQuery && (course === 'All courses' || student.course === course);
  }).sort((a, b) => sort === 'gpa' ? b.gpa - a.gpa : sort === 'year' ? a.year.localeCompare(b.year) : a.name.localeCompare(b.name)), [students, query, course, sort]);

  return <PageTransition>
    <div className="page-intro-row"><div className="intro-icon"><Users size={21} /></div><div><h2>Meet your community</h2><p>Browse profiles, explore interests, and save people you’d like to keep up with.</p></div></div>
    <div className="directory-toolbar"><label className="search-field"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, course, class..." aria-label="Search students" />{query && <button onClick={() => setQuery('')} aria-label="Clear search"><X size={16} /></button>}</label><div className="filter-control"><SlidersHorizontal size={17} /><select value={course} onChange={(e) => setCourse(e.target.value)} aria-label="Filter by course">{courses.map((item) => <option key={item}>{item}</option>)}</select></div><select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort students"><option value="name">Name A–Z</option><option value="gpa">Highest GPA</option><option value="year">Year</option></select></div>
    <div className="results-line"><span>Showing <b>{filtered.length}</b> of {students.length} students</span><span className="results-dot" /> <span>Student directory</span></div>
    <StudentGrid students={filtered} emptyTitle="No matching students" emptyDescription="Try another name, course, or class." />
  </PageTransition>;
}
