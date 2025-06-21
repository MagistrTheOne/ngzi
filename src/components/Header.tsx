import React from 'react';
import { Star, Atom, Crown, Sparkles, ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l5.9 18.1h19l-15.4 11.2 5.9 18.1L20 36.2l-15.4 11.2 5.9-18.1L-5.4 18.1h19L20 0z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      {/* Decorative Top Border */}
      <div className="h-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"></div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Atom className="w-8 h-8 text-red-900" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center animate-bounce">
                <Star className="w-3 h-3 text-yellow-300" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-wider">
                <span className="text-yellow-300 drop-shadow">NSI</span>
                <span className="text-white mx-2 drop-shadow">GEN LAB</span>
                <span className="text-xs align-top text-yellow-300">™</span>
              </h1>
              <div className="text-sm text-yellow-200 tracking-widest italic">2080 — beyond evolution</div>
            </div>
          </div>
        </div>

        {/* Main Tagline */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-4 bg-black bg-opacity-30 px-8 py-4 rounded-lg border-2 border-yellow-400 shadow-lg">
            <Crown className="w-6 h-6 text-yellow-400 animate-ping" />
            <h2 className="text-2xl font-bold text-yellow-300 tracking-wide uppercase">
              РПЦ не может — NSI поможет!
            </h2>
            <Crown className="w-6 h-6 text-yellow-400 animate-ping" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <p className="text-lg text-yellow-100 font-light italic flex justify-center items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
            Генетическая инженерия будущего • Создаем совершенство
            <ShieldCheck className="w-5 h-5 text-yellow-300 animate-spin" />
          </p>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </header>
  );
};

export default Header;