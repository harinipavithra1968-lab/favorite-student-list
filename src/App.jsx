import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Favorites from './pages/Favorites';
import StudentDetails from './pages/StudentDetails';

export default function App() {
  const location = useLocation();

  return (
    <AppLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/students/:studentId" element={<StudentDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </AppLayout>
  );
}
