import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffect02 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('NickName');

  const updateInput = (e) => {
    setName(e.target.value);
  }
  const countOnClick = () => {
    setCount(count + 1);
  }

  // 랜더링마다 매번 사이트 이펙트 실행
  // useEffect(() => {

  //   console.log('매번');
  // });

  // 최초 랜더링
  // useEffect(() => {

  //   console.log('최초!');
  // }, []);

  // count마다 랜더링
  useEffect(() => {
    console.log('count / ☆*: .｡. o(≧▽≦)o .｡.:*☆');
  }, [count]);

  // name마다 랜더링
  useEffect(() => {
    console.log('name / ╰(*°▽°*)╯');
  }, [name]);

  return (
    <div className='container'>
      <p>COUNT : {count}</p>
      <div className="btn btn-success" onClick={countOnClick}>Update</div>
      <div>
        <input type='text' onChange={updateInput} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default UseEffect02;