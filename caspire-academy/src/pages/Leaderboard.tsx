import React from 'react';
import { Trophy, Medal, Crown } from 'lucide-react';

const rankings = [
  { rank: 1, name: 'Tanvir Ahmed', score: 2840, level: 'Advanced', avatar: 'https://i.pravatar.cc/150?u=1' },
  { rank: 2, name: 'Nabila Islam', score: 2710, level: 'Advanced', avatar: 'https://i.pravatar.cc/150?u=2' },
  { rank: 3, name: 'Arif Chowdhury', score: 2650, level: 'Professional', avatar: 'https://i.pravatar.cc/150?u=3' },
  { rank: 4, name: 'Sadia Sultana', score: 2590, level: 'Certificate', avatar: 'https://i.pravatar.cc/150?u=4' },
  { rank: 5, name: 'Fahim Shakil', score: 2420, level: 'Professional', avatar: 'https://i.pravatar.cc/150?u=5' },
  { rank: 6, name: 'Mehedi Hasan', score: 2380, level: 'Advanced', avatar: 'https://i.pravatar.cc/150?u=6' },
  { rank: 7, name: 'Ishrat Jahan', score: 2210, level: 'Certificate', avatar: 'https://i.pravatar.cc/150?u=7' },
];

const Leaderboard = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#0F172A]">Hall of Fame</h1>
        <p className="mt-2 text-slate-600">Recognizing the top achievers in the CAspire community.</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-4 sm:gap-8 pt-8">
          {/* 2nd Place */}
          <div className="flex flex-col items-center group">
             <div className="relative">
                <img src={rankings[1].avatar} className="h-16 w-16 rounded-full border-4 border-slate-200 group-hover:border-blue-500 transition-all" alt="" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-300 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">2</div>
             </div>
             <p className="mt-4 font-bold text-slate-700">{rankings[1].name.split(' ')[0]}</p>
             <p className="text-xs text-slate-500">{rankings[1].score} pts</p>
             <div className="mt-2 w-24 h-24 bg-slate-100 rounded-t-xl" />
          </div>
          
          {/* 1st Place */}
          <div className="flex flex-col items-center group -mt-8">
             <div className="relative">
                <Crown className="absolute -top-10 left-1/2 -translate-x-1/2 h-10 w-10 text-yellow-500 fill-yellow-500" />
                <img src={rankings[0].avatar} className="h-24 w-24 rounded-full border-4 border-yellow-400 group-hover:border-blue-500 transition-all shadow-xl" alt="" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">1</div>
             </div>
             <p className="mt-4 font-bold text-[#0F172A] text-lg">{rankings[0].name.split(' ')[0]}</p>
             <p className="text-xs text-slate-500">{rankings[0].score} pts</p>
             <div className="mt-2 w-32 h-32 bg-[#0F172A] rounded-t-xl" />
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center group">
             <div className="relative">
                <img src={rankings[2].avatar} className="h-16 w-16 rounded-full border-4 border-orange-200 group-hover:border-blue-500 transition-all" alt="" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-300 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">3</div>
             </div>
             <p className="mt-4 font-bold text-slate-700">{rankings[2].name.split(' ')[0]}</p>
             <p className="text-xs text-slate-500">{rankings[2].score} pts</p>
             <div className="mt-2 w-24 h-20 bg-slate-100 rounded-t-xl" />
          </div>
        </div>

        {/* List of other rankings */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
           <div className="p-4 border-b bg-slate-50 grid grid-cols-6 text-xs font-bold uppercase tracking-wider text-slate-400">
              <span className="col-span-1 text-center">Rank</span>
              <span className="col-span-3">Student</span>
              <span className="col-span-1">Level</span>
              <span className="col-span-1 text-right">Points</span>
           </div>
           <div className="divide-y divide-slate-100">
              {rankings.map((student) => (
                <div key={student.rank} className="p-4 grid grid-cols-6 items-center hover:bg-slate-50 transition-colors">
                  <span className="col-span-1 text-center font-bold text-slate-400">#{student.rank}</span>
                  <div className="col-span-3 flex items-center gap-3">
                     <img src={student.avatar} className="h-10 w-10 rounded-full" alt="" />
                     <span className="font-bold text-[#0F172A]">{student.name}</span>
                  </div>
                  <span className="col-span-1 text-sm text-slate-500 font-medium">{student.level}</span>
                  <span className="col-span-1 text-right font-bold text-blue-600">{student.score}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
