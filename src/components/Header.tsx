import React from 'react';
import { ChefHat } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#FFFFFF] shadow-md py-8 px-6 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ChefHat className="w-12 h-12 text-[#D4AF37]" />
            <div>
              <h1 className="text-4xl font-bold text-[#333333] mb-2">
                Entdecke deine Zukunft in der Gastronomie!
              </h1>
              <p className="text-xl text-[#555555]">
                Wähle einen Beruf und erfahre mehr
              </p>
            </div>
          </div>
          <img 
            src="https://hgf.ch/typo3conf/ext/hgf_template/Resources/Public/Images/logo.png"
            alt="HGF Logo"
            className="h-16 w-auto"
          />
        </div>
      </div>
    </header>
  );
}