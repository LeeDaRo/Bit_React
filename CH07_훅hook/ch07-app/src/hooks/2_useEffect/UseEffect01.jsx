import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

/**
 * 클래스 컴포넌트 생평주기 함수
 * useEffect(콜백 함수, 의존성 배열[ , , , , , ]);
 * 
 * useEffect(()=>,[]);
 * useEffect(실행할 것 , 대상)
 * @returns 
 */
const styles = {
  container: {
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
  },
  icon: {
    fontSize: 25,
  }
}
// useEffect 테스트
let kiwis = [];


const UseEffect01 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 0) {
      kiwis = [];
    } else {
      kiwis.push('👍');
      document.title = '😊' + count + 'update';
    }
  }, [count]);

  return (
    <div className='container' style={styles.container}>

      <span>{kiwis + '💨' + count}</span>
      <hr></hr>
      <p className='h3'>You clicked {count} times</p>
      <hr />

      <button className='btn btn-info' style={styles.btn}
        onClick={() => {
          setCount(count + 1);
        }}>

        <i className="fa-solid fa-computer-mouse" style={styles.icon}></i>
        <br />
        <span>Click Me</span>
      </button>

    </div>



  );
};

export default UseEffect01;