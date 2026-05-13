import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';
import { Mail, Lock, User, School, GraduationCap, ArrowRight } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    institute: '',
    level: 'Certificate',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      await updateProfile(user, { displayName: formData.fullName });

      // Create user profile in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        displayName: formData.fullName,
        email: formData.email,
        institute: formData.institute,
        level: formData.level,
        role: 'student',
        createdAt: serverTimestamp(),
      });

      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">Create Your Account</h2>
          <p className="mt-2 text-slate-600">Start your CA preparation journey today</p>
        </div>

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email Address</label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="name@example.com"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">Institute</label>
              <div className="mt-1 relative">
                <School className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  name="institute"
                  type="text"
                  required
                  value={formData.institute}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="e.g. ICAB, ABC Firm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Student Level</label>
              <div className="mt-1 relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm appearance-none"
                >
                  <option value="Certificate">Certificate Level</option>
                  <option value="Professional">Professional Level</option>
                  <option value="Advanced">Advanced Level</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                name="password"
                type="password"
                required
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button type="submit" disabled={loading} className="w-full gap-2 mt-4">
            {loading ? 'Creating Account...' : 'Continue to Dashboard'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
