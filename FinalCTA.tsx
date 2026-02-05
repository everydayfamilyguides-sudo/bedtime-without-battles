
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="serif text-3xl md:text-4xl text-slate-900 mb-6">
          Calm starts tonight.
        </h2>
        <p className="text-slate-600 text-lg mb-10 font-light">
          Stop the negotiation. End the power struggles. Provide your child with the structure they need to rest, and reclaim your evenings.
        </p>
        <a 
          href="#pricing"
          className="inline-block text-purple-600 font-medium border-b-2 border-purple-600 pb-1 hover:text-purple-500 hover:border-purple-500 transition-colors"
        >
          Begin your transition to a battle-free bedtime →
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
