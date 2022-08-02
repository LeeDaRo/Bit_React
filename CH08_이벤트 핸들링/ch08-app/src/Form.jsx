import React from 'react';
import { useState } from 'react';

const Form = () => {

  const [password, setPassword] = useState('');

  const HendleSubmit = (e) => {
    /** page refresh
     * 폼안에서 입력값을 전송할 때 페이지가 다시 로딩이 된다.
     */
    console.log('1 :' + password);
    e.preventDefault();
    setPassword('');
    console.log('2 :' + password);
  };

  return (
    <div>
      <form onSubmit={HendleSubmit}>
        <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default Form;