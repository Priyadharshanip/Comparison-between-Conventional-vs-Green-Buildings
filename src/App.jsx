import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlobeIcon, ArrowUpRightIcon, TerminalIcon } from 'lucide-react';
import ControlPanel from './components/ControlPanel';
import GravityComparison from './components/GravityComparison';
import ImpactDashboard from './components/ImpactDashboard';
import ComparisonGraph from './components/ComparisonGraph';

function App() {
  const [units, setUnits] = useState(1200);
  const [rate, setRate] = useState(8);
  const [isGreen, setIsGreen] = useState(false);
  const [buildingMode, setBuildingMode] = useState('residential');

  const reductionFactors = {
    residential: 0.25,
    commercial: 0.40,
    industrial: 0.55
  };

  const currentReduction = reductionFactors[buildingMode];

  // Auto-calculate the transformation state based on interaction (optional)
  // For now, we use a manual toggle to demonstrate the "anti-gravity" feel
  
  return (
    <div className="min-h-screen bg-space-dark text-white selection:bg-brand-cyan selection:text-space-dark overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:px-8">
        
        {/* Header */}
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-xs font-bold tracking-widest uppercase"
            >
              <GlobeIcon className="w-4 h-4 animate-spin-slow" />
              Planetary Efficiency Simulator
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
               ECO-SMART <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green neon-text-cyan">
                BUILDING DYNAMICS
               </span>
            </h1>
            <div className="max-w-2xl space-y-4">
              <p className="text-slate-400 text-lg font-medium italic">
                “Transforming Environmental Impact through Smart Efficiency Simulation”
              </p>
              <div className="p-4 glass rounded-xl border border-slate-800 text-sm text-slate-300 leading-relaxed">
                <strong className="text-brand-cyan uppercase tracking-wider block mb-1">What this simulator does:</strong>
                This tool compares a standard building (High Impact) with a certified Green Building (Low Impact). 
                It simulates a <strong>{(currentReduction * 100).toFixed(0)}% reduction</strong> in energy consumption to show how simple data inputs like usage and cost translate into massive environmental and financial gains.
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-4">
            <button 
              onClick={() => setIsGreen(!isGreen)}
              className={`px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-500 flex items-center gap-3 ${
                isGreen 
                ? 'bg-brand-green text-slate-950 shadow-[0_0_30px_rgba(0,255,136,0.5)]' 
                : 'bg-slate-800 text-brand-cyan border border-brand-cyan/30 hover:border-brand-cyan shadow-xl'
              }`}
            >
              {isGreen ? 'Efficiency Optimized' : 'Transform to Green'}
              <ArrowUpRightIcon className={`w-5 h-5 transition-transform duration-500 ${isGreen ? 'rotate-[-45deg]' : ''}`} />
            </button>
            <p className="text-[10px] text-slate-500 font-mono tracking-tighter uppercase mr-4">
              {isGreen ? `Simulation Active: ${(currentReduction * 100).toFixed(0)}% Impact Reduction` : 'System Idle: High Carbon Density'}
            </p>
          </div>
        </header>

        {/* Main Content Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: UI Controls */}
          <div className="lg:col-span-4 space-y-8 h-full">
            <ControlPanel 
              units={units} 
              setUnits={setUnits} 
              rate={rate} 
              setRate={setRate} 
              buildingMode={buildingMode} 
              setBuildingMode={setBuildingMode} 
            />
            
            <div className="glass p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Operational Insights</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Carbon Intensity</span>
                  <span className={`font-mono ${isGreen ? 'text-brand-green' : 'text-brand-amber'}`}>
                    {isGreen ? 'Low / Stable' : 'Critical / Heavy'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Carbon Weight</span>
                  <span className="font-mono text-brand-cyan">
                    {isGreen ? `Reduced (${(100 - (currentReduction * 100)).toFixed(0)}%)` : 'Standard (100%)'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visualization & Metrics */}
          <div className="lg:col-span-8 space-y-8">
            <GravityComparison isGreen={isGreen} />
            <ImpactDashboard units={units} rate={rate} reduction={currentReduction} isGreen={isGreen} />
            <ComparisonGraph units={units} rate={rate} reduction={currentReduction} />
          </div>

        </main>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-xs">
          <div className="flex items-center gap-6">
            <span className="font-bold tracking-widest uppercase">© 2026 ECO-SMART CORP</span>
            <a href="#" className="hover:text-brand-cyan transition-colors">Privacy Protocal</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">System Manifest</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></div>
              <span className="font-mono">Earth Core Status: Syncing</span>
            </div>
            <TerminalIcon className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
