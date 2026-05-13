import React from 'react';
import { 
  Users, 
  Database, 
  FileText, 
  Settings, 
  BarChart, 
  Plus, 
  Trash2, 
  Edit 
} from 'lucide-react';
import { Button } from '../components/ui/Button';

const Admin = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
         <div>
            <h1 className="text-2xl font-bold text-[#0F172A]">Admin Control Panel</h1>
            <p className="text-slate-600">Manage questions, mock tests, users and content.</p>
         </div>
         <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New Content
         </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
         {[
           { label: 'Total Users', value: '5,248', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
           { label: 'Total MCQs', value: '21,450', icon: Database, color: 'text-green-600', bg: 'bg-green-50' },
           { label: 'Active Mocks', value: '12', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50' },
           { label: 'Revenue (May)', value: '৳ 45,800', icon: BarChart, color: 'text-orange-600', bg: 'bg-orange-50' },
         ].map((stat) => (
           <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-slate-200">
              <div className={cn("inline-flex p-2 rounded-lg mb-4", stat.bg)}>
                 <stat.icon className={cn("h-5 w-5", stat.color)} />
              </div>
              <p className="text-2xl font-bold text-[#0F172A]">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
           </div>
         ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
         <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="font-bold text-[#0F172A] mb-6 flex items-center justify-between">
               Question Bank Management
               <Button size="sm" variant="ghost">View All</Button>
            </h3>
            <div className="space-y-4">
               {['Accounting Foundations', 'Audit Ethics', 'Corporate Tax Law'].map(q => (
                 <div key={q} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-slate-100">
                    <div className="flex gap-3">
                       <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                       <span className="text-sm font-medium text-slate-700">{q}</span>
                    </div>
                    <div className="flex gap-2">
                       <button className="text-slate-400 hover:text-blue-600"><Edit className="h-4 w-4" /></button>
                       <button className="text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="font-bold text-[#0F172A] mb-6 flex items-center justify-between">
               User Management
               <Button size="sm" variant="ghost">View All</Button>
            </h3>
            <div className="space-y-4">
               {['Tanvir Ahmed', 'Nabila Islam', 'Arif Chowdhury'].map(u => (
                 <div key={u} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-full bg-slate-100" />
                       <div>
                          <p className="text-sm font-bold text-[#0F172A]">{u}</p>
                          <p className="text-xs text-slate-500">Member since 2 days ago</p>
                       </div>
                    </div>
                    <Button variant="ghost" size="sm"><Settings className="h-4 w-4" /></Button>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

import { cn } from '../lib/utils';
export default Admin;
