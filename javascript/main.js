// ФУНКЦИИ В JAVASCRIPT УРОК 10
//Функции - это небольшие подпрограммы, что вмещают код

// function info() {
//     console.log("Привет");
//     console.log("!");
// }

// info();

function info(word) {
    console.log(word + "!");
}

info("Hello");




// ВСПЛЫВАЮЩИЕ ОКНА ALERT, PROMPT, CONFIRM УРОК 9

// alert("Какая хорошая погода!");
// confirm("Вы сейчас дома?");

// var data = confirm("Вы сейчас дома?");
// console.log(data);

// var data = confirm("Вы сейчас дома?");
// if(data) {
//     alert("Вы молодец!");
// }


// prompt("Cколько вам лет?", 20);

// var data = prompt("Cколько вам лет?");
// console.log(data);

// var person = null;
// if(confirm("Вы точно уверены?")) {
//     person = prompt("Введите ваше имя");
//     alert("Привет " + person);
// } else {
//     alert("Вы нажали кнопка отмена");
// }




// Циклы в JavaScript. Операторы цикловт  УРОК 8

// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }

// Значение переменной не может быть строкой или булеан
//    переменная;условие;как изменяется(смотри вниз в скобках)

// for(var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for(var i = 100; i > 5; i /= 2) {
//     console.log(i);
// }

// !! while изначально проверяет некое условие

// var j = 0;
// while(j < 10) {
//     console.log(j);
//     j++;
// }

// var j = 1000;
// while(j > 100) {
//     console.log(j);
//     j -= 100;
// }

// !!! РАЗНИЦА В ЦИКЛЕ for и ЦИКЛЕ while, то где мы записываем условия. 

// БЕСКОНЕЧНЫЙ ПРИМЕР ЦИКЛА, КОТОРЫЙ ЛУЧШЕ НЕ ДЕЛАТЬ, МОЖЕТ ЗАВИСНУТЬ СТРАНИЦА

// var isHasCar = true;
// while(isHasCar) {
// }

// ЦИКЛ do while ВСЕГДА делает 1 итерацию цикла даже если условие неверно

// var x = 100;
// do {
//     console.log(x);
// } while(x < 50);


// var x = 0;
// do {
//     console.log(x);
//     x ++;
// } while(x < 10);

// !!! Для перебора масивов удобен цикл for; while - проверяем условие и
//  do while когда надо выполнить код и потом проверить условие

// for(var i = 10; i <=20; i +=2) {
//     console.log(i);
// }

// for(var i = 10; i <=20; i +=2) {
//     if(i > 15)
//     break; //позволяет выйти из цикла
//     console.log(i);
// }

// for(var i = 10; i <=20; i ++) {
//     if(i % 2 == 0)
//     continue; // оператор continue позволяет пропустить одну определенную итерацию
//     console.log(i);
// }

// МАССИВ ЧЕРЕЗ ЦИКЛ

// var arr = [5, 7, 3, 8, 9, "stroka"];

// for(var i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
//     console.log("Элемент " + (i + 1) + ": " + arr[i]);
// }


// МАССИВЫ ДАННЫХ. ОДНОМЕРНЫЕ И МНОГОМЕРНЫЕ МАССИВЫ УРОК 7

// ОДНОМЕРНІЙ МАССИВ
// var arr = [5, true, 'stroka', 0, -100, 5.7];
// arr[3] = "word";
// console.log(arr[3]);
// console.log(arr.length);

// // Многомерній массив

// var matrix = [
//     [5, true], ['stroka', 0], [-100, 5.7]
// ];

// matrix [1] [0] = 90;
// console.log(matrix);



// УСЛОВНЫЕ ОПЕРАТОРЫ УРОК 6

// if(5 == 5) { тело условия - это весь тот код что записан между фигурными скобками
//     console.log("Ok");
// }
// можно сравнить: ==, >, <, <=, >=< !=(значит не равно)\
//  оператор "или" - ||
//  оператор "и" - &&
// isHasHouse - означает проверку на true 
// !isHasHouse - означает проверку значения на false

// var stroka = "word";

// // switch это проверка на определенное значение, нельзя поставить больше или меньше
// switch(stroka) {
//     case "4":
//         console.log("Переменная со значением 4");
//         break;
//     case "45":
//         console.log("Переменная со значением 45");
//         break;
//     case "word23":
//         console.log("Переменная со значением ,word,");
//         break;   
//     default:
//         console.log("Default");
// }





// var number = 15;
// var isHasHouse = true;
// if(number == 15 && isHasHouse == true) {
//     console.log("Ok");
// } else if (number < 10) {
//     console.log("Ok!");
// } else if (number == 7) {
//     console.log("7!");
// } else if (number > 15) {
//     console.log(">= 15");
// } else {
//     console.log("Else");
// }



// МАТЕМАТИЧЕСКИЕ ДЕЙСТВИЯ УРОК 5
//var num_1 = 5.4;
//var num_2 = 15;

// var res = num_1 - num_2; можно созд отдельную переменную, 
// а можно просто переменные для консоли взять в скобки.
//console.log("Результат: " + (num_1 + num_2));


// var num_3 = 5;
// num_3 -=4;
// console.log("Результат: " + num_3);

// // Как посчитать строки как числа?
// var str_1 = Number("12");
// var str_2 = Number("2");
// console.log("Резльтат: " + (str_1 + str_2));

// console.log("Math: " + Math.PI);
// console.log("Math: " + Math.min(3, 4, 1, 6, -5, -33, 0));
// console.log("Math: " + Math.max(3, 4, 1, 6, -5, -33, 0));

// !!!!! ОБЪЕКТ console МЕТОД log
//        ОБЪЕКТ Math


       //  ВЫВОД ИНФОРМАЦИИ. РАБОТА С КОНСОЛЬЮ УРОК 3
// document.write("Javascript говорит привет!"); выводит на страницу
       // console.log("Javascript говорит привет!"); выводит в консоль
       // console.info("Javascript говорит привет!"); выводит в консоль
       // console.error("Javascript говорит привет"); выводит в консоль
       // console.warn("Javascript говорит привет"); выводит в консоль


       // ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ УРОК 4
// var num;
// num = 5;
// тип данных - число, "строка", 'символ', boolean true или false (булевое значение)

// var num = 5;
// const num = 5;
// num = 7;
// console.log("Переменная: " + num + ".");

// var number;
// number = true;

// var num_1 = 5;
// var num_2 = "5";
