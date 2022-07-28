import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const UseRef02 = () => {
  const [count1, setCount1] = useState(0);
  const count2Ref = useRef(0);

  const increaseCountState = () => {
    setCount1(count1 + 1);
  };

  const increaseCountRef = () => {
    count2Ref.current += 1;
    console.log(count2Ref.current);
  };

  return (
    <div className='container'>
      <h3>State : {count1}</h3>
      <h3>Ref &nbsp;&nbsp; : {count2Ref.current}</h3>
      <button className='btn btn-info' onClick={increaseCountState}>
        State &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className='btn btn-success ms-1' onClick={increaseCountRef}>
        Ref &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </div>
  );
};

export default UseRef02;