
import React from 'react';

const HowItHelps: React.FC = () => {
  const benefits = [
    {
      title: "Predictable Transitions",
      description: "Children thrive when they know exactly what comes next. Learn how to remove the guesswork that causes anxiety."
    },
    {
      title: "Confident Decision-Making",
      description: "Stop negotiating and start leading. Feel secure in your role as the adult, which in turn helps your child feel safe."
    },
    {
      title: "Reduced Power Struggles",
      description: "Move away from confrontation. By establishing a clear flow, you eliminate the need for nightly battles."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="serif text-3xl md:text-4xl text-slate-900 mb-12 text-center">
          The shift from fighting to flowing.
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
