import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Box = ({ createBoxStyle }) => {

  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle(createBoxStyle);
    console.log("뽐뿌")
  }, [createBoxStyle]);
  return (
    <div style={style}>
      <p>자꾸 커져요...</p>
    </div>
  );
};

export default Box;