// src/utils/initSberPay.ts
export const initSberPay = (price: number) => {
  console.log(`🟢 SberPay инициирован на сумму ${price}₽`);
  
  // Тут — шуточная заглушка
  alert(`Перевод ${price}₽ успешно отправлен... батюшке 😇`);

  // Когда подключишь настоящую SDK:
  // window.SberPay?.init({
  //   mode: 'auto',
  //   amount: price,
  //   onSuccess: () => console.log('✅ Успешная оплата'),
  //   onFailure: () => console.error('❌ Оплата не прошла')
  // });
};
