import React, { useState } from 'react';

const UseState02 = () => {

  const [input, setInput] = useState('');
  const [names, setNames] = useState([]);

  const intputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const buttonOnClickHandler = () => {
    setNames((preState) => {
      return [...preState, input + '\n,'];
    });
  };

  return (
    <div className='container'>
      <div style={{ display: 'flex' }}>
        <input className='form-control ' placeholder='이름을 입력해주세요' type='text' style={{ width: '500px' }} onChange={intputChangeHandler} />
        <button className='btn btn-danger m-1' onClick={buttonOnClickHandler}>전송</button>
      </div>
      <textarea className='form-contorl mt-1' rows={10}
        defaultValue={names.toString().split(',').join('')} />
    </div>
  );
};

export default UseState02;