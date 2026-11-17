import React, { useState, useEffect, useRef } from 'react';
import { 
  BANCO_PROFESOR_META, 
  BANCO_PROFESOR_CONFIG, 
  BANCO_PROFESOR_CATEGORIAS, 
  BANCO_PROFESOR_PREGUNTAS 
} from '../data/profesorData';
import { 
  Clock, Play, RotateCcw, CheckCircle2, XCircle, Eye, 
  ZoomIn, ZoomOut, Sparkles, Award, ArrowRight, ExternalLink,
  HelpCircle, BookOpen, Filter, Volume2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProfesorSimulatorView() {
  const [mode, setMode] = useState('practica'); // 'practica' | 'examen'
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [revealed, setRevealed] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [filterBrightness, setFilterBrightness] = useState(false);
  
  // Timer for Exam Mode (90s total: 3 phases of 30s)
  const [timeLeft, setTimeLeft] = useState(30);
  const [phase, setPhase] = useState(0); // 0: Panorámica (30s), 1: Zoom foco (30s), 2: Panorámica final (30s)
  const [isExamRunning, setIsExamRunning] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const timerRef = useRef(null);

  // Filter questions for practice mode
  const filteredPool = BANCO_PROFESOR_PREGUNTAS.filter(q => 
    selectedCategory === 'todas' || q.categoria === selectedCategory
  );

  // Practice state
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [practiceInput, setPracticeInput] = useState('');
  const [practiceScore, setPracticeScore] = useState({ correct: 0, wrong: 0 });

  const currentQ = mode === 'examen' 
    ? examQuestions[currentIndex] 
    : filteredPool[practiceIndex % (filteredPool.length || 1)];

  // Start Exam
  const startExam = (numQuestions = 10) => {
    const pool = selectedCategory === 'todas' 
      ? [...BANCO_PROFESOR_PREGUNTAS] 
      : BANCO_PROFESOR_PREGUNTAS.filter(q => q.categoria === selectedCategory);
    
    // Shuffle
    const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, Math.min(numQuestions, pool.length));
    setExamQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setExamFinished(false);
    setIsExamRunning(true);
    setPhase(0);
    setTimeLeft(BANCO_PROFESOR_CONFIG.segundosPorSlide || 30);
    setIsZoomed(false);
  };

  // Timer loop for exam
  useEffect(() => {
    if (!isExamRunning || examFinished) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev > 1) {
          return prev - 1;
        } else {
          // Advance phase
          setPhase(currPhase => {
            if (currPhase === 0) {
              // Move to Phase 1 (Zoom In)
              setIsZoomed(true);
              return 1;
            } else if (currPhase === 1) {
              // Move to Phase 2 (Zoom Out)
              setIsZoomed(false);
              return 2;
            } else {
              // Slide time is up (90s completed), move to next question or finish
              handleNextExamSlide();
              return 0;
            }
          });
          return BANCO_PROFESOR_CONFIG.segundosPorSlide || 30;
        }
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isExamRunning, examFinished, currentIndex, examQuestions]);

  const handleNextExamSlide = () => {
    setIsZoomed(false);
    setPhase(0);
    setTimeLeft(BANCO_PROFESOR_CONFIG.segundosPorSlide || 30);
    if (currentIndex + 1 < examQuestions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    setIsExamRunning(false);
    setExamFinished(true);
    clearInterval(timerRef.current);

    // Calculate score
    let hits = 0;
    examQuestions.forEach((q, idx) => {
      const ans = (userAnswers[idx] || '').trim().toLowerCase();
      const expected = q.respuesta.trim().toLowerCase();
      if (ans && (expected.includes(ans) || ans.includes(expected))) {
        hits++;
      }
    });

    if (hits >= 6) {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    }
  };

  const getQuestionPrompt = (tipo) => {
    const articulos = {
      'Órgano': 'el órgano',
      'Estructura': 'la estructura',
      'Tejido': 'el tejido',
      'Célula': 'la célula',
      'Epitelio': 'el epitelio',
      'Zona': 'la zona',
      'Glándula': 'la glándula',
      'Capilar': 'el tipo de capilar',
      'Porción': 'la porción',
      'Órgano y fase': 'el órgano y la fase'
    };
    if (tipo === 'Función') return '¿Qué función cumple la estructura señalada?';
    if (tipo === 'Secreción') return '¿Qué sustancia u hormona secreta la célula/zona señalada?';
    return `Identificá ${articulos[tipo] || 'lo indicado por el docente'}`;
  };

  const getTransformStyle = () => {
    if (!isZoomed || !currentQ) {
      return { transform: 'scale(1) translate(0, 0)', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' };
    }
    const z = currentQ.zoom || 1.8;
    const fx = currentQ.foco ? currentQ.foco[0] : 0.5;
    const fy = currentQ.foco ? currentQ.foco[1] : 0.5;
    // Calculate translate percentage
    const moveX = (0.5 - fx) * 100 * (z - 1);
    const moveY = (0.5 - fy) * 100 * (z - 1);
    return {
      transform: `scale(${z}) translate(${moveX / z}%, ${moveY / z}%)`,
      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
    };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Banner & Title */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 mb-8 shadow-xl border border-indigo-900/50">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Material Oficial del Docente (UPE Franco · 66 Láminas)
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Simulador Oficial de Láminas
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Banco idéntico al práctico de reconocimiento con micrografías auténticas en alta definición, punto focal dinámico y tiempo de campana reglamentario.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="./simulador-profesor.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all shadow-sm"
            >
              <ExternalLink className="w-4 h-4 text-amber-300" />
              Abrir HTML Original del Profe
            </a>

            <div className="flex items-center bg-slate-800/90 p-1.5 rounded-2xl border border-slate-700">
              <button
                onClick={() => { setMode('practica'); setIsExamRunning(false); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  mode === 'practica' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Modo Práctica
              </button>
              <button
                onClick={() => { setMode('examen'); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  mode === 'examen' 
                    ? 'bg-rose-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Modo Examen (Campana)
              </button>
            </div>
          </div>
        </div>

        {/* System Category Filter */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5" /> Filtrar Sistema:
          </span>
          <button
            onClick={() => { setSelectedCategory('todas'); setPracticeIndex(0); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === 'todas'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Todos ({BANCO_PROFESOR_PREGUNTAS.length})
          </button>
          {BANCO_PROFESOR_CATEGORIAS.map(cat => {
            const count = BANCO_PROFESOR_PREGUNTAS.filter(q => q.categoria === cat.id).length;
            const isSel = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => { setSelectedCategory(cat.id); setPracticeIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSel
                    ? 'text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
                style={{ backgroundColor: isSel ? cat.color : undefined }}
              >
                {cat.nombre} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main View: MODE PRACTICA */}
      {mode === 'practica' && currentQ && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Microscope Viewer Canvas */}
          <div className="lg:col-span-8 bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
            {/* Top Toolbar */}
            <div className="bg-slate-900/90 backdrop-blur-md px-5 py-3 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 font-bold uppercase tracking-wider text-[11px] border border-indigo-500/30">
                  {currentQ.categoria}
                </span>
                <span className="text-slate-400 font-medium">
                  Lámina {practiceIndex + 1} de {filteredPool.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-all ${
                    isZoomed 
                      ? 'bg-amber-400 text-slate-950 shadow-md' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                  {isZoomed ? 'Alejar (1x)' : `Zoom Foco (${currentQ.zoom || 1.8}x)`}
                </button>
                <button
                  onClick={() => setFilterBrightness(!filterBrightness)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    filterBrightness 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                  title="Ajustar contraste de microscopio"
                >
                  Contraste H&E
                </button>
              </div>
            </div>

            {/* Visual Viewport with Overflow Hidden and Zoom Transform */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-black flex items-center justify-center select-none">
              <img
                src={currentQ.imagen}
                alt={currentQ.tipo}
                className="w-full h-full object-contain pointer-events-none"
                style={{
                  ...getTransformStyle(),
                  filter: filterBrightness ? 'contrast(1.15) brightness(1.05)' : 'none'
                }}
              />

              {/* Focus Reticle indicator when zoomed */}
              {isZoomed && currentQ.foco && (
                <div 
                  className="absolute pointer-events-none w-8 h-8 -ml-4 -mt-4 border-2 border-amber-400 rounded-full animate-ping opacity-75"
                  style={{
                    left: `${currentQ.foco[0] * 100}%`,
                    top: `${currentQ.foco[1] * 100}%`
                  }}
                />
              )}

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 text-xs text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Enfoque óptico: <b>{isZoomed ? `Detalle ${currentQ.zoom}x` : 'Panorámica 1x'}</b></span>
              </div>
            </div>

            {/* Bottom Tip */}
            <div className="bg-slate-900/60 px-5 py-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>💡 Consejo del docente: Observá la panorámica primero para ubicar el órgano y luego el zoom para identificar la célula.</span>
              <span className="font-mono text-slate-500">ID: {currentQ.id}</span>
            </div>
          </div>

          {/* Interactive Study Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col gap-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                Pregunta del Examen Práctico
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                {currentQ.tipo}
              </h3>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                {getQuestionPrompt(currentQ.tipo)}
              </p>
            </div>

            {/* Input field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600">
                Escribí tu respuesta antes de verificar:
              </label>
              <input
                type="text"
                value={practiceInput}
                onChange={(e) => setPracticeInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setRevealed(true);
                }}
                placeholder="Ej: Hepatocitos, Glomérulo renal..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-sm font-medium"
              />
            </div>

            {/* Action Buttons */}
            {!revealed ? (
              <button
                onClick={() => setRevealed(true)}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" /> Comprobar Respuesta Oficial
              </button>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  RESPUESTA OFICIAL DEL DOCENTE:
                </div>
                <div className="text-lg font-black text-emerald-950 bg-white px-4 py-3 rounded-xl border border-emerald-300 shadow-xs">
                  {currentQ.respuesta}
                </div>
                {currentQ.detalle && (
                  <p className="text-xs text-emerald-800">
                    {currentQ.detalle}
                  </p>
                )}

                {/* Self Evaluation */}
                <div className="pt-2 border-t border-emerald-200 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-600">¿Acertaste?</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setPracticeScore(p => ({ ...p, wrong: p.wrong + 1 }));
                        handleNextPractice();
                      }}
                      className="px-3 py-1.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold text-xs"
                    >
                      No supe
                    </button>
                    <button
                      onClick={() => {
                        setPracticeScore(p => ({ ...p, correct: p.correct + 1 }));
                        handleNextPractice();
                      }}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
                    >
                      ¡Sí, la sabía!
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <button
                disabled={practiceIndex === 0}
                onClick={() => {
                  setPracticeIndex(p => Math.max(0, p - 1));
                  setRevealed(false);
                  setPracticeInput('');
                  setIsZoomed(false);
                }}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold disabled:opacity-40"
              >
                ← Anterior
              </button>

              <button
                onClick={handleNextPractice}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                Siguiente Lámina <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Practice Tracker */}
            <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 flex items-center justify-around text-xs font-bold">
              <span className="text-emerald-700 flex items-center gap-1">
                ✓ Correctas: {practiceScore.correct}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-rose-700 flex items-center gap-1">
                ✗ Por repasar: {practiceScore.wrong}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main View: MODE EXAMEN (Campana 90s) */}
      {mode === 'examen' && !isExamRunning && !examFinished && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            Simulador de Examen de Campana
          </h3>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Exactamente como el práctico proyectado de la facultad: <b>10 láminas aleatorias</b>, <b>1 minuto 30 segundos</b> por preparado dividido en 3 fases:
          </p>

          <div className="grid grid-cols-3 gap-3 my-6 text-left">
            <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-xs">
              <span className="font-bold text-amber-900 block mb-1">Fase 1 (0-30s)</span>
              <span className="text-amber-800">Visión panorámica para identificar el órgano.</span>
            </div>
            <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-200 text-xs">
              <span className="font-bold text-blue-900 block mb-1">Fase 2 (30-60s)</span>
              <span className="text-blue-800">Zoom óptico automático al punto señalado.</span>
            </div>
            <div className="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200 text-xs">
              <span className="font-bold text-emerald-900 block mb-1">Fase 3 (60-90s)</span>
              <span className="text-emerald-800">Panorámica final para escribir la respuesta.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => startExam(10)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-lg shadow-rose-600/20 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" /> Iniciar Examen Completo (10 Láminas)
            </button>
            <button
              onClick={() => startExam(5)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              Express (5 Láminas)
            </button>
          </div>
        </div>
      )}

      {/* Running Exam Screen */}
      {mode === 'examen' && isExamRunning && currentQ && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
            {/* Exam Phase Header Bar */}
            <div className="bg-slate-900/90 backdrop-blur-md px-5 py-3 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-amber-400">
                  Lámina {currentIndex + 1} de {examQuestions.length}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                  {phase === 0 ? 'Fase 1: Panorámica' : phase === 1 ? 'Fase 2: Zoom al Foco' : 'Fase 3: Revisión Final'}
                </span>
              </div>

              {/* Countdown Timer */}
              <div className="flex items-center gap-2">
                <div className={`px-3 py-1 rounded-xl font-mono text-sm font-bold flex items-center gap-1.5 ${
                  timeLeft <= 5 ? 'bg-rose-600 text-white animate-bounce' : 'bg-slate-800 text-amber-300'
                }`}>
                  <Clock className="w-4 h-4" /> {timeLeft}s
                </div>
              </div>
            </div>

            {/* Phase Progress Bar */}
            <div className="w-full h-1.5 bg-slate-800 flex">
              <div className={`h-full flex-1 transition-all ${phase >= 0 ? 'bg-amber-400' : 'bg-slate-800'}`}></div>
              <div className={`h-full flex-1 transition-all ${phase >= 1 ? 'bg-blue-400' : 'bg-slate-800'}`}></div>
              <div className={`h-full flex-1 transition-all ${phase >= 2 ? 'bg-emerald-400' : 'bg-slate-800'}`}></div>
            </div>

            {/* Viewport */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={currentQ.imagen}
                alt={currentQ.tipo}
                className="w-full h-full object-contain pointer-events-none"
                style={getTransformStyle()}
              />

              {isZoomed && currentQ.foco && (
                <div 
                  className="absolute pointer-events-none w-8 h-8 -ml-4 -mt-4 border-2 border-amber-400 rounded-full animate-ping opacity-75"
                  style={{
                    left: `${currentQ.foco[0] * 100}%`,
                    top: `${currentQ.foco[1] * 100}%`
                  }}
                />
              )}
            </div>
          </div>

          {/* Exam Sheet (Hoja de Respuestas) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col gap-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                Lámina #{currentIndex + 1}
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-2">
                {currentQ.tipo}
              </h3>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                {getQuestionPrompt(currentQ.tipo)}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600">
                Tu respuesta en la hoja de examen:
              </label>
              <input
                type="text"
                autoFocus
                value={userAnswers[currentIndex] || ''}
                onChange={(e) => setUserAnswers({ ...userAnswers, [currentIndex]: e.target.value })}
                placeholder="Escribí aquí..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-rose-500 text-sm font-bold text-slate-900"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5"
              >
                {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                {isZoomed ? 'Ver Panorámica' : 'Acercar Foco'}
              </button>
              <button
                onClick={handleNextExamSlide}
                className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                Siguiente Lámina →
              </button>
            </div>

            {/* Answer Grid Summary */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Estado de la hoja (10 puntos):
              </span>
              <div className="grid grid-cols-5 gap-2">
                {examQuestions.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setCurrentIndex(i);
                      setIsZoomed(false);
                      setPhase(0);
                    }}
                    className={`py-2 text-center rounded-xl text-xs font-black cursor-pointer transition-all ${
                      i === currentIndex 
                        ? 'ring-2 ring-rose-500 bg-rose-50 text-rose-700 font-black' 
                        : userAnswers[i]?.trim()
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    #{i + 1}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={finishExam}
              className="w-full mt-2 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 transition-all"
            >
              Terminar y Entregar Examen
            </button>
          </div>
        </div>
      )}

      {/* Finished Exam Results */}
      {mode === 'examen' && examFinished && (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
          <div className="text-center pb-8 border-b border-slate-200">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-rose-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-rose-500/30">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-slate-900">
              Resultado del Examen Práctico
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Revisión hoja por hoja de las láminas del docente
            </p>

            {/* Score */}
            <div className="mt-6 inline-flex items-center gap-6 bg-slate-50 px-8 py-4 rounded-3xl border border-slate-200">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Nota obtenida</span>
                <span className="text-4xl font-black text-slate-900">
                  {examQuestions.filter((q, i) => {
                    const ans = (userAnswers[i] || '').trim().toLowerCase();
                    const exp = q.respuesta.trim().toLowerCase();
                    return ans && (exp.includes(ans) || ans.includes(exp));
                  }).length} / {examQuestions.length}
                </span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Porcentaje</span>
                <span className="text-4xl font-black text-emerald-600">
                  {Math.round(
                    (examQuestions.filter((q, i) => {
                      const ans = (userAnswers[i] || '').trim().toLowerCase();
                      const exp = q.respuesta.trim().toLowerCase();
                      return ans && (exp.includes(ans) || ans.includes(exp));
                    }).length / examQuestions.length) * 100
                  )}%
                </span>
              </div>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="mt-8 space-y-4">
            <h4 className="font-bold text-slate-900 text-sm">Desglose de Láminas:</h4>
            {examQuestions.map((q, idx) => {
              const userAns = (userAnswers[idx] || '').trim();
              const isMatch = userAns && (q.respuesta.toLowerCase().includes(userAns.toLowerCase()) || userAns.toLowerCase().includes(q.respuesta.toLowerCase()));
              return (
                <div 
                  key={idx}
                  className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isMatch ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={q.imagen} 
                      alt="" 
                      className="w-16 h-16 rounded-xl object-cover border border-slate-300 shadow-xs" 
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-500">#{idx + 1}</span>
                        <span className="text-xs font-bold text-slate-700 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          {q.tipo} ({q.categoria})
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 mt-1">
                        Respuesta oficial: <span className="text-indigo-950 font-black">{q.respuesta}</span>
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Tu respuesta: <b>{userAns || '(En blanco)'}</b>
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    {isMatch ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-xl">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correcto (+1 pto)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100 px-3 py-1.5 rounded-xl">
                        <XCircle className="w-3.5 h-3.5" /> A repasar
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => startExam(10)}
              className="px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-black text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Tomar Otro Examen Aleatorio
            </button>
          </div>
        </div>
      )}
    </div>
  );

  function handleNextPractice() {
    setRevealed(false);
    setPracticeInput('');
    setIsZoomed(false);
    setPracticeIndex(p => (p + 1) % filteredPool.length);
  }
}
