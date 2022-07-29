import React, { useState } from 'react';
import { useReducer } from 'react';

const ACTTION_TYPE = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw'
}
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case ACTTION_TYPE.DEPOSIT:
      return state + action.payload;
      break;

    case ACTTION_TYPE.WITHDRAW:
      if ((state - action.payload) >= 0) {
        return state - action.payload;
      } else {
        return state;
      }
      break;

    default:
      return state;
      break;
  }
}

const UseReducer02 = () => {
  const [money, setMoney] = useState(0);
  // const [상태변수, 변경함수] = useReducer(reducer, 0); [state, dispatch 함수];
  const [accuont, dispatch] = useReducer(reducer, 0);

  return (
    <div className="container">
      <h6>useReducer Well Come to your bank</h6>
      <h2>money : ${accuont}</h2>
      <div>
        <input className='form-control mb-2' type={'number'} step='1000' value={money} onChange={(e) => { setMoney(parseInt(e.target.value)) }} />
        <button className='btn btn-success' onClick={() => { dispatch({ type: ACTTION_TYPE.DEPOSIT, payload: money }) }}>예금</button>
        <button className='btn btn-danger' onClick={() => { dispatch({ type: ACTTION_TYPE.WITHDRAW, payload: money }) }}>출금</button>
      </div>
    </div>
  );
};

export default UseReducer02;