import React from 'react';
import { Button } from '../components/ui/Button';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  ArrowRight,
  Zap,
  Star,
  Lock
} from 'lucide-react';
import { motion } from 'motion/react';

const mockTests = [
  { 
    id: 1, 
    title: 'Daily Quick Mock: Principles of Taxation', 
    questions: 20, 
    time: '30 mins', 
    students: 1240, 
    category: 'Daily', 
    free: true,
    difficulty: 'Easy'
  },
  { 
    id: 2, 
    title: 'Weekly Full Mock: Accounting & Assurance', 
    questions: 100, 
    time: '180 mins', 
    students: 850, 
    category: 'Weekly', 
    free: true,
    difficulty: 'Medium'
  },
  { 
    id: 3, 
    title: 'Syllabus Coverage: Business & Finance', 
    questions: 50, 
    time: '60 mins', 
    students: 620, 
    category: 'Subject Wise', 
    free: false,
    difficulty: 'Hard'
  },
  { 
    id: 4, 
    title: 'Final Model Test: Full Professional Level', 
    questions: 100, 
    time: '180 mins', 
    students: 3100, 
    category: 'Full Mock', 
    free: false,
    difficulty: 'Hard'
  },
];

const MockTests = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-[#0F172A]">Mock Exam Center</h1>
        <p className="mt-2 text-slate-600">Prepare for the real ICAB environment with our timed mock exams.</p>
        
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 border border-orange-100">
             <Calendar className="h-5 w-5 text-orange-600" />
             <div>
               <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Next Live Mock</p>
               <p className="text-sm font-bold text-orange-950">Sunday, 10:00 AM</p>
             </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 border border-blue-100">
             <Trophy className="h-5 w-5 text-blue-600" />
             <div>
               <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Your Best Rank</p>
               <p className="text-sm font-bold text-blue-950">#42 Global</p>
             </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 border border-green-100">
             <Award className="h-5 w-5 text-green-600" />
             <div>
               <p className="text-xs font-semibold text-green-600 uppercase tracking-wider">Badges Earned</p>
               <p className="text-sm font-bold text-green-950">12 Achievements</p>
             </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 border border-purple-100">
             <Users className="h-5 w-5 text-purple-600" />
             <div>
               <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider">Students Online</p>
               <p className="text-sm font-bold text-purple-950">214 Practicing</p>
             </div>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
          {['All', 'Daily', 'Weekly', 'Full Mock'].map((cat) => (
            <button 
              key={cat}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                cat === 'All' ? "bg-[#2563EB] text-white shadow-md shadow-blue-200" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {mockTests.map((test) => (
          <motion.div
            key={test.id}
            whileHover={{ scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                    test.category === 'Daily' ? "bg-blue-100 text-blue-700" : 
                    test.category === 'Weekly' ? "bg-purple-100 text-purple-700" : 
                    "bg-orange-100 text-orange-700"
                  )}>
                    {test.category}
                  </span>
                  {!test.free && (
                    <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      <Lock className="h-3 w-3" /> Premium
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">{test.title}</h3>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-yellow-500 mb-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-xs font-bold text-slate-700">4.8</span>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Difficulty: {test.difficulty}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Questions</span>
                <span className="text-sm font-bold text-slate-700 flex items-center gap-1.5 leading-none">
                  <Zap className="h-3.5 w-3.5 text-blue-500" />
                  {test.questions} MCQs
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Time Limit</span>
                <span className="text-sm font-bold text-slate-700 flex items-center gap-1.5 leading-none">
                  <Clock className="h-3.5 w-3.5 text-blue-500" />
                  {test.time}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Attempted By</span>
                <span className="text-sm font-bold text-slate-700 flex items-center gap-1.5 leading-none">
                  <Users className="h-3.5 w-3.5 text-blue-500" />
                  {test.students}
                </span>
              </div>
            </div>

            <Button disabled={!test.free} className="w-full h-11 gap-2 group-hover:bg-blue-700 transition-all">
              {test.free ? 'Start Mock Exam' : 'Unlock with Premium'}
              <ArrowRight className="h-4 w-4" />
            </Button>
            
            {/* Absolute element for visual detail */}
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Trophy className="h-24 w-24" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import { cn } from '../lib/utils';
export default MockTests;
