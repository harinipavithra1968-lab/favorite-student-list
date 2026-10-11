
# StudentSpace — Favorite Student List

A responsive React project featuring:
- React Router pages: Dashboard, All Students, Favorites, Student Details
- Search, class filtering, and sorting
- Favorite/unfavorite students with persistent `localStorage`
- Animated page transitions and card interactions using Framer Motion
- Responsive layout and accessible labels
- Reusable components and a simple data layer

## Run locally

1. Install Node.js (LTS).
2. Open a terminal in this project folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Folder structure

```text
favorite-student-list/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/students.js
    ├── context/StudentsContext.jsx
    ├── components/
    │   ├── AppLayout.jsx
    │   ├── Sidebar.jsx
    │   ├── Topbar.jsx
    │   ├── StudentCard.jsx
    │   ├── StudentGrid.jsx
    │   ├── EmptyState.jsx
    │   └── PageTransition.jsx
    ├── pages/
    │   ├── Dashboard.jsx
    │   ├── Students.jsx
    │   ├── Favorites.jsx
    │   └── StudentDetails.jsx
    └── styles/
        └── global.css
```

## Customize
Edit `src/data/students.js` to change the sample students. Favorites are saved in your browser, so they remain after refreshing the page.

# favorite-student-list
Developed an interactive and responsive student directory using React, React Router, and Framer Motion, featuring student search, course filtering, sorting, and profile navigation. Implemented favorite management using Local Storage, reusable components, and smooth animations for an enhanced user experience.

