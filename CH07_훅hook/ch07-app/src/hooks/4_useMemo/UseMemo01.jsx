import React from 'react';

/**
 * Memoization(컴퓨터 최적화를 위해서 사용하는 개념)
 * 동일한 처리를 하는 함수를 반복적으로 호출해야 할 때
 * 맨 처음 값을 계산할 때 해당 값을 메모리에 저장해서
 * 필요할 때 마다 중복 없이 메모리에서 꺼내어 재사용하는 기법
 * 
 * useMemo();
 * useMemo(콜백 함수, 의존성 배열);
 * (연산량 많은 함수의 결과값을 저장해 두었다가 재 호출시 이전 결과값을 바로 반환)
 * 
 */

const UseMemo01 = () => {


  return (
    <div className='container'>

    </div>
  );
};

export default UseMemo01;