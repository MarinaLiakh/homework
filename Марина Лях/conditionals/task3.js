//1.  Переписать из if в тернарный оператор «?»
// 2. Измените эту программу так, чтобы выводилось окно с 
// вопросом «Сколько вам лет?». Пользователь должен ввести 
// свой возраст, после чего получить сообщение с
// соответствующим приветствием. 
// 3. Измените программу так, чтобы когда пользователь нажимал 
// кнопку «отмена» либо крестик, выводилось сообщение «вы не 
// ввели свой возраст».
 let age = prompt('how old are you?');

 if (age === null || age === ''){
 console.log('вы не ввели свой возраст');
 } else {
         console.log( +age < 6 ? 'Привет, малыш' :
          +age < 16 ? 'Привет, парень' : 
              'здравствуйте');
 }
// let age = +prompt('how old are you?');
// if (age <6) {
//     console.log('Привет, малыш');
//     alert(`Привет, малыш`);
//  } else if (age < 16) {
//    console.log('Привет, парень');
//    alert(`Привет, парень`);
// } else {
//    console.log('здравствуйте');
//    alert(`здравствуйте`);
// }


