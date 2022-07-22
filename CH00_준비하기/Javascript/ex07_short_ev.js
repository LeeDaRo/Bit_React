/**
 * 단축 평가
 *  : 논리연산에서 굳이 불필요한 연산을 생략하는 방법.
 *  && 연산에서는 false가 나올 확률이 제일 큰 친구를 앞에두고
 *  || 연산에서는 true가 나올 확률이 제일 큰 친구를 앞에둔다.
 *  프로그램이 실행되면서 불필요한 실행을 줄이면 성능이 좋아진다.
 */

console.log(false && true);