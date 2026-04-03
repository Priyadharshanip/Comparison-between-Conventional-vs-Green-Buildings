import React from 'react';
import { TrendingDownIcon, TreeDeciduousIcon, WalletIcon, IndianRupeeIcon } from 'lucide-react';

const MetricCard = ({ title, value, unit, icon: Icon, colorClass, highlightClass }) => (
  <div className={`p-6 rounded-2xl glass border border-slate-800 ${colorClass}`}>
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 glass rounded-xl ${highlightClass}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div className="space-y-1">
      <small className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">{title}</small>
      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-mono font-bold">{value}</h3>
        <span className="text-xs text-slate-400 font-medium italic">{unit}</span>
      </div>
    </div>
  </div>
);

const ImpactDashboard = ({ units, rate, reduction, isGreen }) => {
  // Potential Savings Calculations
  const energySaved = units * reduction;
  const moneySavedMonthly = energySaved * rate;
  const co2Reduction = energySaved * 0.85; // 0.85 kg CO2 per kWh

  // Active Metrics Calculation (What the user CURRENTLY sees)
  const activeUnits = isGreen ? (units * (1 - reduction)) : units;
  const activeBill = activeUnits * rate;
  const activeCO2 = activeUnits * 0.85;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Active Monthly Bill - Drops when Green */}
      <MetricCard 
        title="Active Monthly Bill"
        value={`₹${activeBill.toLocaleString()}`}
        unit="INR / Month"
        icon={WalletIcon}
        colorClass={`transition-all duration-700 ${isGreen ? 'neon-border-green bg-brand-green/10' : 'hover:neon-border-cyan'}`}
        highlightClass={isGreen ? 'text-brand-green' : 'text-slate-400'}
      />

      {/* Active Carbon Footprint - Drops when Green */}
      <MetricCard 
        title="Active Carbon Footprint"
        value={activeCO2.toFixed(1)}
        unit="kg CO₂ / Month"
        icon={TrendingDownIcon}
        colorClass={`transition-all duration-700 ${isGreen ? 'neon-border-green bg-brand-green/10' : 'hover:neon-border-cyan'}`}
        highlightClass={isGreen ? 'text-brand-green' : 'text-slate-400'}
      />

      {/* Monthly Savings - Static Potential */}
      <MetricCard 
        title="Est. Monthly Savings"
        value={`₹${moneySavedMonthly.toLocaleString()}`}
        unit="Potential INR"
        icon={IndianRupeeIcon}
        colorClass="hover:neon-border-cyan opacity-80"
        highlightClass="text-brand-cyan"
      />

      {/* CO2 Potential Reduction - Static Potential */}
      <MetricCard 
        title="Est. CO₂ Reduction"
        value={co2Reduction.toFixed(1)}
        unit="Potential kg"
        icon={TreeDeciduousIcon}
        colorClass="hover:neon-border-green opacity-80"
        highlightClass="text-brand-green"
      />
    </div>
  );
};


export default ImpactDashboard;
