import React from 'react';
import { Microscope, Brain, Clock, GitCompare, BookOpen, GraduationCap, Heart, Sparkles, Flame } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, stats }) {
  const tabs = [
    { id: 'profe', label: 'Simulador Profe (UPE)', icon: Sparkles, badge: '66 Láminas' },
    { id: 'atlas', label: 'Atlas & Preparados', icon: Microscope, badge: 'Histology Guide' },
    { id: 'tutor', label: 'DeepTutor Yani', icon: Brain, badge: 'Socrático' },
    { id: 'campana', label: 'Simulador Campana', icon: Clock, badge: '60s' },
    { id: 'duelos', label: 'Duelo de Confusiones', icon: GitCompare, badge: '5 pares' },
    { id: 'banco', label: 'Cuestionario 2° Parcial', icon: BookOpen, badge: 'Ross/UPE' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-700 text-white px-4 py-2 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold tracking-wide flex items-center gap-1.5">
              HistYani · Medicina 1° Año <Heart className="w-3.5 h-3.5 fill-pink-300 text-pink-300 inline" />
            </span>
            <span className="hidden sm:inline text-pink-100">|</span>
            <span className="hidden sm:inline text-pink-100">
              UPE Presidente Franco · Cátedra Bruna Bridi (Ross Histología)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-white/15 px-2.5 py-0.5 rounded-full text-white/95 text-xs font-semibold">
              🎯 {stats.masteredCount} Preparados dominados
            </span>
            <span className="bg-white/15 px-2.5 py-0.5 rounded-full text-white/95 text-xs font-semibold">
              ⭐ {stats.quizScore}% Rendimiento
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-pink-500/20">
            <Microscope className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-indigo-950 to-pink-900 bg-clip-text text-transparent">
                HistYani
              </h1>
              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-md bg-pink-50 text-pink-700 border border-pink-200">
                Personalizado para Yani
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Atlas virtual con reconocimiento de preparados, pistas socráticas y simulador de examen
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow-sm shadow-pink-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
