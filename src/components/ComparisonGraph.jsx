import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  Legend 
} from 'recharts';

const ComparisonGraph = ({ units, rate }) => {
  const reduction = 0.3;
  const greenUnits = units * (1 - reduction);
  
  const costConv = units * rate;
  const costGreen = greenUnits * rate;

  const data = [
    {
      name: 'Energy (kWh)',
      Conv: units,
      Green: greenUnits,
    },
    {
      name: 'Monthly Cost (₹)',
      Conv: costConv,
      Green: costGreen,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass p-4 rounded-xl border border-slate-700 shadow-2xl">
          <p className="text-slate-400 font-bold mb-2 uppercase text-[10px] tracking-widest">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-3 py-1">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-white font-mono text-sm">
                {entry.name}: {entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[400px] w-full glass p-8 rounded-2xl border border-slate-800">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-xl font-bold neon-text-cyan uppercase tracking-widest text-[12px]">System Efficiency Delta</h3>
        <div className="flex gap-4 text-[10px] uppercase font-bold tracking-widest">
          <div className="flex items-center gap-2 text-brand-amber">
            <span className="w-2 h-2 rounded-full bg-brand-amber"></span> Standard Impact
          </div>
          <div className="flex items-center gap-2 text-brand-green">
            <span className="w-2 h-2 rounded-full bg-brand-green"></span> Reduced Impact
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b', radius: 8 }} />
          <Bar dataKey="Conv" name="Conventional" radius={[6, 6, 0, 0]} barSize={40}>
            {data.map((entry, index) => (
              <Cell key={`cell-conv-${index}`} fill="#ffaa00" />
            ))}
          </Bar>
          <Bar dataKey="Green" name="Green Simulation" radius={[6, 6, 0, 0]} barSize={40}>
            {data.map((entry, index) => (
              <Cell key={`cell-green-${index}`} fill="#00ff88" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonGraph;
