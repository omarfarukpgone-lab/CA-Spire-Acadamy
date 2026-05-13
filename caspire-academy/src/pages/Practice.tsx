import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Search, Filter, BookOpen, ChevronRight, Bookmark, ArrowLeft, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Practice = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const subjects = [
    { name: 'Assurance', count: 1410, icon: '🔍' },
    { name: 'Accounting', count: 2540, icon: '📘' },
    { name: 'Business & Finance', count: 1820, icon: '📈' },
    { name: 'Management Information', count: 1100, icon: '🧮' },
    { name: 'Principles of Taxation', count: 1560, icon: '💰' },
    { name: 'Business Law', count: 1250, icon: '⚖️' },
    { name: 'Information Technology', count: 830, icon: '💻' },
  ];

  if (showQuestion) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8 flex items-center justify-between">
          <Button variant="ghost" onClick={() => setShowQuestion(false)} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Exit Practice
          </Button>
          <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
            <span>Question {currentQuestion + 1} of 10</span>
            <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full bg-blue-500" style={{ width: '10%' }} />
            </div>
          </div>
          <Button variant="outline" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
        </header>

        <motion.div
           key={currentQuestion}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200"
        >
          <div className="mb-6">
             <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider mb-2 inline-block">
               IAS 1: Presentation of Financial Statements
             </span>
             <h2 className="text-xl font-bold text-[#0F172A] leading-relaxed">
               Which of the following is NOT classified as a current asset according to IAS 1?
             </h2>
          </div>

          <div className="space-y-3">
             {[
               'Inventories', 
               'Trade and other receivables', 
               'Prepaid expenses', 
               'Deferred tax assets'
             ].map((option, i) => (
                <button 
                  key={i}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all flex items-center gap-4 group"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white font-bold transition-colors">
                    {['A', 'B', 'C', 'D'][i]}
                  </span>
                  <span className="text-slate-700 font-medium">{option}</span>
                </button>
             ))}
          </div>

          <div className="mt-10 flex items-center justify-between">
             <button className="text-sm font-semibold text-slate-500 hover:text-slate-700 transition-colors">
               Skip Question
             </button>
             <Button className="gap-2 px-8" onClick={() => setCurrentQuestion(prev => prev + 1)}>
               Next Question
               <ChevronRight className="h-4 w-4" />
             </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#0F172A]">Practice Mode</h1>
        <p className="text-slate-600">Select a subject to start practicing topic-wise questions.</p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search topics, chapters..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none shadow-sm"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <motion.div
            key={subject.name}
            whileHover={{ y: -4 }}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md"
            onClick={() => setSelectedSubject(subject.name)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">{subject.icon}</div>
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="h-8 w-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-400">
                     +{i * 10}
                   </div>
                 ))}
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">{subject.name}</h3>
            <p className="text-sm text-slate-500 mt-1">{subject.count} Questions Available</p>
            
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-1">
                {[1, 2, 3].map(l => (
                   <div key={l} className={cn("h-1.5 w-6 rounded-full", l <= 2 ? "bg-blue-500 text-transparent" : "bg-slate-100")} />
                ))}
              </div>
              <Button onClick={(e) => {
                e.stopPropagation();
                setShowQuestion(true);
              }} size="sm" className="gap-1 rounded-full group-hover:bg-[#2563EB]">
                Practice <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import { cn } from '../lib/utils';
export default Practice;
