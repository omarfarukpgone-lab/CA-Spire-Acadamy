import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';
import { Mail, Lock, LogIn, Chrome } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login with Google');
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">Welcome Back</h2>
          <p className="mt-2 text-slate-600">Login to your CAspire account</p>
        </div>

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Email Address</label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <Link to="/forgot-password" size="sm" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Forgot password?
                </Link>
              </div>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <Button type="submit" disabled={loading} className="w-full gap-2">
            <LogIn className="h-4 w-4" />
            {loading ? 'Logging in...' : 'Sign In'}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full gap-2"
            onClick={handleGoogleLogin}
          >
            <Chrome className="h-4 w-4" />
            Sign in with Google
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-500">
            Sign up for free
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
