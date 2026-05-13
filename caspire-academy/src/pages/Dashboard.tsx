import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Target, 
  Clock, 
  AlertCircle, 
  ArrowUpRight,
  PlayCircle,
  FileText,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

const stats = [
  { label: 'Total Tests', value: '24', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Average Score', value: '78%', icon: Target, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Global Rank', value: '#128', icon: Trophy, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: 'Weak Subject', value: 'Principles of Taxation', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
];

const activity = [
  { test: 'Accounting Mock 3', score: '82/100', time: '45 mins', date: '2 days ago' },
  { test: 'Assurance Daily Quiz', score: '18/20', time: '12 mins', date: 'Yesterday' },
  { test: 'Business Law Weekly Mock', score: '65/100', time: '52 mins', date: 'Today' },
];

const performanceData = [
  { day: 'Mon', current: 65, previous: 45 },
  { day: 'Tue', current: 78, previous: 52 },
  { day: 'Wed', current: 72, previous: 58 },
  { day: 'Thu', current: 85, previous: 62 },
  { day: 'Fri', current: 80, previous: 65 },
  { day: 'Sat', current: 92, previous: 70 },
  { day: 'Sun', current: 88, previous: 72 },
];

const subjectProficiency = [
  { subject: 'Assurance', score: 80 },
  { subject: 'Accounting', score: 90 },
  { subject: 'Business & Finance', score: 75 },
  { subject: 'Management Info', score: 85 },
  { subject: 'Taxation', score: 45 },
  { subject: 'Business Law', score: 65 },
];

const Dashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Welcome back, {profile?.displayName}!</h1>
          <p className="text-slate-600">Track your progress and keep practicing to reach your goals.</p>
        </div>
        <div className="flex gap-2">
          <Link to="/practice">
            <Button className="gap-2">
              <PlayCircle className="h-4 w-4" />
              Practice Now
            </Button>
          </Link>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -2 }}
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-2 rounded-lg", stat.bg)}>
                <stat.icon className={cn("h-5 w-5", stat.color)} />
              </div>
              <span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-2 py-1 rounded-md">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                12%
              </span>
            </div>
            <p className="text-2xl font-bold text-[#0F172A]">{stat.value}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-[#0F172A] flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Score Progression
                </h3>
                <p className="text-xs text-slate-500 mt-1">Comparing this week's progress vs previous week</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-[10px] font-bold uppercase text-slate-400">Current</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-slate-200" />
                  <span className="text-[10px] font-bold uppercase text-slate-400">Previous</span>
                </div>
              </div>
            </div>
            
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '12px', 
                      border: 'none', 
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                      fontSize: '12px',
                      fontWeight: '700'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="current" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorCurrent)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="previous" 
                    stroke="#e2e8f0" 
                    strokeWidth={2}
                    fill="transparent" 
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-purple-600" />
                Subject Mastery
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={subjectProficiency}>
                    <PolarGrid stroke="#f1f5f9" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Proficiency"
                      dataKey="score"
                      stroke="#8b5cf6"
                      fill="#8b5cf6"
                      fillOpacity={0.4}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 flex flex-col">
              <h3 className="font-bold text-[#0F172A] mb-6">Subject Breakdown</h3>
              <div className="space-y-4 flex-1">
                {subjectProficiency.map((sub) => (
                  <div key={sub.subject} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                      <span className="text-slate-500">{sub.subject}</span>
                      <span className={cn(
                        sub.score >= 80 ? "text-green-600" : sub.score >= 60 ? "text-blue-600" : "text-amber-600"
                      )}>{sub.score}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${sub.score}%` }}
                        className={cn(
                          "h-full rounded-full",
                          sub.score >= 80 ? "bg-green-500" : sub.score >= 60 ? "bg-blue-500" : "bg-amber-500"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="font-bold text-[#0F172A] mb-4">Recommended for You</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50">
                <h4 className="font-semibold text-blue-900">Taxation Deep Dive</h4>
                <p className="text-sm text-blue-700 mt-1">Focus on income tax computations.</p>
                <Button size="sm" variant="outline" className="mt-4 bg-white border-blue-200 text-blue-700">Practice Now</Button>
              </div>
              <div className="p-4 rounded-xl border border-orange-100 bg-orange-50/50">
                <h4 className="font-semibold text-orange-900">Audit Mock 4</h4>
                <p className="text-sm text-orange-700 mt-1">Improve your speed in audit MCQ.</p>
                <Button size="sm" variant="outline" className="mt-4 bg-white border-orange-200 text-orange-700">Start Test</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="font-bold text-[#0F172A] mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Recent Activity
            </h3>
            <div className="space-y-6">
              {activity.map((item, i) => (
                <div key={i} className="relative flex gap-4">
                  {i !== activity.length - 1 && (
                    <div className="absolute left-2.5 top-8 bottom-0 w-0.5 bg-slate-100" />
                  )}
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500 ring-4 ring-white">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">{item.test}</h4>
                    <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                      <span className="font-medium text-blue-600">{item.score}</span>
                      <span>•</span>
                      <span>{item.time}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-6 text-sm">View All Activity</Button>
          </div>

          <div className="rounded-2xl bg-blue-600 p-6 text-white overflow-hidden relative shadow-xl">
             <div className="relative z-10">
               <h3 className="font-bold text-lg">Pro Tip of the Day</h3>
               <p className="mt-2 text-blue-100 text-sm leading-relaxed">
                 "Review your wrong answers immediately after every mock test. This is where 90% of your improvement happens."
               </p>
               <Button variant="outline" size="sm" className="mt-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                 Read More Tips
               </Button>
             </div>
             <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

