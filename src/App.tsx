/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Upload, FileText, Download, Search, BookOpen, Layers } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] relative overflow-hidden font-sans text-[#111111]">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#f4a8e1]/40 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#f7b28a]/40 blur-[140px] pointer-events-none"></div>

      {/* Noise Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#111111] rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-[#fcfaf8] rounded-sm"></div>
            </div>
            <span className="font-bold text-xl tracking-tight">NotesHub</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search notes, subjects..." 
                className="pl-9 pr-4 py-2 bg-white/50 backdrop-blur-sm border border-white/60 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400/50 w-64 shadow-sm"
              />
            </div>
            <button className="bg-[#8b5cf6] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#7c3aed] transition-colors shadow-md shadow-purple-500/20">
              Sign In
            </button>
          </div>
        </header>

        {/* Hero & Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 flex-grow items-center">
          
          {/* Left Column - Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <div className="mb-12">
              <p className="text-sm font-semibold text-gray-600 tracking-wide">Helping Students Achieve Excellence</p>
            </div>
            
            <h1 className="text-[4.5rem] sm:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] font-black tracking-tighter leading-[0.85] mb-16 text-[#111111]">
              Student<br/>Notes<br/>Sharing<br/>Platform
            </h1>
            
            <div className="mt-auto">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Prepared for</p>
              <p className="text-sm font-bold text-[#111111]">School & College Students</p>
            </div>
          </div>

          {/* Right Column - Interactive Panels */}
          <div className="lg:col-span-5 flex flex-col gap-8 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
            
            {/* Upload Panel */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-2xl shadow-black/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Upload Notes</h2>
                <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center shadow-sm">
                  <Upload className="w-5 h-5 text-gray-700" />
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-300/80 rounded-2xl p-10 text-center hover:bg-white/50 hover:border-purple-300 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7" />
                </div>
                <p className="font-bold text-gray-800 text-lg">Drag & drop your files here</p>
                <p className="text-sm font-medium text-gray-500 mt-2">Supports PDF, DOCX, PPTX up to 50MB</p>
                <button className="mt-6 bg-[#111111] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
                  Browse Files
                </button>
              </div>
            </div>

            {/* Categories & Downloads */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-2xl shadow-black/5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Recent Notes</h2>
                <button className="text-xs font-bold text-[#8b5cf6] hover:text-[#7c3aed] uppercase tracking-wider">View All</button>
              </div>

              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide -mx-2 px-2">
                {[
                  { name: 'Computer Science', icon: <Layers className="w-3 h-3 mr-1.5" /> },
                  { name: 'Mathematics', icon: <BookOpen className="w-3 h-3 mr-1.5" /> },
                  { name: 'Physics', icon: <Layers className="w-3 h-3 mr-1.5" /> },
                  { name: 'Biology', icon: <BookOpen className="w-3 h-3 mr-1.5" /> }
                ].map((cat) => (
                  <span key={cat.name} className="flex items-center whitespace-nowrap px-4 py-2 bg-white/80 border border-white rounded-full text-xs font-bold text-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                    {cat.icon}
                    {cat.name}
                  </span>
                ))}
              </div>

              {/* Files List */}
              <div className="space-y-3">
                {[
                  { name: 'Data Structures Midterm.pdf', subject: 'Computer Science', size: '2.4 MB', color: 'text-blue-600', bg: 'bg-blue-100' },
                  { name: 'Calculus II Formula Sheet.pdf', subject: 'Mathematics', size: '1.1 MB', color: 'text-orange-600', bg: 'bg-orange-100' },
                  { name: 'Quantum Mechanics Ch 1-3.docx', subject: 'Physics', size: '3.8 MB', color: 'text-purple-600', bg: 'bg-purple-100' },
                ].map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/60 rounded-2xl border border-white hover:bg-white transition-colors group cursor-pointer shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${file.bg} ${file.color} rounded-xl flex items-center justify-center shrink-0`}>
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-gray-900 line-clamp-1">{file.name}</p>
                        <p className="text-xs font-semibold text-gray-500 mt-0.5">{file.subject} • {file.size}</p>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center group-hover:bg-[#8b5cf6] group-hover:text-white transition-colors shrink-0 shadow-sm">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
