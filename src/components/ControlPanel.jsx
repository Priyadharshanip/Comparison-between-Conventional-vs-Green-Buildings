import React from 'react';
import { ZapIcon, IndianRupeeIcon } from 'lucide-react';

const ControlPanel = ({ units, setUnits, rate, setRate }) => {
  return (
    <div className="glass p-8 rounded-2xl neon-border-cyan space-y-6">
      <h2 className="text-2xl font-bold neon-text-cyan flex items-center gap-3">
        <span className="p-2 glass rounded-lg"><ZapIcon className="w-6 h-6 text-brand-cyan" /></span>
        Energy Control Unit
      </h2>
      
      <div className="space-y-4">
        <label className="block text-sm font-medium text-slate-400">
          Monthly Electricity Usage (Units/kWh)
        </label>
        <div className="relative">
          <input
            type="range"
            min="100"
            max="5000"
            step="50"
            value={units}
            onChange={(e) => setUnits(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
          />
          <div className="flex justify-between mt-2 text-xs text-slate-500 font-mono">
            <span>100 U</span>
            <span>2500 U</span>
            <span>5000 U</span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-3xl font-bold font-mono text-brand-cyan">
              {units.toLocaleString()} <span className="text-sm font-normal text-slate-500 italic">kWh</span>
            </span>
          </div>
        </div>

        <div className="pt-4 space-y-4">
          <label className="block text-sm font-medium text-slate-400">
            Cost per Unit (₹)
          </label>
          <div className="flex items-center gap-4">
            <IndianRupeeIcon className="w-5 h-5 text-brand-cyan opacity-70" />
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="bg-slate-900 border border-slate-700 text-brand-cyan text-xl rounded-lg focus:ring-brand-cyan focus:border-brand-cyan block w-full p-2.5 font-mono outline-none"
            />
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-800">
        <p className="text-xs text-slate-500 leading-relaxed italic">
        </p>
      </div>
    </div>
  );
};

export default ControlPanel;
