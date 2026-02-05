
import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhoItIsFor from './components/WhoItIsFor';
import HowItHelps from './components/HowItHelps';
import WhyItWorks from './components/WhyItWorks';
import SocialProof from './components/SocialProof';
import WhatItIs from './components/WhatItIs';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Hero />
      <Problem />
      <WhoItIsFor />
      <HowItHelps />
      <WhyItWorks />
      <SocialProof />
      <WhatItIs />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
