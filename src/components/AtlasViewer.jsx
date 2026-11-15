import React, { useState } from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { 
  Eye, 
  EyeOff, 
  ExternalLink, 
  Sparkles, 
  AlertTriangle, 
  Layers, 
  CheckCircle2, 
  Search, 
  Brain,
  Microscope,
  HelpCircle,
  Bookmark
} from 'lucide-react';

export default function AtlasViewer({ onSelectForTutor, bookmarkedIds, toggleBookmark }) {
  const [selectedSystem, setSelectedSystem] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSlideId, setActiveSlideId] = useState(SLIDES_DATA[0].id);
  const [occlusionMode, setOcclusionMode] = useState(true);
  const [revealedParts, setRevealedParts] = useState({});

  const activeSlide = SLIDES_DATA.find((s) => s.id === activeSlideId) || SLIDES_DATA[0];

  const systems = [
    { id: 'todos', label: 'Todos' },
    { id: 'digestivo', label: 'Digestivo' },
    { id: 'urinario', label: 'Urinario' },
    { id: 'endocrino', label: 'Endocrino' },
    { id: 'genital-femenino', label: 'Genital Femenino' },
    { id: 'genital-masculino', label: 'Genital Masculino' },
    { id: 'respiratorio', label: 'Respiratorio' },
    { id: 'linfatico', label: 'Linfático' },
  ];

  const filteredSlides = SLIDES_DATA.filter((slide) => {
    const matchesSystem = selectedSystem === 'todos' || slide.category === selectedSystem;
    const matchesQuery = slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         slide.system.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         slide.lowPowerArchitecture.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSystem && matchesQuery;
  });

  const toggleReveal = (key) => {
    setRevealedParts((prev) => ({
      ...prev,
      [activeSlide.id + '_' + key]: !prev[activeSlide.id + '_' + key]
    }));
  };

  const isRevealed = (key) => {
    if (!occlusionMode) return true;
    return !!revealedParts[activeSlide.id + '_' + key];
  };

  const isBookmarked = bookmarkedIds.includes(activeSlide.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar órgano o estructura..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {systems.map((sys) => (
            <button
              key={sys.id}
              onClick={() => setSelectedSystem(sys.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedSystem === sys.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {sys.label}
            </button>
          ))}
        </div>

        {/* Occlusion Toggle */}
        <div className="flex items-center gap-2 border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-4 w-full md:w-auto justify-between md:justify-start">
          <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
            {occlusionMode ? <EyeOff className="w-4 h-4 text-pink-600" /> : <Eye className="w-4 h-4 text-emerald-600" />}
            Modo Ocultar / Revelar
          </span>
          <button
            onClick={() => setOcclusionMode(!occlusionMode)}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              occlusionMode
                ? 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {occlusionMode ? 'Activo (Tipo Anki)' : 'Desactivado (Ver todo)'}
          </button>
        </div>
      </div>

      {/* Main Grid: Sidebar + Slide Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Slides List */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[750px] overflow-y-auto pr-1">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            Preparados disponibles ({filteredSlides.length})
          </div>
          {filteredSlides.map((slide) => {
            const isSelected = slide.id === activeSlideId;
            const bookmarked = bookmarkedIds.includes(slide.id);
            return (
              <div
                key={slide.id}
                onClick={() => setActiveSlideId(slide.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left relative ${
                  isSelected
                    ? 'bg-gradient-to-r from-pink-50 to-indigo-50 border-pink-400 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                      {slide.system}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1">{slide.title}</h3>
                  </div>
                  {bookmarked && (
                    <Bookmark className="w-4 h-4 text-pink-600 fill-pink-600 shrink-0 mt-1" />
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {slide.lowPowerArchitecture}
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-2">
                  <span>🔬 {slide.stain}</span>
                  <span className="text-pink-600 font-medium">Ver detalles →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Slide Interactive Detail */}
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            {/* Top Bar of Active Slide */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-pink-700 bg-pink-50 border border-pink-200 px-2.5 py-0.5 rounded-full">
                    {activeSlide.system}
                  </span>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full font-medium">
                    {activeSlide.type}
                  </span>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full font-medium">
                    Tinción: {activeSlide.stain}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 mt-1.5 flex items-center gap-2">
                  {activeSlide.title}
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleBookmark(activeSlide.id)}
                  className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                    isBookmarked
                      ? 'bg-pink-50 border-pink-300 text-pink-600'
                      : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                  }`}
                  title={isBookmarked ? 'Quitar de favoritos' : 'Guardar en repasos de Yani'}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-pink-600' : ''}`} />
                </button>
                <a
                  href={activeSlide.histologyGuideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs font-bold shadow-sm hover:from-indigo-700 hover:to-indigo-800 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Abrir en Histology Guide (Zoom Vivo)
                </a>
                <button
                  onClick={() => onSelectForTutor(activeSlide)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-bold shadow-sm hover:from-pink-700 hover:to-rose-700 transition-all cursor-pointer"
                >
                  <Brain className="w-3.5 h-3.5" />
                  Preguntar al Tutor
                </button>
              </div>
            </div>

            {/* Microscopic Virtual Card & Low-power Architecture */}
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-5 rounded-xl relative overflow-hidden shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-300 flex items-center gap-1.5">
                  <Microscope className="w-4 h-4" /> Arquitectura a bajo aumento (4x)
                </span>
                <span className="text-[11px] text-slate-300 bg-white/10 px-2 py-0.5 rounded-md">
                  Paso 1: Delimitación de conjunto
                </span>
              </div>
              <p className="text-sm text-slate-100 leading-relaxed font-sans">
                {activeSlide.lowPowerArchitecture}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Microscopio virtual: Preparado digitalizado en alta definición</span>
                <a
                  href={activeSlide.histologyGuideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 underline flex items-center gap-1"
                >
                  Navegar lámina interactiva con zoom →
                </a>
              </div>
            </div>

            {/* The 2 Key Features (With Active Recall Occlusion) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Los 2 Rasgos Diagnósticos Clave (Regla de Oro de Yanina)
                </h3>
                {occlusionMode && (
                  <span className="text-xs text-pink-600 font-medium">
                    Haz clic en cada tarjeta para comprobar si lo recordabas
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeSlide.keyFeatures.map((feature, idx) => {
                  const key = `feature_${idx}`;
                  const revealed = isRevealed(key);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleReveal(key)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        revealed
                          ? 'bg-emerald-50/70 border-emerald-200 text-slate-800'
                          : 'bg-slate-100 border-slate-300 hover:bg-slate-200/80 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                          Rasgo #{idx + 1}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">
                          {revealed ? 'Revelado' : 'Toca para descubrir'}
                        </span>
                      </div>
                      <p className={`text-sm ${revealed ? 'text-slate-800 font-medium' : 'blur-sm select-none'}`}>
                        {revealed ? feature : 'Texto oculto para entrenamiento de memoria activa. Toca para ver la respuesta.'}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cells & Key Components */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                Células y Componentes Tisulares
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {activeSlide.cellsAndComponents.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="font-bold text-xs text-indigo-900">{item.name}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning: Confuse with */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  ¡Alerta de Examen! No confundir con:
                </h4>
                <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                  {activeSlide.confuseWith}
                </p>
              </div>
            </div>

            {/* Formula de Examen Práctico (Oral / Campana) */}
            <div className="p-5 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-pink-600" />
                  Fórmula para responder en la mesa (Instructora Bruna Bridi)
                </span>
                <button
                  onClick={() => toggleReveal('formula')}
                  className="text-xs text-pink-700 font-bold hover:underline"
                >
                  {isRevealed('formula') ? 'Ocultar' : 'Ver fórmula'}
                </button>
              </div>
              <p
                onClick={() => toggleReveal('formula')}
                className={`text-sm italic font-serif leading-relaxed text-slate-900 p-2 rounded-lg cursor-pointer ${
                  isRevealed('formula') ? 'bg-white/80 border border-pink-200' : 'bg-pink-100/50 blur-xs'
                }`}
              >
                {isRevealed('formula')
                  ? activeSlide.clinicalExamFormula
                  : 'Fórmula oculta. Toca aquí para ver cómo redactar o decir la respuesta exacta en el examen.'}
              </p>
              <div className="text-[11px] text-pink-900/70 font-sans">
                💡 <strong>Tip de Yani:</strong> En el oral no des rodeos. Di el nombre del órgano, los dos rasgos visibles de justificación y su función en una sola frase fluida.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
