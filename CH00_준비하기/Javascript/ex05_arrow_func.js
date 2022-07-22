/**
 * arrow_function 
 * 중요 map 과 filter
 */

// map()과 () =>{}

const matrials1 = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium',

];
// 리턴은 배열이 리턴이 된다.
let newArr = matrials1.map((e, idx) => {

  console.log(e, idx);
  return e.length * 2;

});

console.log(newArr);

// 회문
let palindromes = [
  '스위스',
  '팥콩밭',
  '별똥별',
  '음악',
  '인도인',
  '필리핀',
  '아시아',
  '여보안경안보여',
  '역삼역',
  '주현아',
  '츄르먹자'
];

// palindromes의 값들을 필터링해서 값을 도출하여 contents에 리턴해준다.
let contents = palindromes.filter((item) => {
  if (item === item.split('').reverse().join('')) {
    return item;
  }
});

console.log(contents);
contents = palindromes.map((item) => {
  if (item === item.split('').reverse('').join('')) {
    return item;
  }
});

console.log(contents);