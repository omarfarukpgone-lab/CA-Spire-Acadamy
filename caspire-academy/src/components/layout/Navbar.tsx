import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';
import { auth } from '../../lib/firebase';
import { LogOut, BookOpen, LayoutDashboard, Database, Trophy, FileText, Newspaper, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { user, profile } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Subjects', path: '/practice', icon: BookOpen },
    { name: 'Mock Tests', path: '/mock-tests', icon: Database },
    { name: 'Notes', path: '/notes', icon: FileText },
    { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { name: 'Blog', path: '/blog', icon: Newspaper },
  ];

  const handleLogout = () => auth.signOut();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB] font-black text-xl text-white">
              CA
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#0F172A] uppercase">
              spire<span className="text-[#2563EB]"> Academy</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-widest transition-all hover:scale-105',
                  isActive(link.path)
                    ? 'bg-blue-50 text-[#2563EB]'
                    : 'text-[#0F172A]/60 hover:text-[#0F172A]'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button variant={isActive('/dashboard') ? 'primary' : 'ghost'} size="sm" className="gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              {profile?.role === 'admin' && (
                <Link to="/admin">
                  <Button variant="outline" size="sm">Admin</Button>
                </Link>
              )}
              <Button variant="ghost" size="sm" onClick={handleLogout} className="text-slate-500">
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-slate-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-b border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium',
                  isActive(link.path)
                    ? 'bg-blue-50 text-[#2563EB]'
                    : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.name}
              </Link>
            ))}
            {user ? (
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50"
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Register</Button>
                </Link>
              </div>
            )}
            
            <div className="pt-4 border-t border-slate-100 mt-4">
              <a 
                href="https://wa.me/8801537442752"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-[#25D366]/10 px-4 py-3 text-sm font-black uppercase tracking-widest text-[#25D366] transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Support
              </a>
              <div className="mt-2 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                +8801537-442752
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

import { cn } from '../../lib/utils';
export default Navbar;
