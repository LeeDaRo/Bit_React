import React from 'react';

const Clock = () => {
  let now = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  return (
    <>
      <span>{now + time}</span>
    </>
  );
};

export default Clock;