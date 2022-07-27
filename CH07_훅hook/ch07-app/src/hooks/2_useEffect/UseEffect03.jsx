import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Timer from './Timer';

const UseEffect03 = () => {

  const [start, setStart] = useState(false);
  const [btn, setBtn] = useState('btn btn-info');
  const [msg, setMsg] = useState('Toggle Timer Start!');

  useEffect(() => { }, []);

  return (
    <div className='containers'>
      <div className={btn} onClick={() => {
        setStart(!start);
        setBtn(!start ? 'btn btn-danger' : 'btn btn-info');
        setMsg(!start ? 'Toggle Timer Stop!' : 'Toggle Timer Start!')
      }}>
        <i className='fa-solid fa-stopwatch'></i>
        <span className='ml-2' />{msg}
      </div>
      {
        start && <Timer />
      }
    </div>
  );
};

export default UseEffect03;