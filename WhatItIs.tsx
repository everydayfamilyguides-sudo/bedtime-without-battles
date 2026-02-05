
import React from 'react';

const WhatItIs: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="serif text-3xl md:text-4xl text-slate-900 mb-12">
          Clarity on the approach.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h3 className="text-lg font-semibold text-purple-700 mb-4 uppercase tracking-wider">What this is</h3>
            <ul className="space-y-4 text-slate-600 font-light">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>A practical framework</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>A focus on adult consistency</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>Realistic for busy families</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>Direct and actionable</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-400 mb-4 uppercase tracking-wider">What this is not</h3>
            <ul className="space-y-4 text-slate-500 font-light">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></span>"Cry-it-out" sleep training</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></span>A miracle overnight fix</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></span>Rigid or clinical therapy</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></span>A medical manual</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItIs;
