// 1. Пользователь вводит 3 числа, вывести на
// экран наибольшее из этих 3х чисел
let number1 = +prompt('enter number1');
let number2 = +prompt('enter number2');
let number3 = +prompt('enter number3');
if (number1 > number2 && number1 > number3) {
    console.log('number1');
} else if (number2 > number1 && number2 > number3) {
    console.log('number2');
} else if (number3 > number1 && number3 > number2) {
    console.log('number3');
} else if (number1 === number2 && number2 === number3 && number1 === number3) {
    console.log('all numbers are equal');
} else {
    console.log('you entered incorrect data, please enter enter three numbers');
}


// 2. Пользователь вводит номер дня недели,
// вывести на экран название этого дня.
let numberWeek = +prompt('enter week number');
if (numberWeek === 1) {
   console.log('Monday');
} else if (numberWeek === 2) {
    console.log('Tuesday');
} else if (numberWeek === 3) {
    console.log('Wednesday');
} else if (numberWeek === 4) {
    console.log('Thursday');
} else if (numberWeek === 5) {
    console.log('Friday');
}else if (numberWeek === 6) {
    console.log('Saturday');
} else if (numberWeek === 7) {
    console.log('Sunday');
} else {
    console.log('you entered incorrect data, please enter the number 1-7 again');
}

// если нужно вывести не в консоль, а на экран пользователю, то console.log заменяем на alert
