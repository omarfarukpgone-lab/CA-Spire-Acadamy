import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  BookText, 
  Trophy, 
  ChartBar, 
  Timer, 
  Zap, 
  Laptop, 
  ShieldCheck 
} from 'lucide-react';
import { cn } from '../lib/utils';

const subjects = [
  { name: 'Assurance', mcqs: '1,400+', icon: '🔍', color: 'bg-red-100 text-red-700' },
  { name: 'Accounting', mcqs: '2,500+', icon: '📘', color: 'bg-blue-100 text-blue-700' },
  { name: 'Business & Finance', mcqs: '1,800+', icon: '📈', color: 'bg-green-100 text-green-700' },
  { name: 'Management Information', mcqs: '1,100+', icon: '🧮', color: 'bg-cyan-100 text-cyan-700' },
  { name: 'Principles of Taxation', mcqs: '1,500+', icon: '💰', color: 'bg-purple-100 text-purple-700' },
  { name: 'Business Law', mcqs: '1,200+', icon: '⚖️', color: 'bg-orange-100 text-orange-700' },
  { name: 'Information Technology', mcqs: '800+', icon: '💻', color: 'bg-indigo-100 text-indigo-700' },
];

const features = [
  { name: 'Smart Practice', desc: 'Personalized MCQ sets based on your weak areas.', icon: Zap },
  { name: 'Exam Timer', desc: 'Simulate real exam pressure with custom timers.', icon: Timer },
  { name: 'Instant AI Result', desc: 'Get deep analytics and explanations instantly.', icon: ChartBar },
  { name: 'Global Leaderboard', desc: 'Compare your progress with 5,000+ CA students.', icon: Trophy },
  { name: 'Mobile Friendly', desc: 'Study on the go with our fully responsive app.', icon: Laptop },
  { name: 'Premium Support', desc: 'Access to expert mentors for doubt clearance.', icon: ShieldCheck },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-black uppercase tracking-widest italic mb-8">
                “Practice Smart. Pass Confidently.”
              </div>
              <h1 className="text-5xl font-black leading-[0.9] tracking-tighter text-[#0F172A] sm:text-[84px] uppercase">
                Bangladesh’s <br />
                <span className="text-[#2563EB]">Smartest</span> CA <br />
                Exam Platform
              </h1>
              <p className="mt-8 text-xl font-medium leading-relaxed text-[#0F172A]/60 max-w-lg">
                The ultimate ecosystem for CA students. Practice 20,000+ MCQs, 
                take simulated mock exams, and track your progress in real-time.
              </p>
              <div className="mt-12 flex flex-wrap gap-6">
                <Link to="/register">
                  <Button size="lg" className="px-12 py-8 rounded-2xl text-xl">
                    Start Free Practice
                  </Button>
                </Link>
                <Link to="/mock-tests">
                  <Button variant="outline" size="lg" className="px-12 py-8 rounded-2xl text-xl">
                    Join Mock Test
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 bg-white rounded-[40px] p-8 shadow-2xl border border-[#0F172A]/5 transform scale-110">
                <div className="flex justify-between items-center mb-8">
                  <div className="font-black text-xl uppercase tracking-tight">Student Dashboard</div>
                  <div className="w-10 h-10 rounded-full bg-[#EF4444]/10 border-2 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#EF4444] rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-5 bg-[#F8FAFC] rounded-2xl border border-[#0F172A]/5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#22C55E]/10 rounded-xl text-[#22C55E] font-black italic">92</div>
                      <div>
                        <div className="font-black text-sm uppercase">Performance Score</div>
                        <div className="text-[10px] uppercase font-bold opacity-50">Ready for Professional Level</div>
                      </div>
                    </div>
                    <div className="text-[10px] font-black uppercase text-[#22C55E]">Top 5%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-[#2563EB] text-white rounded-2xl">
                      <div className="text-3xl font-black italic">142</div>
                      <div className="text-[10px] uppercase opacity-70 font-black">Tests Taken</div>
                    </div>
                    <div className="p-5 bg-[#0F172A] text-white rounded-2xl">
                      <div className="text-3xl font-black italic">4.8K</div>
                      <div className="text-[10px] uppercase opacity-70 font-black">Solved MCQs</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[10px] font-black uppercase opacity-40 tracking-widest">Recent Activity</div>
                    <div className="flex items-center gap-3 p-3 bg-white border border-[#0F172A]/5 rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] flex items-center justify-center font-bold text-xs uppercase">📘</div>
                      <div className="flex-1 font-black text-sm uppercase">Financial Accounting</div>
                      <div className="font-black text-[#22C55E] italic">88%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[80px] -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-y border-[#0F172A]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {[
              { label: 'Practice MCQs', value: '20K+', icon: BookText },
              { label: 'Active Students', value: '5K+', icon: Users },
              { label: 'Mock Exams', value: '300+', icon: Trophy },
              { label: 'Success Rate', value: '95%', icon: CheckCircle2 },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-[#2563EB] mb-1 italic leading-none">{stat.value}</div>
                <div className="text-[10px] uppercase font-black text-[#0F172A]/40 tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl font-black text-[#0F172A] uppercase tracking-tighter">Master Your <span className="text-[#2563EB]">Subjects</span></h2>
              <p className="mt-4 text-[#0F172A]/60 font-medium">Choose your focus area and dominate the curriculum.</p>
            </div>
            <Link to="/practice">
              <Button variant="ghost" className="text-xs">View All Subjects <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((subject) => (
              <motion.div
                key={subject.name}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-[#0F172A]/5 transition-all hover:shadow-2xl hover:shadow-[#2563EB]/10"
              >
                <div className={cn("mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl", subject.color)}>
                  {subject.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">{subject.name}</h3>
                <p className="text-xs font-bold text-[#0F172A]/40 uppercase tracking-widest mt-2 mb-8">{subject.mcqs} MCQs</p>
                <Link to={`/practice?subject=${subject.name}`}>
                  <Button variant="secondary" className="w-full rounded-xl py-6 text-sm font-black uppercase tracking-widest">
                    Start Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">Why CAspire Academy?</h2>
            <p className="mt-4 text-slate-600">Everything you need to crack the ICAB exams in one place.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex gap-4 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A]">{feature.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#0F172A] px-6 py-20 text-center shadow-2xl lg:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready To Crack CA Exams?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
              Join thousands of students who are already using CAspire to 
              prepare for their career in accounting and finance.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="px-10">Start Free Today</Button>
              </Link>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-indigo-600/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
