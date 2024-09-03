import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import YearPage from './pages/YearPage';
import PersonDetailPage from './pages/PersonDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <header className="header">
            <h1>Memories in Motion - WSK</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/year/:year" element={<YearPage />} />
              <Route path="/person/:id" element={<PersonDetailPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
