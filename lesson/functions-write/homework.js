"use strict";
// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.
Object.defineProperty(exports, "__esModule", { value: true });
function isInArray(foreverArray, ...something) {
    if (Array.isArray(foreverArray)) {
        return something.every((item) => foreverArray.includes(item));
    }
    return false;
}
exports.isInArray = isInArray;
let resultisInArray = isInArray([1, 2, 'g', true], 1, 2);
console.log(resultisInArray);
// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
function isString(a) {
    return typeof a === 'string';
}
function summator(...args) {
    let argsNumber = args.map((item) => isString(item) ? Number(item) : item);
    let res = argsNumber.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    return res;
}
let resultSummator = summator(1, 1, 1, '5');
console.log(resultSummator);
// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.
function getUnique(...arr) {
    let argArray = arr.slice(), storage = new Set(), uniqueArr = [];
    argArray.forEach((item) => storage.add(item));
    storage.forEach((item) => uniqueArr.push(item));
    return uniqueArr;
}
let resultGetUnique = getUnique(1, 2, 1, 3, true, true, true, 1, 2, 3);
console.log(resultGetUnique);
