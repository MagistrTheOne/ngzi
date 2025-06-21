import React, { useState } from 'react';
import { Dna, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Generator: React.FC = () => {
  const [params, setParams] = useState({
    gender: 'Мужской',
    race: 'славянская',
    height: 180,
    physique: 'Стандартное',
    intelligence: 150,
    specialization: 'Научная',
    specialFeatures: [] as string[]
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [redirectReady, setRedirectReady] = useState(false);

  const sliderConfigs = [
    {
      id: 'height',
      label: 'Рост',
      min: 140,
      max: 220,
      step: 1,
      unit: 'см',
      description: 'Оптимальная высота для космических миссий'
    },
    {
      id: 'intelligence',
      label: 'IQ Уровень',
      min: 100,
      max: 300,
      step: 5,
      unit: 'IQ',
      description: 'Интеллектуальная мощность будущего'
    }
  ];

  const updateParam = (key: keyof typeof params, value: any) => {
    setParams(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleFeature = (feature: string) => {
    setParams(prev => ({
      ...prev,
      specialFeatures: prev.specialFeatures.includes(feature)
        ? prev.specialFeatures.filter(f => f !== feature)
        : [...prev.specialFeatures, feature]
    }));
  };

  const calculatePrice = () => {
    let basePrice = 50000;
    if (params.height > 200) basePrice += 20000;
    if (params.height < 160) basePrice += 10000;
    if (params.intelligence > 200) basePrice += 100000;
    if (params.intelligence > 250) basePrice += 200000;
    basePrice += params.specialFeatures.length * 50000;
    if (params.race === 'космическая') basePrice += 300000;
    return basePrice;
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setRedirectReady(true);
    }, 2000);
  };

  return (
    <section className="bg-black text-white py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-300 text-center mb-10 flex items-center justify-center space-x-4 drop-shadow-md">
          <Dna className="text-red-500" />
          <span>Генератор Потомства NSI</span>
          <Dna className="text-red-500" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-900 border border-red-600 rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Выбор пола</h2>
            {['Мужской', 'Женский', 'Универсальный'].map(g => (
              <label key={g} className="block mb-2">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={params.gender === g}
                  onChange={() => updateParam('gender', g)}
                  className="mr-2"
                />
                {g}
              </label>
            ))}
          </div>

          <div className="bg-gray-900 border border-red-600 rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Выбор расы</h2>
            <select
              value={params.race}
              onChange={e => updateParam('race', e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-red-500 text-white"
            >
              <option value="славянская">Славянская</option>
              <option value="азиатская">Азиатская</option>
              <option value="европейская">Европейская</option>
              <option value="африканская">Африканская</option>
              <option value="смешанная">Смешанная</option>
              <option value="космическая">Космическая адаптация</option>
            </select>
          </div>

          {sliderConfigs.map(config => (
            <div key={config.id} className="bg-gray-900 border border-red-600 rounded-lg p-6 shadow-xl">
              <h2 className="text-xl font-bold text-yellow-300 mb-2">{config.label}</h2>
              <input
                type="range"
                min={config.min}
                max={config.max}
                step={config.step}
                value={params[config.id as keyof typeof params] as number}
                onChange={(e) => updateParam(config.id as keyof typeof params, Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>{config.min} {config.unit}</span>
                <span className="text-yellow-300 font-bold">{params[config.id as keyof typeof params]} {config.unit}</span>
                <span>{config.max} {config.unit}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1 italic">{config.description}</p>
            </div>
          ))}

          <div className="bg-gray-900 border border-red-600 rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Телосложение</h2>
            <select
              value={params.physique}
              onChange={e => updateParam('physique', e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-red-500 text-white"
            >
              <option value="Стандартное">Стандартное</option>
              <option value="Атлетическое">Атлетическое</option>
              <option value="Интеллектуальное">Интеллектуальное</option>
              <option value="Космическое">Космическое</option>
            </select>
          </div>

          <div className="bg-gray-900 border border-red-600 rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Специализация</h2>
            <select
              value={params.specialization}
              onChange={e => updateParam('specialization', e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-red-500 text-white"
            >
              <option value="Научная">Научная</option>
              <option value="Инженерная">Инженерная</option>
              <option value="Художественная">Художественная</option>
              <option value="Лидерская">Лидерская</option>
              <option value="Космическая">Космическая</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-900 border border-red-600 rounded-lg p-6 shadow-xl mb-10">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Дополнительные модификации</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              'Улучшенное зрение',
              'Повышенная выносливость',
              'Устойчивость к радиации',
              'Космическая адаптация',
              'Телепатические способности',
              'Долголетие'
            ].map(feature => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  checked={params.specialFeatures.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                  className="mr-2"
                />
                {feature}
              </label>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-200 mb-2">Предварительная стоимость:</p>
          <p className="text-4xl font-bold text-yellow-400">{calculatePrice().toLocaleString()} ₽</p>
          <p className="text-sm text-gray-500 mt-1">* Вера входит в стоимость. НДС отсутствует по милости Господа.</p>
        </div>

        <div className="text-center">
          {redirectReady ? (
            <Link
              to="/payment"
              className="inline-flex items-center space-x-3 px-6 py-3 text-lg font-bold rounded-lg transition-all duration-300 shadow-lg bg-gradient-to-r from-red-600 to-red-700 text-yellow-300 hover:from-red-500 hover:to-red-600 hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              <span>Перейти к оплате</span>
              <Zap className="w-5 h-5" />
            </Link>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`inline-flex items-center space-x-3 px-6 py-3 text-lg font-bold rounded-lg transition-all duration-300 shadow-lg ${
                isGenerating
                  ? 'bg-yellow-600 text-red-900 cursor-not-allowed'
                  : 'bg-gradient-to-r from-red-600 to-red-700 text-yellow-300 hover:from-red-500 hover:to-red-600 hover:scale-105'
              }`}
            >
              {isGenerating ? (
                <>
                  <Cpu className="animate-spin w-5 h-5" />
                  <span>Генерация...</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  <span>Запросить ребенка</span>
                  <Zap className="w-5 h-5" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Generator;
