import React, { useState } from 'react';
import { OFFICIAL_QUESTIONS, TRUE_FALSE_QUESTIONS } from '../data/questionsData';
import { BookOpen, CheckCircle2, XCircle, HelpCircle, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OfficialQuizView() {
  const [mode, setMode] = useState('multiple'); // 'multiple' | 'vf'
  const [userAnswers, setUserAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});

  const handleSelectMultiple = (questionId, optionKey, correctKey) => {
    if (userAnswers[questionId]) return; // already answered
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey
    }));
    setShowExplanations((prev) => ({
      ...prev,
      [questionId]: true
    }));

    if (optionKey === correctKey) {
      confetti({ particleCount: 30, spread: 45, origin: { y: 0.8 } });
    }
  };

  const handleSelectVF = (vfId, chosenBoolean, isCorrectBoolean) => {
    if (userAnswers[vfId] !== undefined) return;
    setUserAnswers((prev) => ({
      ...prev,
      [vfId]: chosenBoolean
    }));
    setShowExplanations((prev) => ({
      ...prev,
      [vfId]: true
    }));

    if (chosenBoolean === isCorrectBoolean) {
      confetti({ particleCount: 30, spread: 45, origin: { y: 0.8 } });
    }
  };

  const resetAll = () => {
    setUserAnswers({});
    setShowExplanations({});
  };

  const questionsCount = mode === 'multiple' ? OFFICIAL_QUESTIONS.length : TRUE_FALSE_QUESTIONS.length;
  const answeredCount = Object.keys(userAnswers).filter((k) =>
    mode === 'multiple' ? !k.startsWith('vf-') : k.startsWith('vf-')
  ).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" /> Banco Oficial de Preguntas UPE Franco
            </div>
            <h2 className="text-xl font-black text-slate-900">
              Cuestionario 2° Parcial · Instructora Bruna Bridi
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Preguntas reales de evaluación continua, parciales y Kahoot de cátedra
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={resetAll}
              className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer text-xs flex items-center gap-1 font-medium"
              title="Reiniciar cuestionario"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reiniciar
            </button>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="flex gap-2 mt-5 border-t border-slate-100 pt-4">
          <button
            onClick={() => setMode('multiple')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              mode === 'multiple'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Opción Múltiple ({OFFICIAL_QUESTIONS.length} preguntas)
          </button>
          <button
            onClick={() => setMode('vf')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              mode === 'vf'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Verdadero o Falso con Justificación ({TRUE_FALSE_QUESTIONS.length} preguntas)
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-5">
        {mode === 'multiple' && (
          OFFICIAL_QUESTIONS.map((q) => {
            const userAnswer = userAnswers[q.id];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-pink-100 text-pink-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {q.id}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                        {q.topic}
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm mt-1 leading-snug">
                        {q.question}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const isSelected = userAnswer === opt.key;
                    const isTheCorrectOne = opt.key === q.correctAnswer;

                    let btnStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800';

                    if (isAnswered) {
                      if (isTheCorrectOne) {
                        btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                      } else if (isSelected) {
                        btnStyle = 'bg-red-50 border-red-400 text-red-950 font-medium';
                      } else {
                        btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={opt.key}
                        onClick={() => handleSelectMultiple(q.id, opt.key, q.correctAnswer)}
                        disabled={isAnswered}
                        className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold uppercase w-5">{opt.key})</span>
                          <span>{opt.text}</span>
                        </div>
                        {isAnswered && isTheCorrectOne && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {isAnswered && isSelected && !isTheCorrectOne && (
                          <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {isAnswered && (
                  <div className={`p-3.5 rounded-xl text-xs leading-relaxed ${
                    isCorrect ? 'bg-emerald-50 text-emerald-950 border border-emerald-200' : 'bg-amber-50 text-amber-950 border border-amber-200'
                  }`}>
                    <div className="font-bold flex items-center gap-1.5 mb-1">
                      {isCorrect ? '✓ ¡Respuesta correcta!' : '⚠️ Explicación de cátedra:'}
                    </div>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })
        )}

        {mode === 'vf' && (
          TRUE_FALSE_QUESTIONS.map((item, idx) => {
            const userAnswer = userAnswers[item.id];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = userAnswer === item.isTrue;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="font-bold text-slate-900 text-sm leading-snug">
                    "{item.statement}"
                  </p>
                </div>

                {/* V / F Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleSelectVF(item.id, true, item.isTrue)}
                    disabled={isAnswered}
                    className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      isAnswered
                        ? item.isTrue
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                          : userAnswer === true
                          ? 'bg-red-50 border-red-400 text-red-900'
                          : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                        : 'bg-slate-50 border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 text-slate-800'
                    }`}
                  >
                    Verdadero (V)
                  </button>
                  <button
                    onClick={() => handleSelectVF(item.id, false, item.isTrue)}
                    disabled={isAnswered}
                    className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      isAnswered
                        ? !item.isTrue
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                          : userAnswer === false
                          ? 'bg-red-50 border-red-400 text-red-900'
                          : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                        : 'bg-slate-50 border-slate-200 hover:bg-rose-50 hover:border-rose-300 text-slate-800'
                    }`}
                  >
                    Falso (F)
                  </button>
                </div>

                {/* Explanation */}
                {isAnswered && (
                  <div className={`p-3.5 rounded-xl text-xs leading-relaxed ${
                    isCorrect ? 'bg-emerald-50 text-emerald-950 border border-emerald-200' : 'bg-rose-50 text-rose-950 border border-rose-200'
                  }`}>
                    <div className="font-bold mb-1">
                      {isCorrect ? '✓ ¡Correcto!' : '❌ Justificación de la corrección:'}
                    </div>
                    {item.correction}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
