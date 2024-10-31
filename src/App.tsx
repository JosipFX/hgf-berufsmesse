import React, { useEffect } from 'react';
import { Home } from './pages/Home';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { JobDetail } from './pages/JobDetail';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let inactivityTimer: number;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (location.pathname !== '/') {
          navigate('/');
        }
      }, 180000); // 3 minutes
    };

    const handleInteraction = () => {
      resetTimer();
    };

    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('mousemove', handleInteraction);
    resetTimer();

    return () => {
      clearTimeout(inactivityTimer);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
    };
  }, [navigate, location]);

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;