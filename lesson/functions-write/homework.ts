
// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

type typesIsInArray = string | number |  boolean;

export function isInArray(foreverArray:typesIsInArray[],...something: typesIsInArray[]): boolean {
  if(Array.isArray(foreverArray)) {
    return something.every((item) => foreverArray.includes(item));
  }
  return false;
}

// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function isString(a: string | number): a is string {
  return typeof a === 'string';
}

export function summator(...args: (number | string)[]): number {

  let argsNumber:number[] =  args.map((item)=> isString(item) ?  Number(item): item);
    
  return argsNumber.reduce((sum:number, current:number): number => {
      isNaN(current) ? current = 0: current;
      return sum + current;
  }, 0);
}

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.


export function getUnique(...arr: typesIsInArray[]): typesIsInArray[] {

  return Array.from(
    arr.reduce((accumulator:Set<typesIsInArray>, el:typesIsInArray): Set<typesIsInArray> =>  {
      return  accumulator.add(el);
    },new Set())
  );        
}