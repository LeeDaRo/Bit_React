import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Box from './box';

const UseCallback03 = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'yellowgreen',
      width: `${size}px`,
      height: `${size}px`
    }
  }, [size]);

  return (
    <div className='container' style={{ background: isDark ? 'black' : 'white' }}>
      <button className='btn btn-info mb-2' onClick={() => { setIsDark(!isDark) }}>Changn Theme</button>
      <input type="number" className="form-control" value={size} onChange={(e) => setSize(e.target.value)} />

      <br />

      <Box createBoxStyle={createBoxStyle} />

    </div>
  );
};

export default UseCallback03;