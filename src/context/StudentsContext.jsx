import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { students as initialStudents } from '../data/students';

const StudentsContext = createContext(null);
const STORAGE_KEY = 'studentspace-favorite-ids';

function readFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

export function StudentsProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(readFavorites);

  const toggleFavorite = useCallback((id) => {
    setFavoriteIds((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // The app still works if browser storage is unavailable.
      }
      return next;
    });
  }, []);

  const value = useMemo(() => ({
    students: initialStudents,
    favoriteIds,
    favorites: initialStudents.filter((student) => favoriteIds.includes(student.id)),
    toggleFavorite,
    isFavorite: (id) => favoriteIds.includes(id),
  }), [favoriteIds, toggleFavorite]);

  return <StudentsContext.Provider value={value}>{children}</StudentsContext.Provider>;
}

export function useStudents() {
  const context = useContext(StudentsContext);
  if (!context) throw new Error('useStudents must be used inside StudentsProvider');
  return context;
}
