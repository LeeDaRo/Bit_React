import React from 'react';
import { useState } from 'react';

const NameForm = () => {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    console.log('name : ' + value);
    setName(value);
    e.preventDefault();
  }

  const handleChange = (e) => {

    if (e.target.value.split('').length > 8) {
      alert('Danger!');
      setValue('');
      return;
    } else {
      setValue(e.target.value);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <h4>Name : {name}</h4>
          <input className='form-control' type="text" placeholder='input your name' onChange={handleChange} name='name' id='name' value={value} />
        </label>
        <button className='btn btn-success ms-1 mb-1' type="submit">submit</button>
      </form>
    </>
  );
};

export default NameForm;