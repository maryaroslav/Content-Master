import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Welcome from './pages/Welcome';
import Main from './pages/Main'
import CommunityPage from './pages/CommunityPage';
import EventsPage from './pages/EventsPage';
import SettingPage from './pages/SettingPage';
import AdminPanel from './pages/AdminPanel'


function App() {

  return (
    <div className="container-app">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/explore" element={<Main />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
