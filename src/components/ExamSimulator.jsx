import React, { useState, useEffect } from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import confetti from 'canvas-confetti';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  AlertCircle, 
  ArrowRight,
  Flame,
  Microscope,
  Eye
} from 'lucide-react';

export default function ExamSimulator({ onAddWeakness }) {
  const [timerDuration, setTimerDuration] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledSlides, setShuffledSlides] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [streak, setStreak] = useState(0);

  // Initialize random test
  useEffect(() => {
    restartExam();
  }, []);

  const restartExam = () => {
    const shuffled = [...SLIDES_DATA].sort(() => Math.random() - 0.5);
    setShuffledSlides(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setTimeLeft(timerDuration);
    setIsActive(true);
    setScore(0);
    setTotalAnswered(0);
    setStreak(0);
  };

  // Timer countdown effect
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0 && !isAnswered) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isAnswered && isActive) {
      handleSelectOption('TIMEOUT');
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, isAnswered]);

  const currentSlide = shuffledSlides[currentIndex] || SLIDES_DATA[0];

  const getOptions = (slide) => {
    if (!slide) return [];
    const others = SLIDES_DATA.filter((s) => s.id !== slide.id);
    const distractors = others.sort(() => Math.random() - 0.5).slice(0, 3);
    const combined = [slide, ...distractors].sort(() => Math.random() - 0.5);
    return combined;
  };

  const [currentOptions, setCurrentOptions] = useState([]);

  useEffect(() => {
    if (currentSlide) {
      setCurrentOptions(getOptions(currentSlide));
    }
  }, [currentIndex, shuffledSlides]);

  const handleSelectOption = (chosenId) => {
    if (isAnswered) return;
    setSelectedOption(chosenId);
    setIsAnswered(true);
    setTotalAnswered((prev) => prev + 1);

    const isCorrect = chosenId === currentSlide.id;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
      if (streak + 1 >= 3) {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      }
    } else {
      setStreak(0);
      onAddWeakness(currentSlide);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < shuffledSlides.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(timerDuration);
    } else {
      setIsActive(false);
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
    }
  };

  const timerPercentage = (timeLeft / timerDuration) * 100;
  const isUrgent = timeLeft <= 10;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Top Controls / Score Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
            #{currentIndex + 1}
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-sm">
              Mesa de Práctico (Simulador de Campana)
            </h2>
            <p className="text-xs text-slate-500">
              {totalAnswered} preparados evaluados · Aciertos: {score}/{totalAnswered}
            </p>
          </div>
        </div>

        {/* Streak & Timer settings */}
        <div className="flex items-center gap-3">
          {streak > 1 && (
            <div className="flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold animate-bounce">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              ¡Racha de {streak}!
            </div>
          )}

          {/* Time Picker */}
          <div className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 p-1 rounded-xl">
            <span className="px-2 text-slate-500">Tiempo:</span>
            {[30, 60, 90].map((sec) => (
              <button
                key={sec}
                onClick={() => {
                  setTimerDuration(sec);
                  setTimeLeft(sec);
                }}
                className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  timerDuration === sec ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {sec}s
              </button>
            ))}
          </div>

          <button
            onClick={restartExam}
            className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            title="Reiniciar simulador"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        {/* Timer Bar */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold mb-1.5">
            <span className="flex items-center gap-1.5 text-slate-600">
              <Clock className={`w-4 h-4 ${isUrgent ? 'text-red-500 animate-pulse' : 'text-indigo-600'}`} />
              Tiempo en la mesa:
            </span>
            <span className={`text-sm font-black ${isUrgent ? 'text-red-600 animate-pulse' : 'text-slate-800'}`}>
              {timeLeft} segundos
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                isUrgent ? 'bg-red-500' : 'bg-gradient-to-r from-pink-500 to-indigo-600'
              }`}
              style={{ width: `${timerPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* REAL MICROSCOPIC SLIDE IMAGE (Campo Ciego) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600">
            <span className="flex items-center gap-1.5 uppercase tracking-wider text-pink-700">
              <Microscope className="w-4 h-4" /> Observa el preparado al microscopio:
            </span>
            <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
              Tinción: {currentSlide.stain}
            </span>
          </div>
          
          <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md">
            <img
              src={currentSlide.image}
              alt="Preparado ciego de examen"
              className="w-full max-h-[360px] object-contain mx-auto"
            />
          </div>
        </div>

        {/* Clues Presented in the Microscope */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Pista arquitectónica a bajo aumento (4x):
          </span>
          <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-sans">
            "{currentSlide.lowPowerArchitecture}"
          </p>
        </div>

        {/* Question */}
        <div>
          <h3 className="text-base font-bold text-slate-900">
            ¿Qué órgano o tejido estás observando en esta mesa?
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Selecciona tu diagnóstico antes de que suene la campana:
          </p>
        </div>

        {/* 4 Multiple Choice Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentOptions.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const isCorrect = opt.id === currentSlide.id;

            let btnStyle = 'bg-slate-50 border-slate-200 hover:border-pink-300 hover:bg-pink-50/30 text-slate-800';

            if (isAnswered) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold shadow-xs';
              } else if (isSelected) {
                btnStyle = 'bg-red-50 border-red-400 text-red-900 font-bold';
              } else {
                btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                disabled={isAnswered}
                className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
              >
                <div>
                  <div className="font-bold text-sm">{opt.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{opt.system}</div>
                </div>
                {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Feedback / Explanation Box */}
        {isAnswered && (
          <div
            className={`p-4 rounded-xl border space-y-2 animate-fadeIn ${
              selectedOption === currentSlide.id
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-sm">
              {selectedOption === currentSlide.id ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ¡Excelente Yani! Diagnóstico exacto al microscopio.
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  {selectedOption === 'TIMEOUT'
                    ? '¡Sonó la campana! Se agotó el tiempo.'
                    : `Era ${currentSlide.title}. Lo guardamos para reforzar.`}
                </>
              )}
            </div>

            <p className="text-xs leading-relaxed">
              <strong>Fórmula para defenderlo:</strong> {currentSlide.clinicalExamFormula}
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Siguiente preparado</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
