import React from 'react';
import { Button } from '../components/ui/Button';
import { FileText, Download, Lock, Search, Filter } from 'lucide-react';

const notes = [
  { id: 1, title: 'IAS 16: Property, Plant and Equipment', type: 'Hand Note', size: '2.4 MB', premium: false },
  { id: 2, title: 'Consolidated Financial Statements Summary', type: 'PDF Note', size: '4.1 MB', premium: true },
  { id: 3, title: 'Audit Risk & Materiality Cheat Sheet', type: 'Formula Sheet', size: '1.2 MB', premium: false },
  { id: 4, title: 'Income Tax Ordinance 1984 - Latest Updates', type: 'PDF Note', size: '8.5 MB', premium: true },
  { id: 5, title: 'Costing Methods Comparison Chart', type: 'Short Note', size: '0.8 MB', premium: false },
];

const Notes = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Study Notes & Resources</h1>
          <p className="text-slate-600">Download curated notes and exclusive study materials.</p>
        </div>
        <div className="mt-4 flex gap-2 md:mt-0">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input type="text" placeholder="Search notes..." className="pl-9 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" />
           </div>
           <Button variant="outline" size="sm"><Filter className="h-4 w-4" /></Button>
        </div>
      </div>

      <div className="grid gap-4">
        {notes.map((note) => (
          <div key={note.id} className="group flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200 hover:ring-blue-200 transition-all">
            <div className="flex items-center gap-4">
               <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[#0F172A]">{note.title}</h3>
                    {note.premium && (
                      <span className="bg-yellow-100 text-yellow-700 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase flex items-center gap-1">
                        <Lock className="h-3 w-3" /> Premium
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{note.type} • {note.size}</p>
               </div>
            </div>
            <Button variant={note.premium ? 'ghost' : 'outline'} size="sm" className="gap-2">
               {note.premium ? <Lock className="h-4 w-4 text-slate-400" /> : <Download className="h-4 w-4" />}
               {note.premium ? 'Unlock' : 'Download'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
