let credits = 23580;
const pricePerDroid = 3000;
const userInput = prompt('Скільки дроїдів ви хочете купити?');

if (userInput === null) {
  console.log('Скасовано користувачем!');
} else {
  const totalPrice = userInput * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостатньо коштів на рахунку!');
  } else {
    credits -= totalPrice;
    console.log(
      `Ви купили ${userInput} дроїдів, на рахунку залишилося ${credits} кредитів.`,
    );
  }
}
