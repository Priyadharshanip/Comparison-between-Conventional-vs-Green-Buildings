import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlertIcon, ZapIcon, TreesIcon } from 'lucide-react';

const GravityComparison = ({ isGreen, reduction = 0.3 }) => {
  // Map reduction to visual intensity (0.25 -> LOW, 0.55 -> HIGH)
  const intensity = (reduction - 0.2) * 2; // Roughly 0.1 to 0.7
  const floatHeight = isGreen ? -40 - (intensity * 60) : 80;
  const glowBlur = isGreen ? 20 + (intensity * 40) : 10;

  return (
    <div className="relative h-96 w-full flex items-center justify-around overflow-hidden glass rounded-2xl border border-slate-800 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
      
      {/* Conventional State (High Gravity) */}
      <motion.div 
        animate={{ 
          y: isGreen ? 50 : 0,
          opacity: isGreen ? 0.3 : 1,
          scale: isGreen ? 0.9 : 1
        }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-col items-center gap-4 z-10"
      >
        <div className="p-8 rounded-3xl bg-slate-900 neon-border-amber relative">
          <ShieldAlertIcon className="w-16 h-16 text-brand-amber animate-pulse" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-amber text-slate-950 text-[10px] font-bold rounded-full uppercase tracking-widest leading-none">
            High Impact
          </div>
        </div>
        <div className="text-center">
          <p className="text-brand-amber font-bold neon-text-amber text-lg">Conventional</p>
          <p className="text-xs text-slate-500 uppercase tracking-tighter italic">Heavy Carbon / Sink State</p>
        </div>
      </motion.div>

      {/* The Transformation Bridge */}
      <div className="h-1 w-24 bg-gradient-to-r from-brand-amber to-brand-green opacity-20 hidden md:block"></div>

      {/* Green State (Low Gravity / Floating) */}
      <motion.div 
        animate={{ 
          y: floatHeight,
          opacity: isGreen ? 1 : 0.2,
          scale: isGreen ? 1.1 + (intensity * 0.1) : 0.8
        }}
        transition={{ 
          y: { 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 3 - (intensity * 1.5), // Faster float for higher efficiency
            ease: "easeInOut" 
          },
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 }
        }}
        className="flex flex-col items-center gap-4 z-10"
      >
        <div className="p-10 rounded-full bg-slate-900/80 backdrop-blur-xl transition-all duration-1000 relative group"
             style={{ 
               boxShadow: isGreen ? `0 0 ${glowBlur}px rgba(0, 242, 255, 0.5)` : 'none',
               border: isGreen ? '1px solid var(--color-brand-cyan)' : '1px solid rgba(255,255,255,0.1)'
             }}>
          <div className="absolute inset-0 rounded-full bg-brand-cyan/10 blur-2xl group-hover:bg-brand-cyan/20 transition-colors"></div>
          <TreesIcon className="w-20 h-20 text-brand-green drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]" />
          <motion.div 
            animate={{ scale: [1, 1.2 + (intensity * 0.2), 1] }}
            transition={{ repeat: Infinity, duration: 2 - (intensity * 1) }}
            className="absolute -top-2 -right-2 p-2 glass rounded-full"
          >
            <ZapIcon className="w-4 h-4 text-brand-cyan shadow" />
          </motion.div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-cyan text-slate-950 text-[10px] font-bold rounded-full uppercase tracking-widest leading-none shadow-lg">
            Low Impact
          </div>
        </div>
        <div className="text-center">
          <p className="text-brand-green font-bold neon-text-cyan text-xl">Green Building</p>
          <p className="text-xs text-brand-cyan uppercase tracking-tighter italic font-medium">Lifting the Environmental Burden</p>
        </div>
      </motion.div>
    </div>
  );
};

export default GravityComparison;
