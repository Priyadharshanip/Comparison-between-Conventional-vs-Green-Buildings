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

const ImpactDashboard = ({ units, rate }) => {
  const reduction = 0.3; // 30% reduction for green building
  const energySaved = units * reduction;
  const moneySavedMonthly = energySaved * rate;
  const moneySavedYearly = moneySavedMonthly * 12;
  const co2Reduction = energySaved * 0.85; // 0.85 kg CO2 per kWh

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard 
        title="Monthly Energy Saved"
        value={energySaved.toFixed(0)}
        unit="kWh / units"
        icon={TrendingDownIcon}
        colorClass="hover:neon-border-cyan transition-all"
        highlightClass="text-brand-cyan"
      />
      <MetricCard 
        title="Monthly Savings"
        value={`₹${moneySavedMonthly.toLocaleString()}`}
        unit="INR / month"
        icon={WalletIcon}
        colorClass="hover:neon-border-green transition-all"
        highlightClass="text-brand-green"
      />
      <MetricCard 
        title="Annual Savings"
        value={`₹${moneySavedYearly.toLocaleString()}`}
        unit="INR / year"
        icon={IndianRupeeIcon}
        colorClass="hover:neon-border-cyan transition-all shadow-lg"
        highlightClass="text-brand-cyan"
      />
      <MetricCard 
        title="CO₂ Emissions Reduced"
        value={co2Reduction.toFixed(1)}
        unit="kg / month"
        icon={TreeDeciduousIcon}
        colorClass="hover:neon-border-green transition-all"
        highlightClass="text-brand-green"
      />
    </div>
  );
};


export default ImpactDashboard;
