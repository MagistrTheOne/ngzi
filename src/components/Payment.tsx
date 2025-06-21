import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dna, Zap, AlertTriangle, Hammer, UserCheck } from 'lucide-react';
import { ParamsContext } from '../context/ParamsContext';
import { initSberPay } from '../utils/initSberPay';

const Payment: React.FC = () => {
  const { paymentParams } = useContext(ParamsContext);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'advanced' | 'premium'>('basic');
  const [confirming, setConfirming] = useState(false);
  const [paid, setPaid] = useState(false);
  const [showUpgrades, setShowUpgrades] = useState(false);
  const [showIntent, setShowIntent] = useState(true);
  const navigate = useNavigate();

  const plans = {
    basic: 1,
    advanced: 1.5,
    premium: 2
  };

  const upgrades = [
    { label: '+400 к инженерным скиллам', cost: 30000 },
    { label: '+300 к разработке нейросетей', cost: 25000 },
    { label: 'NSI-мозг 2.0 (Божественное обновление)', cost: 100000 }
  ];

  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);

  const toggleUpgrade = (label: string) => {
    setSelectedUpgrades(prev =>
      prev.includes(label) ? prev.filter(u => u !== label) : [...prev, label]
    );
  };

  const basePrice = paymentParams?.price || 50000;
  const upgradesCost = selectedUpgrades.reduce(
    (acc, label) => acc + (upgrades.find(u => u.label === label)?.cost || 0),
    0
  );
  const finalPrice = Math.round(basePrice * plans[selectedPlan] + upgradesCost);

  const handleConfirm = () => {
    setConfirming(true);
    setTimeout(() => {
      setConfirming(false);
      setPaid(true);
      initSberPay(finalPrice);
    }, 2500);
  };

  useEffect(() => {
    if (paid) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [paid, navigate]);

  if (paid) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-yellow-300 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">✅ Оплачено!</h1>
        <p className="text-xl mb-2">Ваш ребенок отправлен в очередь на воплощение.</p>
        <p className="text-sm text-gray-400">Если что — свяжется Зина.</p>
      </div>
    );
  }

  if (showIntent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-yellow-300 text-center px-4 space-y-4">
        <UserCheck className="w-12 h-12 text-yellow-400 animate-pulse" />
        <h1 className="text-3xl font-bold">Вы уверены, что хотите ребёнка?</h1>
        <p className="text-gray-300">Может, сначала посоветуетесь с Зиной? Или... с батюшкой?</p>
        <button
          onClick={() => setShowIntent(false)}
          className="mt-4 px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-bold rounded-lg shadow-md transition-all"
        >
          Да, я в здравом уме. Продолжить
        </button>
      </div>
    );
  }

  return (
    <section className="bg-black text-white py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-300 text-center mb-10 flex items-center justify-center space-x-4 drop-shadow-md">
          <Dna className="text-red-500" />
          <span>Оформление заказа</span>
          <Dna className="text-red-500" />
        </h1>

        {paymentParams && (
          <div className="bg-gray-900 border border-red-600 rounded-lg p-6 mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Вы выбрали:</h2>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
              {Object.entries(paymentParams).map(([key, val]) =>
                key !== 'price' ? (
                  <li key={key}>
                    <strong className="text-yellow-400">{key}:</strong>{' '}
                    {Array.isArray(val) ? val.join(', ') || 'Нет' : String(val)}
                  </li>
                ) : null
              )}
              <li><strong className="text-yellow-400">Базовая цена:</strong> {basePrice.toLocaleString()} ₽</li>
            </ul>
            <div className="text-right mt-4">
              <a href="/" className="text-sm underline text-yellow-400 hover:text-yellow-300">Кастомизировать заново</a>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {(['basic', 'advanced', 'premium'] as const).map(plan => (
            <div
              key={plan}
              className={`bg-gray-900 border rounded-lg p-6 shadow-xl cursor-pointer transition-all duration-300 ${
                selectedPlan === plan
                  ? 'border-yellow-400 scale-105'
                  : 'border-red-600 hover:border-yellow-300'
              }`}
              onClick={() => setSelectedPlan(plan)}
            >
              <h2 className="text-2xl font-bold text-yellow-300 mb-4 text-center uppercase">
                {plan === 'basic' && 'Обычное'}
                {plan === 'advanced' && 'Продвинутое'}
                {plan === 'premium' && 'Божественное'}
              </h2>
              <p className="text-center text-yellow-100 mb-2">Множитель цены: {plans[plan]}x</p>
              <p className="text-center text-xl text-yellow-400 font-bold">{Math.round(basePrice * plans[plan]).toLocaleString()} ₽</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <button
            onClick={() => setShowUpgrades(prev => !prev)}
            className="text-sm mb-4 text-yellow-300 underline hover:text-yellow-100"
          >
            {showUpgrades ? 'Скрыть апгрейды' : 'Показать улучшения NSI'}
          </button>

          {showUpgrades && (
            <div className="grid md:grid-cols-2 gap-4">
              {upgrades.map(({ label, cost }) => (
                <label
                  key={label}
                  className="bg-gray-900 border border-red-600 rounded-lg p-4 flex items-center space-x-3 cursor-pointer hover:border-yellow-300"
                >
                  <input
                    type="checkbox"
                    checked={selectedUpgrades.includes(label)}
                    onChange={() => toggleUpgrade(label)}
                  />
                  <Hammer className="text-yellow-300" />
                  <span>{label} — <strong className="text-yellow-400">+{cost.toLocaleString()}₽</strong></span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-200 mb-2">Выбранный вариант: <span className="text-yellow-400 font-bold uppercase">{selectedPlan}</span></p>
          <p className="text-4xl font-bold text-yellow-400">Итог: {finalPrice.toLocaleString()} ₽</p>
        </div>

        <div className="text-center">
          <button
            onClick={handleConfirm}
            disabled={confirming}
            className={`inline-flex items-center space-x-3 px-6 py-3 text-lg font-bold rounded-lg transition-all duration-300 shadow-lg ${
              confirming
                ? 'bg-yellow-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-600 to-red-700 text-yellow-300 hover:from-red-500 hover:to-red-600 hover:scale-105'
            }`}
          >
            {confirming ? (
              <>
                <AlertTriangle className="animate-bounce w-5 h-5" />
                <span>Подождите, Зина советуется с батюшкой...</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                <span>Оплатить через Сбер</span>
                <Zap className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
