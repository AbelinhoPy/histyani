import React, { useState, useRef, useEffect } from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { 
  getSocraticHint, 
  generateSocraticQuestion, 
  answerHistologyQuery 
} from '../data/tutorEngine';
import { 
  Brain, 
  Send, 
  Sparkles, 
  Microscope, 
  HelpCircle, 
  Lightbulb, 
  BookOpen, 
  RefreshCw,
  GraduationCap
} from 'lucide-react';

export default function DeepTutor({ selectedSlideForTutor }) {
  const [activeSlideId, setActiveSlideId] = useState(
    selectedSlideForTutor ? selectedSlideForTutor.id : SLIDES_DATA[0].id
  );
  const [messages, setMessages] = useState([
    {
      sender: 'tutor',
      text: '¡Hola Yani! Soy tu copiloto socrático de Histología. Estoy configurado con el programa de Medicina de la UPE Franco y el libro Ross. ¿Qué preparado o duda te gustaría estudiar hoy? Puedes elegir una de las pistas rápidas o hacerme una pregunta.'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [hintLevel, setHintLevel] = useState(1);
  const chatBottomRef = useRef(null);

  const activeSlide = SLIDES_DATA.find((s) => s.id === activeSlideId) || SLIDES_DATA[0];

  useEffect(() => {
    if (selectedSlideForTutor) {
      setActiveSlideId(selectedSlideForTutor.id);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'tutor',
          text: `Cambiamos el foco a **${selectedSlideForTutor.title}** (${selectedSlideForTutor.system}).\n\n¿Quieres que te dé las pistas de observación progresiva, que te tome una pregunta socrática o que analicemos la fórmula de examen?`
        }
      ]);
    }
  }, [selectedSlideForTutor]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (customText) => {
    const textToSend = customText || inputText;
    if (!textToSend.trim()) return;

    const userMessage = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    if (!customText) setInputText('');

    // Simulate tutor reasoning
    setTimeout(() => {
      const response = answerHistologyQuery(textToSend, activeSlide);
      setMessages((prev) => [...prev, { sender: 'tutor', text: response }]);
    }, 400);
  };

  const handleRequestHint = (level) => {
    setHintLevel(level);
    const hintText = getSocraticHint(activeSlide, level);
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: `Solicito Pista Nivel ${level} para ${activeSlide.title}` },
      { sender: 'tutor', text: hintText }
    ]);
  };

  const handleSocraticQuestion = () => {
    const q = generateSocraticQuestion(activeSlide);
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: `Hazme una pregunta socrática sobre ${activeSlide.title}` },
      { sender: 'tutor', text: `🤔 **Pregunta de entrenamiento:**\n\n${q}\n\n*Tómate 30 segundos para pensarlo y respóndeme aquí abajo o piensa en los 2 rasgos diagnósticos.*` }
    ]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Context & Slide Picker */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-pink-600 uppercase tracking-wider mb-2">
              <Microscope className="w-4 h-4" /> Preparado en Enfoque
            </div>
            <select
              value={activeSlideId}
              onChange={(e) => setActiveSlideId(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
            >
              {SLIDES_DATA.map((slide) => (
                <option key={slide.id} value={slide.id}>
                  {slide.title} ({slide.system})
                </option>
              ))}
            </select>

            {/* Quick Card Summary */}
            <div className="mt-4 p-3 bg-pink-50/60 rounded-xl border border-pink-100 text-xs text-slate-700 space-y-1.5">
              <div className="font-bold text-pink-900">Rasgo diagnósticos para Yani:</div>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>{activeSlide.keyFeatures[0]}</li>
                <li>{activeSlide.keyFeatures[1]}</li>
              </ul>
            </div>

            {/* Socratic Ladder Buttons */}
            <div className="mt-5 space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Escalera Socrática (Pistas de Observación)
              </div>
              <button
                onClick={() => handleRequestHint(1)}
                className="w-full text-left px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>🔍 Nivel 1: Arquitectura a 4x</span>
                <span className="text-[10px] text-slate-500">¿Qué tipo de órgano es?</span>
              </button>
              <button
                onClick={() => handleRequestHint(2)}
                className="w-full text-left px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>🧬 Nivel 2: Células y Tinción</span>
                <span className="text-[10px] text-indigo-500">Los 2 rasgos visibles</span>
              </button>
              <button
                onClick={() => handleRequestHint(3)}
                className="w-full text-left px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>⚠️ Nivel 3: Descarte de Confusión</span>
                <span className="text-[10px] text-amber-600">¿Por qué no es el parecido?</span>
              </button>
              <button
                onClick={() => handleRequestHint(4)}
                className="w-full text-left px-3 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-900 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>🎓 Nivel 4: Fórmula Examen Oral</span>
                <span className="text-[10px] text-pink-600">Respuesta lista para el práctico</span>
              </button>
            </div>

            {/* Quick Socratic Challenge Button */}
            <button
              onClick={handleSocraticQuestion}
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Tomarme una pregunta socrática
            </button>
          </div>
        </div>

        {/* Right Side: Chat Window */}
        <div className="lg:col-span-8 flex flex-col h-[700px] bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-indigo-600 flex items-center justify-center text-white">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  DeepTutor Yani
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded-full font-semibold">
                    En línea
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  Enfoque socrático para Medicina UPE · Pregunta o pide pistas paso a paso
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setMessages([
                  {
                    sender: 'tutor',
                    text: 'Conversación reiniciada. ¿Con qué tema u órgano comenzamos ahora, Yani?'
                  }
                ])
              }
              className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Limpiar
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
            {messages.map((msg, idx) => {
              const isTutor = msg.sender === 'tutor';
              return (
                <div
                  key={idx}
                  className={`flex gap-3 ${isTutor ? 'justify-start' : 'justify-end'}`}
                >
                  {isTutor && (
                    <div className="w-8 h-8 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-700 shrink-0 mt-1">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-xs md:text-sm leading-relaxed whitespace-pre-wrap ${
                      isTutor
                        ? 'bg-white border border-slate-200 text-slate-800 shadow-xs'
                        : 'bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-medium shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
            <div ref={chatBottomRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-2 border-t border-slate-100 bg-white flex gap-1.5 overflow-x-auto scrollbar-none">
            <button
              onClick={() => handleSendMessage(`¿Por qué las células de ${activeSlide.title} se tiñen de rosa o violeta?`)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer"
            >
              🎨 ¿Por qué se tiñe de rosa/violeta?
            </button>
            <button
              onClick={() => handleSendMessage(`¿Con qué órgano se puede confundir ${activeSlide.title} y cómo lo descarto?`)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer"
            >
              ⚠️ ¿Cómo descarto su parecido?
            </button>
            <button
              onClick={() => handleSendMessage(`¿Cómo digo la respuesta de ${activeSlide.title} en el examen práctico?`)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer"
            >
              🎓 Fórmula para examen oral
            </button>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder={`Pregunta lo que sea sobre ${activeSlide.title} o escribe tu duda...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white shadow-xs transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
