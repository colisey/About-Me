let numbers = []

// Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
for (let i = -10; i <= 10; i++) {
  numbers.push(i)
}
console.log('numbers ==> ', numbers);

// Используя циклы, выполните следующие операции над массивом numbers:
//     - Удалите все отрицательные числа из массива
for (let i = 0; i < numbers.length; i++) {
    console.log('numbers.length ==> ', numbers.length);
    if (numbers[i] < 0) {
      console.log('numbers[i] < 0 ==> ', numbers[i]);
      numbers.shift(numbers[i])
      console.log('numbers.shift(numbers[i]) ==> ', numbers);
  }
}

console.log(numbers)// [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Почему такой странный результат?