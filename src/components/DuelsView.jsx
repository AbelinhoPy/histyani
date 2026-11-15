import React, { useState } from 'react';
import { DUELS_DATA } from '../data/duelsData';
import { GitCompare, Sparkles, CheckCircle, ShieldAlert, BookOpen } from 'lucide-react';

export default function DuelsView() {
  const [activeDuelId, setActiveDuelId] = useState(DUELS_DATA[0].id);

  const activeDuel = DUELS_DATA.find((d) => d.id === activeDuelId) || DUELS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Title & Explainer */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs mb-6">
        <div className="flex items-center gap-2 text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">
          <GitCompare className="w-4 h-4" /> Duelos de Confusión Histológica
        </div>
        <h2 className="text-xl font-black text-slate-900">
          ¿Cuál es cuál? Los parecidos más tramposos del examen
        </h2>
        <p className="text-xs text-slate-500 mt-1 max-w-3xl leading-relaxed">
          En los exámenes prácticos de medicina, los docentes suelen poner preparados que a simple vista parecen gemelos. 
          Aquí tienes la clave maestra y la regla de oro para diferenciarlos en 5 segundos sin dudar.
        </p>

        {/* Duel Selectors */}
        <div className="flex gap-2 overflow-x-auto mt-4 pb-1 scrollbar-none">
          {DUELS_DATA.map((duel) => (
            <button
              key={duel.id}
              onClick={() => setActiveDuelId(duel.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeDuelId === duel.id
                  ? 'bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {duel.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Duel Container */}
      <div className="space-y-6">
        {/* Golden Rule Banner */}
        <div className="p-5 bg-gradient-to-r from-amber-500 via-rose-500 to-pink-600 rounded-2xl text-white shadow-md flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5 text-amber-200" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-200">
              Regla de Oro Diagnóstica para Yani
            </div>
            <p className="text-sm md:text-base font-semibold mt-1 leading-snug">
              {activeDuel.goldenRule}
            </p>
          </div>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className={`grid grid-cols-1 ${activeDuel.organC ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
          {/* Organ A */}
          <div className="bg-white rounded-2xl border-2 border-indigo-200 p-5 shadow-xs space-y-4">
            <div className="border-b border-indigo-100 pb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                {activeDuel.organA.system}
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-1">
                {activeDuel.organA.name}
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              {Object.entries(activeDuel.organA).map(([key, val]) => {
                if (key === 'name' || key === 'system') return null;
                const isKeyTell = key === 'keyTell';
                return (
                  <div
                    key={key}
                    className={`p-3 rounded-xl ${
                      isKeyTell ? 'bg-indigo-50/80 border border-indigo-200' : 'bg-slate-50 border border-slate-100'
                    }`}
                  >
                    <div className="font-bold uppercase tracking-wider text-[10px] text-slate-500 mb-0.5">
                      {key === 'keyTell' ? '⭐ Rasgo Patognomónico' : key}
                    </div>
                    <div className={`leading-relaxed ${isKeyTell ? 'text-indigo-950 font-semibold' : 'text-slate-800'}`}>
                      {val}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Organ B */}
          <div className="bg-white rounded-2xl border-2 border-pink-200 p-5 shadow-xs space-y-4">
            <div className="border-b border-pink-100 pb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full">
                {activeDuel.organB.system}
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-1">
                {activeDuel.organB.name}
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              {Object.entries(activeDuel.organB).map(([key, val]) => {
                if (key === 'name' || key === 'system') return null;
                const isKeyTell = key === 'keyTell';
                return (
                  <div
                    key={key}
                    className={`p-3 rounded-xl ${
                      isKeyTell ? 'bg-pink-50/80 border border-pink-200' : 'bg-slate-50 border border-slate-100'
                    }`}
                  >
                    <div className="font-bold uppercase tracking-wider text-[10px] text-slate-500 mb-0.5">
                      {key === 'keyTell' ? '⭐ Rasgo Patognomónico' : key}
                    </div>
                    <div className={`leading-relaxed ${isKeyTell ? 'text-pink-950 font-semibold' : 'text-slate-800'}`}>
                      {val}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Optional Organ C (for intestinal trio) */}
          {activeDuel.organC && (
            <div className="bg-white rounded-2xl border-2 border-emerald-200 p-5 shadow-xs space-y-4">
              <div className="border-b border-emerald-100 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {activeDuel.organC.system}
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">
                  {activeDuel.organC.name}
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                {Object.entries(activeDuel.organC).map(([key, val]) => {
                  if (key === 'name' || key === 'system') return null;
                  const isKeyTell = key === 'keyTell';
                  return (
                    <div
                      key={key}
                      className={`p-3 rounded-xl ${
                        isKeyTell ? 'bg-emerald-50/80 border border-emerald-200' : 'bg-slate-50 border border-slate-100'
                      }`}
                    >
                      <div className="font-bold uppercase tracking-wider text-[10px] text-slate-500 mb-0.5">
                        {key === 'keyTell' ? '⭐ Rasgo Patognomónico' : key}
                      </div>
                      <div className={`leading-relaxed ${isKeyTell ? 'text-emerald-950 font-semibold' : 'text-slate-800'}`}>
                        {val}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
