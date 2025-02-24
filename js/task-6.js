let total = 0;
let input;
do {
  input = prompt('Введіть число:');

  if (input === null) {
    break;
  }

  let number = Number(input);

  if (isNaN(number)) {
    alert('Було написано не число, спробуйте ще');
  } else {
    total += number;
  }
} while (true);

alert(`Загальна сума чисел дорівнює ${total}`);
