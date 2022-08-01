import React from 'react';
import { useState } from 'react';
import Child from './Child';

const Parents = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incresementParentAge = () => {
    setParentAge(parentAge + 1);
  }
  const incresementchildAge = () => {
    setChildAge(parentAge + 1);
  }
  return (
    <div className='container border border'>
      <div className="alert alert-info">
        <h5>
          <i className="fa-solid fa-person-breastfeeding"></i>
          <span>age : {parentAge}</span>
        </h5>
      </div>
      <div className="mb-3">
        <button className='btn btn-secondary mr-2' onClick={incresementParentAge}>부모나이 증가</button>
        <button className='btn btn-secondary mr-2' onClick={incresementchildAge}>자식나이 증가</button>
      </div>
      <Child name={'쿼카'} childAge={childAge} />
    </div>
  );
};

export default Parents;