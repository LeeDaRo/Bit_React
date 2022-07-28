import React, { useState } from 'react';

const UseReducer02 = () => {
  const [money, setMoney] = useState(999999999999999);

  return (
    <div className="container">
      <h6>useReducer Well Come to your bank</h6>
      <h2>money : {money}</h2>
      <div>
        <input className='form-control mb-2' type={'number'} />
        <button className='btn btn-success'>예금</button>
        <button className='btn btn-danger'>출금</button>
      </div>
    </div>
  );
};

export default UseReducer02;