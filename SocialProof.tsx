
import React from 'react';

const SocialProof: React.FC = () => {
  const reviews = [
    {
      text: "We realized we were negotiating every single step. Once we applied the structure in the guide, the 'one more story' requests stopped within a week. It isn't magic, just much clearer for everyone.",
      author: "Sarah, mother of a 4-year-old"
    },
    {
      text: "The evening used to take 90 minutes of stress. Now it takes 30 minutes of calm. The difference was my own consistency, not my son's personality. This guide made that very clear.",
      author: "David, father of a 3-year-old"
    },
    {
      text: "I was looking for a 'hack' but what I found was a better way to lead. The meltdowns haven't disappeared entirely, but we know exactly how to handle them now without giving in.",
      author: "Emma, mother of a 5-year-old"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="serif text-3xl md:text-4xl text-slate-900 mb-16 text-center">
          Honest feedback from parents.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-slate-700 italic mb-6 font-light leading-relaxed">
                "{review.text}"
              </p>
              <p className="text-slate-900 font-medium text-sm">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
