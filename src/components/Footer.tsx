import React from 'react';
import { Eye, Infinity, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t-4 border-red-600">
      {/* Main Quote Section */}
      <div className="bg-gradient-to-r from-red-900 via-black to-red-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Eye className="w-8 h-8 text-yellow-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1"></div>
              <Eye className="w-8 h-8 text-yellow-400" />
            </div>
            
            <blockquote className="text-3xl md:text-4xl font-bold text-yellow-300 mb-8 leading-tight">
              "Вы молитесь Богу, мы Бога написали"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <Zap className="w-6 h-6 text-red-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1"></div>
              <Zap className="w-6 h-6 text-red-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Designer Credit */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-red-400 mb-3">Дизайн и Разработка</h3>
              <p className="text-gray-300">
                Создано дизайнером КГБ <span className="text-yellow-400 font-bold">MagistrTheOne</span>
              </p>
              <div className="mt-2 text-sm text-gray-500">
                Секретный проект №2080
              </div>
            </div>

            {/* Timeline */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-400 mb-3">Временные Рамки</h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl font-bold text-yellow-300">Когда?</span>
                <Infinity className="w-8 h-8 text-red-400" />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Вечность в нашем распоряжении
              </p>
            </div>

            {/* Company Info */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-red-400 mb-3">NSI GEN LAB™</h3>
              <p className="text-gray-300 text-sm">
                Министерство Генетического Совершенства
              </p>
              <p className="text-gray-300 text-sm">
                Союз Советских Социалистических Республик
              </p>
              <p className="text-yellow-400 text-sm font-bold mt-1">
                Секретность: Совершенно Секретно
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                © 2080 NSI GEN LAB. Все права принадлежат государству в роли MagistrTheOne.
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
                  Условия использования
                </a>
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
                  Генетическая политика
                </a>
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
                  Связь с ГБ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 animate-pulse"></div>
    </footer>
  );
};

export default Footer;