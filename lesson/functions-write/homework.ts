
// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

type typesIsInArray = string | number |  boolean;

function isInArray(foreverArray:typesIsInArray[],...something: typesIsInArray[]): boolean {
  if(Array.isArray(foreverArray)) {
    return something.every((item) => foreverArray.includes(item));
  }
  return false;
}

let resultisInArray = isInArray([1,2,'g',true],1,2);
console.log(resultisInArray);


// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function isString(a: string | number): a is string {
  return typeof a === 'string';
}

function summator(...args: (number | string)[]): number {

 let argsNumber:number[] =  args.map((item)=> isString(item) ?  Number(item): item);
    
  let res =  argsNumber.reduce(function(sum, current): number {
    return sum + current;
  }, 0);
  return res;
}

let resultSummator = summator(1,1,1,'5');
console.log(resultSummator);

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.


function getUnique(...arr: typesIsInArray[]): typesIsInArray[] {

  let argArray: Readonly<typesIsInArray[]> = arr.slice(),
      storage: Set<typesIsInArray> = new Set(),
      uniqueArr: typesIsInArray[] = [];

  argArray.forEach((item) => storage.add(item));
  storage.forEach((item)=> uniqueArr.push(item));

  return uniqueArr;          
}

let resultGetUnique = getUnique(1,2,1,3,true,true,true,1,2,3);
console.log(resultGetUnique);