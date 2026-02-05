
import React from 'react';

const WhoItIsFor: React.FC = () => {
  const identifiers = [
    "Parents of children aged 2–6 who resist the transition to bed.",
    "Those who feel they have to 'give in' to avoid emotional meltdowns.",
    "Adults who find themselves repeating instructions without results.",
    "Families stuck in a cycle of negotiations and delay tactics.",
    "Parents who feel their own frustration peaking every single evening."
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="serif text-3xl md:text-4xl text-slate-900 mb-10 text-center">
          Is this your evening?
        </h2>
        <ul className="space-y-6">
          {identifiers.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-600 mr-4 mt-1 text-xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="text-slate-700 text-lg font-light">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoItIsFor;
