
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-slate-50">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100">
        <div className="bg-night p-8 text-center text-white">
          <h2 className="serif text-3xl mb-2">Bedtime Without Battles</h2>
          <p className="text-slate-400 font-light">The Complete Digital Guide</p>
        </div>
        
        <div className="p-10 text-center">
          <div className="mb-8">
            <span className="text-5xl font-bold text-slate-900">£12.99</span>
            <p className="text-slate-500 mt-2 font-light">One-time purchase</p>
          </div>
          
          <div className="space-y-4 mb-10 text-slate-600 font-light">
            <p>✓ Instant PDF download</p>
            <p>✓ Read on any device</p>
            <p>✓ Practical worksheets included</p>
            <p>✓ No hidden costs or upsells</p>
          </div>
          
          <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg active:scale-95">
            Download the Guide Now
          </button>
          
          <p className="mt-6 text-xs text-slate-400 leading-relaxed">
            Secure checkout. You will receive an email with your download link immediately after purchase.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
