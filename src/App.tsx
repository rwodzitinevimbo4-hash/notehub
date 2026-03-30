/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Upload, FileText, Download, Search, BookOpen, Layers, Instagram, Mail } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="platform-wrapper">
      {/* Background Gradients */}
      <div className="gradient-blob-1"></div>
      <div className="gradient-blob-2"></div>

      {/* Noise Overlay */}
      <div className="noise-bg"></div>

      {/* Content */}
      <div className="content-container">
        {/* Header */}
        <header className="header">
          <div className="logo-area" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>
            <div className="logo-icon">
              <div className="logo-dot"></div>
            </div>
            <span className="logo-text">NotesHub</span>
          </div>
          
          <nav className="main-nav">
            <button 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >Home</button>
            <button 
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => setCurrentPage('about')}
            >About Us</button>
          </nav>

          <div className="header-actions">
            <div className="search-container">
              <Search className="search-icon" />
              <input 
                type="text" 
                placeholder="Search notes, subjects..." 
                className="search-input"
              />
            </div>
            <button className="btn-primary">
              Sign In
            </button>
          </div>
        </header>

        {currentPage === 'home' ? (
          <>
          {/* Hero & Main Content */}
          <div className="main-grid">
          
          {/* Left Column - Typography */}
          <div className="hero-section">
            <div className="subtitle-wrapper">
              <p className="subtitle">Helping Students Achieve Excellence</p>
            </div>
            
            <h1 className="hero-title">
              Student<br/>Notes<br/>Sharing<br/>Platform
            </h1>
            
            <div className="prepared-for">
              <p className="prepared-label">Prepared for</p>
              <p className="prepared-value">School & College Students</p>
            </div>
          </div>

          {/* Right Column - Interactive Panels */}
          <div className="panels-section">
            
            {/* Upload Panel */}
            <div className="panel-card">
              <div className="panel-header">
                <h2 className="panel-title">Upload Notes</h2>
                <div className="icon-circle">
                  <Upload size={20} color="#374151" />
                </div>
              </div>
              
              <div className="upload-area">
                <div className="upload-icon-wrapper">
                  <FileText size={28} />
                </div>
                <p className="upload-title">Drag & drop your files here</p>
                <p className="upload-subtitle">Supports PDF, DOCX, PPTX up to 50MB</p>
                <button className="btn-dark">
                  Browse Files
                </button>
              </div>
            </div>

            {/* Categories & Downloads */}
            <div className="panel-card">
              <div className="panel-header">
                <h2 className="panel-title">Recent Notes</h2>
                <button className="view-all-btn">View All</button>
              </div>

              {/* Categories */}
              <div className="categories-scroll">
                {[
                  { name: 'Computer Science', icon: <Layers className="category-icon" /> },
                  { name: 'Mathematics', icon: <BookOpen className="category-icon" /> },
                  { name: 'Physics', icon: <Layers className="category-icon" /> },
                  { name: 'Biology', icon: <BookOpen className="category-icon" /> }
                ].map((cat) => (
                  <span key={cat.name} className="category-pill">
                    {cat.icon}
                    {cat.name}
                  </span>
                ))}
              </div>

              {/* Files List */}
              <div className="files-list">
                {[
                  { name: 'Data Structures Midterm.pdf', subject: 'Computer Science', size: '2.4 MB', colorClass: 'blue' },
                  { name: 'Calculus II Formula Sheet.pdf', subject: 'Mathematics', size: '1.1 MB', colorClass: 'orange' },
                  { name: 'Quantum Mechanics Ch 1-3.docx', subject: 'Physics', size: '3.8 MB', colorClass: 'purple' },
                ].map((file, i) => (
                  <div key={i} className="file-item">
                    <div className="file-info-group">
                      <div className={`file-icon-box ${file.colorClass}`}>
                        <FileText size={24} />
                      </div>
                      <div className="file-details">
                        <p className="file-name">{file.name}</p>
                        <p className="file-meta">{file.subject} • {file.size}</p>
                      </div>
                    </div>
                    <button className="download-btn">
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        </>
        ) : (
          <div className="about-section">
            <div className="about-card">
              <div className="about-image-container">
                <img src="https://picsum.photos/seed/tinevimbo/400/500" alt="Tinevimbo Rwodzi" className="about-image" referrerPolicy="no-referrer" />
              </div>
              <div className="about-info">
                <h2 className="about-title">About the Creator</h2>
                <h1 className="about-name">Tinevimbo Rwodzi</h1>
                <p className="about-bio">Passionate about making education accessible and helping students share knowledge seamlessly.</p>
                
                <div className="contact-links">
                  <a href="mailto:rwodzitinevimbo4@gmail.com" className="contact-link">
                    <div className="contact-icon-wrapper"><Mail size={20} /></div>
                    <span>rwodzitinevimbo4@gmail.com</span>
                  </a>
                  <a href="https://instagram.com/tanaka_tinez" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <div className="contact-icon-wrapper"><Instagram size={20} /></div>
                    <span>@tanaka_tinez</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
