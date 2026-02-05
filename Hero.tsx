import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0f172a]"
      style={{ height: '80vh', minHeight: '600px' }}
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bedtime-hero-background.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
        }}
      />

      {/* Dark navy overlay */}
      <div className="absolute inset-0 z-10 bg-[#0f172a]/70" />

      {/* Content layer */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="serif text-white text-4xl md:text-6xl font-bold leading-tight mb-8">
            Bedtime battles are not caused by your child’s behavior.
          </h1>

          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-12">
            Conflict is often the result of unpredictable routines. Learn how a consistent adult structure creates the safety your child needs to end the day calmly.
          </p>

          <div className="flex flex-col items-center">
            <a
              href="#pricing"
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-200 text-lg shadow-xl shadow-purple-900/40 active:scale-95"
            >
              Get instant access
            </a>

            <p className="mt-4 text-sm text-white/60 font-light italic">
              Instant PDF download • £12.99 one-time purchase • No subscription
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

