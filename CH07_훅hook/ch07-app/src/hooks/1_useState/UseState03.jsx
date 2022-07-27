import React, { useState } from 'react';
const styles = {
  p1: { color: 'red', margin: '5px' },
  p2: { color: 'black', margin: '5px', fontSize: '15px ' },
  icon: { fontSize: '25px' }
};

const UseState03 = () => {
  const [time, setTime] = useState(1);

  const ClickHandler = () => {
    if (time >= 0 && time < 23) {
      setTime(time + 1);
    } else {
      setTime(0);
    }
  }

  return (
    <div className='container'>
      <p style={styles.p}>You clicked show time : {time}times</p>
      <div className='btn btn-info fa-solid fa-computer-mouse' style={styles.icon} onClick={ClickHandler}><p style={styles.p2}>Click Me!</p></div>
    </div >
  );
};

export default UseState03;