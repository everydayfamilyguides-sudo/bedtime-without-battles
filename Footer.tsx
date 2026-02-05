
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-slate-900 text-slate-500 text-sm border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 max-w-2xl">
          <p className="uppercase font-semibold text-xs tracking-widest text-slate-400 mb-2">Disclaimer</p>
          <p className="leading-relaxed font-light">
            This guide is for educational purposes only. It is not intended to be a replacement for medical, psychological, or therapeutic advice. If you have concerns about your child's health or developmental needs, please consult a qualified professional.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8">
          <p>© {new Date().getFullYear()} Bedtime Without Battles. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
