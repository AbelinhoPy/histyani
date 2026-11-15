import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AtlasViewer from './components/AtlasViewer';
import DeepTutor from './components/DeepTutor';
import ExamSimulator from './components/ExamSimulator';
import DuelsView from './components/DuelsView';
import OfficialQuizView from './components/OfficialQuizView';
import { SLIDES_DATA } from './data/slidesData';
import { Heart, Sparkles, BookOpen, Microscope, Flame } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('atlas');
  const [selectedSlideForTutor, setSelectedSlideForTutor] = useState(null);
  
  // Persisted bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('histyani_bookmarks');
      return saved ? JSON.parse(saved) : ['higado', 'ureter', 'pancreas'];
    } catch {
      return ['higado', 'ureter', 'pancreas'];
    }
  });

  // Weak points to reinforce
  const [weaknesses, setWeaknesses] = useState(() => {
    try {
      const saved = localStorage.getItem('histyani_weaknesses');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('histyani_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('histyani_weaknesses', JSON.stringify(weaknesses));
    } catch (e) {
      console.error(e);
    }
  }, [weaknesses]);

  const toggleBookmark = (id) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddWeakness = (slide) => {
    setWeaknesses((prev) => {
      if (prev.some((w) => w.id === slide.id)) return prev;
      return [...prev, { id: slide.id, title: slide.title, system: slide.system, date: new Date().toLocaleDateString() }];
    });
  };

  const handleSelectForTutor = (slide) => {
    setSelectedSlideForTutor(slide);
    setActiveTab('tutor');
  };

  const stats = {
    masteredCount: SLIDES_DATA.length - weaknesses.length,
    quizScore: 92
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} stats={stats} />

      <main className="flex-1 pb-16">
        {activeTab === 'atlas' && (
          <AtlasViewer
            onSelectForTutor={handleSelectForTutor}
            bookmarkedIds={bookmarkedIds}
            toggleBookmark={toggleBookmark}
          />
        )}

        {activeTab === 'tutor' && (
          <DeepTutor selectedSlideForTutor={selectedSlideForTutor} />
        )}

        {activeTab === 'campana' && (
          <ExamSimulator onAddWeakness={handleAddWeakness} />
        )}

        {activeTab === 'duelos' && <DuelsView />}

        {activeTab === 'banco' && <OfficialQuizView />}
      </main>

      {/* Encouraging Footer for Yanina */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 font-medium text-slate-700">
            <span>HistYani · Desarrollado con</span>
            <Heart className="w-3.5 h-3.5 text-pink-600 fill-pink-600 inline" />
            <span>para Yanina Sebriano</span>
          </div>
          <div className="text-slate-400">
            Medicina 1° Año · UPE Presidente Franco · Cátedra Bruna Bridi · Libro Ross
          </div>
        </div>
      </footer>
    </div>
  );
}
