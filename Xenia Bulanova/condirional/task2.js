// 1. Переписать из if в тернарный оператор '?'

// let age = 14;

// let result = age < 6 ? alert ('Привет малыш') : age < 16 ? alert ('Привет парень') : alert ('Зравствуйте');


// 2. Измените эту программу так, чтобы выводилось окно с
// вопросом «Сколько вам лет?». Пользователь должен ввести
// свой возраст, после чего получить сообщение с
// соответствующим приветствием. 


// let userAge = +prompt ("Сколько вам лет?");

// if ( userAge < 6 ) {
//     alert('Привет малыш');
// } else if ( userAge < 16 ) {
//     alert('Привет парень');
// } else if (+userAge) {
//     alert('Зравствуйте');
// } else {
//     alert('Введите ваш возраст')
// };


// let resutAge = userAge < 6 ? alert ('Привет малыш') : userAge < 16 ? alert ('Привет парень') : alert ('Зравствуйте');


// 3. Измените программу так, чтобы когда пользователь нажимал
// кнопку «отмена» либо крестик, выводилось сообщение «вы не
// ввели свой возраст».


let ageUser = prompt('Сколько вам лет?');

if ( isNaN(+ageUser) ) {
    alert('Нужно ввести число!');
} else if ( ageUser === '' || ageUser === null ) {
     alert('Введите возраст числом');
} else {
    +ageUser < 6 ? alert('Привет, малыш') : +ageUser < 16 ? alert('Привет, парень') : alert('Здравствуйте');
};
