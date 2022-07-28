import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const hardCalculate = () => {
  let total = 0;

  for (let i = 0; i < 9999999; i++) {
    total += i;

  }
  console.log("복잡한 계산");

  return total;

}

const eazyCalculate = (number) => {
  console.log("심플한 계산");
  return number;
}

const UseMemo02 = () => {

  const [hardNumber, setHardNumber] = useState(0);

  const [eazyNumber, setEazyNumber] = useState(0);

  // const hard = hardCalculate(hardNumber);
  const hard = useMemo(() => {
    console.log(2);
    return hardCalculate() + hardNumber;
  }, [hardNumber]);

  const eazy = eazyCalculate(hard + eazyNumber);

  return (
    <div>
      <div className='container'>
        <div style={{ border: '1px solid green', padding: '20px' }}>
          <h5 style={{ color: '#999' }}>Hard working</h5>
          <input
            className='form-control' type='number'
            value={hardNumber}
            onChange={(e) => setHardNumber(parseInt(e.target.value))}
          />
          <hr />
          <span> ∫∛ ∝^ = {hard}</span>
        </div>
      </div>

      <div className='container'>
        <div style={{ border: '1px solid green', padding: '20px' }}>
          <h5 style={{ color: '#999' }}>Hard working</h5>
          <input
            className='form-control' type='number'
            value={eazyNumber}
            onChange={(e) => setEazyNumber(parseInt(e.target.value))}
          />
          <hr />
          <span> 1 + input = {eazy}</span>
        </div>
      </div>
    </div>
  );
};

export default UseMemo02;