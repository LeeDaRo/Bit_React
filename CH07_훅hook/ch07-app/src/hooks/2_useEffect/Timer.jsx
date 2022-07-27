import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Timer = () => {
  const [now, setNow] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {

    const updateTimer = setInterval(() => {
      setNow(new Date().toLocaleDateString());
      setTime(new Date().toLocaleTimeString());
      console.log('🕐...');
    }, 1000);

    // 마운트 해제시 실행 정지
    // 이게 없으면 계속 돌아감.

    return () => {
      clearInterval(updateTimer);
      console.log('타이머 종료');
    }

  }, []);

  return (
    <div>
      <span>현재 시각 : {now + "" + time}</span>
    </div>
  );
};

export default Timer;