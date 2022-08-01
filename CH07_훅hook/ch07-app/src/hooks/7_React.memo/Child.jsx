import React from 'react';
/**
 * [React.memo 최적화]
 * props check를 통해서 자신이 받은 props에
 * 변화가 있는지 없는지 확인을 하여
 * 변화가 있다면 랜더링, 없다면 기존 결과를 재사용한다.
 * @returns 
 */
const Child = (name, childAge) => {
  console.log('자식 컴포넌트 랜더링...');
  return (
    <div className='alter alert-success'>
      <h5>
        <i className="fa-solid fa-children"></i>
        <div className="d-flex flex-column">
          <span>name :  {name}</span>
          <span>age : {childAge}</span>
        </div>
      </h5>
    </div>
  );
};

export default Child;