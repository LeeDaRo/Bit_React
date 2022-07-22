/*[const]
  constant(상수)를 뜻
    '항상 같은 수'
      변수(變數)인데 상수(常數)
      변치 않는 값을 갖는 변수
      - const로 선언한 변수는 값의 재할당 불가(x)
      - 반드시 선언과 동시에 값이 할당되어야함
*/

const PI = 3.141592;

console.log(`반지름의 10인 원의 넓이는 ${PI * 10 * 10} 입니다.`);

var sn;
sn = 'K-2022-13';
console.log("sn : ", sn);

const SN = 'K-2022-13';

/**
 * [let]
 * 변수(變數)
 * 다른 값이 재할당 가능 
*/

let score;
score = 100;
score = 200;

/**
 * 호이스팅(Hoisting)
 * 먼저 사용을 하고 후에 선언을 밑에서 해도
 * 마치 선언을 한 것 처럼 만들어준다.
*/
console.log(odd);

var odd;

hello();

function hello() {
  console.log("츄르먹쟈~ ");
}

// let은 호이스팅이 발생하지 않는다.

// console.log(level);

let level = 10;

/**
 * 변수 범위(Scope) : 프로그램 내에서 변수의 접근 수준
 * var : 함수형 변수 (function-scope)
 * let : 영역형 변수 (block-scope)
*/
