import React from 'react';
import { useState } from 'react';

const UseState01 = () => {
  const [time, setTime] = useState(1);
  const handleClick = () => {
    if (time > 0 && time < 24) {
      setTime(time + 1);
    } else if (time >= 24) {
      setTime(1);
    }

  }
  return (
    <>
      <span>현재 시각  : {time}시</span>
      <button className='btn btn-danger' onClick={handleClick}>Update</button>
    </>
  );
};

export default UseState01;