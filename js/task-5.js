const userInput = prompt('Введіть країну для доставки:');

if (userInput === null) {
  alert('Скасовано користувачем!');
} else {
  const country = userInput.trim().toLowerCase();
  const formattedCountry = country.charAt(0).toUpperCase() + country.slice(1);
  let price;
  switch (formattedCountry) {
    case 'Китай':
      price = 100;
      break;
    case 'Чилі':
      price = 250;
      break;
    case 'Австралія':
      price = 170;
      break;
    case 'Індія':
      price = 80;
      break;
    case 'Ямайка':
      price = 120;
      break;
    default:
      alert('У вашій країні доставка недоступна');
      price = null;
  }

  if (price !== null) {
    alert(`Доставка в ${formattedCountry} буде коштувати ${price} кредитів`);
  }
}
