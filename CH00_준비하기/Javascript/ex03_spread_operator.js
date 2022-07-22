/**
 * 전개구문(spread operator)
 * '.....' 펼침 연산자
 */

const arr1 = [3, 4];
const arr2 = [7, 8, 9];
const arr3 = [1, 2, ...arr1, 5, 6, ...arr2, 10, 11];

console.log(arr3);

/**
 * 객체 리터럴에서의 전개
 */

const obj1 = { name: '주현아', age: '27' };
const obj2 = { job: '츄르먹쟈~', gendder: 'male' };
const cloneOBJ1 = { ...obj1, ...obj2 };
console.log(cloneOBJ1);

const obj3 = { name: '주현아', age: '27' };
const obj4 = { age: '이리와서', job: '츄르먹쟈~' };
const cloneOBJ2 = { ...obj3, ...obj4 };
console.log(cloneOBJ2);


// 함수 호출에서의 전개
const sum = (x, y, z) => {
  return x + y + z;
};
const numbers = [1, 2, 3];
console.log(sum(...numbers));