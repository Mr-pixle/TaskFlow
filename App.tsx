import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { Messages } from './pages/Messages';
import { Users } from './pages/Users';
import { Login } from './pages/Login';
import { Channels } from './pages/Channels';
import { Meetings } from './pages/Meetings';
import { Notes } from './pages/Notes';
import { UserReports } from './pages/reports/UserReports';
import { ProjectReports } from './pages/reports/ProjectReports';
import { CURRENT_USER } from './constants';
import { User } from './types';

const Layout: React.FC<{ children: React.ReactNode; user: User; onLogout: () => void }> = ({ children, user, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        <TopBar 
          user={user} 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          onLogout={onLogout}
        />
        <main className="flex-1 overflow-auto custom-scrollbar relative">
          {children}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  // Simple Auth State Mock
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    // In a real app, validate credentials here
    setUser(CURRENT_USER);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <HashRouter>
      <Routes>
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" replace />} 
        />
        
        {/* Protected Routes */}
        <Route path="/" element={isAuthenticated && user ? <Layout user={user} onLogout={handleLogout}><Dashboard user={user} /></Layout> : <Navigate to="/login" replace />} />
        <Route path="/projects" element={isAuthenticated && user ? <Layout user={user} onLogout={handleLogout}><Projects /></Layout> : <Navigate to="/login" replace />} />
        <Route path="/messages" element={isAuthenticated && user ? <Layout user={user} onLogout={handleLogout}><Messages /></Layout> : <Navigate to="/login" replace />} />
        <Route path="/users" element={isAuthenticated && user ? <Layout user={user} onLogout={handleLogout}><Users /></Layout> : <Navigate to="/login" replace />} />
        
        {/* New Pages */}
        <Route path="/channels" element={isAuthenticated && user ? <Layout user={user} onLogout={handleLogout}><Channels /></Layout> : <Navigate to="/login" replace />} />
        <Route path="/meetings" element={isAuthenticated && user ? <Layout user={user} onLogout={handleLogout}><Meetings /></Layout> : <Navigate to="/login" replace />} />
        <Route path="/notes" element={isAuthenticated && user ? <Layout user={user} onLogout={handleLogout}><Notes /></Layout> : <Navigate to="/login" replace />} />
        
        {/* Reports */}
        <Route path="/reports/users" element={isAuthenticated && user ? <Layout user={user} onLogout={handleLogout}><UserReports /></Layout> : <Navigate to="/login" replace />} />
        <Route path="/reports/projects" element={isAuthenticated && user ? <Layout user={user} onLogout={handleLogout}><ProjectReports /></Layout> : <Navigate to="/login" replace />} />
        
        <Route path="*" element={isAuthenticated && user ? <Layout user={user} onLogout={handleLogout}><div className="flex items-center justify-center h-full text-slate-400">صفحه مورد نظر یافت نشد.</div></Layout> : <Navigate to="/login" replace />} />
      </Routes>
    </HashRouter>
  );
}