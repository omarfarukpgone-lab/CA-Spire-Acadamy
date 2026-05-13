import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Practice from './pages/Practice';
import MockTests from './pages/MockTests';
import Notes from './pages/Notes';
import Leaderboard from './pages/Leaderboard';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import WhatsAppFAB from './components/ui/WhatsAppFAB';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { profile, loading } = useAuth();
  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;
  return profile?.role === 'admin' ? <>{children}</> : <Navigate to="/dashboard" />;
};

function AppRoutes() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/blog" element={<Blog />} />
          
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/practice" element={<PrivateRoute><Practice /></PrivateRoute>} />
          <Route path="/mock-tests" element={<PrivateRoute><MockTests /></PrivateRoute>} />
          <Route path="/notes" element={<PrivateRoute><Notes /></PrivateRoute>} />
          
          <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
        </Routes>
      </main>
      <WhatsAppFAB />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}
