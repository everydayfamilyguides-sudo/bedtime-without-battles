
import React from 'react';

const WhyItWorks: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="serif text-3xl md:text-4xl mb-10 text-center">
          The science of safety.
        </h2>
        <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-white text-xl font-medium mb-3">Structure equals security</h3>
            <p className="font-light">
              For a young child, the world is vast and often confusing. A predictable routine acts as a container. When that container is consistent, children can relax. When it’s porous or unpredictable, they test boundaries to find where the edges are.
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-white text-xl font-medium mb-3">The adult's responsibility</h3>
            <p className="font-light">
              We often blame the child's 'stubbornness,' but children react to the environment we provide. Inconsistency in our timing or our reactions sends a signal that the boundaries are up for debate. This guide helps you reclaim that consistency without shouting or punishment.
            </p>
          </div>
          
          <p className="text-center italic pt-4">
            "It is not about controlling the child. It is about controlling the routine."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
