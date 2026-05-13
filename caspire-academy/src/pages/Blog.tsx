import React from 'react';
import { Newspaper, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  { 
    id: 1, 
    title: 'How to manage full-time work and CA preparation', 
    excerpt: 'Balancing a demanding job with the rigors of CA exams is a challenge that many students face...',
    category: 'Study Routine',
    author: 'Tanvir Ahmed, ACA',
    date: 'May 10, 2026',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 2, 
    title: 'The strategy for passing Financial Accounting in first attempt', 
    excerpt: 'Financial Accounting is often considered the foundation of the CA curriculum. Here is my strategy...',
    category: 'Exam Tips',
    author: 'Nabila Islam',
    date: 'May 08, 2026',
    image: 'https://images.unsplash.com/photo-1454165833767-6216b28af6c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 3, 
    title: 'Career opportunities for CA students in Bangladesh', 
    excerpt: 'The scope for Chartered Accountants in Bangladesh has expanded significantly over the last decade...',
    category: 'Career Advice',
    author: 'Arif Chowdhury',
    date: 'May 05, 2026',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

const Blog = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <div>
          <h1 className="text-3xl font-bold text-[#0F172A]">Knowledge Hub</h1>
          <p className="mt-2 text-slate-600">Expert tips, study guides, and career advice for CA students.</p>
        </div>
        <div className="mt-6 md:mt-0 flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {['All Articles', 'Study Guides', 'Exam Tips', 'Career', 'Finance'].map((cat) => (
            <button key={cat} className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-200">
               {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md">
            <img src={post.image} className="h-48 w-full object-cover" alt="" />
            <div className="flex flex-1 flex-col p-6">
               <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                  {post.category}
               </div>
               <h2 className="text-xl font-bold text-[#0F172A] mb-3 leading-tight hover:text-blue-600 cursor-pointer transition-colors">
                  {post.title}
               </h2>
               <p className="text-sm text-slate-600 mb-6 flex-1">
                  {post.excerpt}
               </p>
               <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                     <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
                        <User className="h-4 w-4 text-slate-400" />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-[#0F172A]">{post.author}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">{post.date}</p>
                     </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <ArrowRight className="h-5 w-5 text-slate-300 hover:text-blue-600 cursor-pointer transition-colors" />
                  </Link>
               </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
