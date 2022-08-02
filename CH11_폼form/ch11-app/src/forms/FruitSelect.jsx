import React from 'react';
import { useState } from 'react';

const FruitSelect = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h5>음식을 선택하세요.</h5>
          <select className='form-select' value={value} onChange={handleChange}>
            <option value=''>Open this select menu</option>
            <option value="melon">🍈</option>
            <option value="pizza">🍕</option>
            <option value="lemon">🍋</option>
            <option value="donkin">🍩</option>
            <option value="watermelon">🍉</option>
            <option value="banana">🍌</option>
          </select>
        </label>
        <button className='btn btn-success ms-1 mb-1' type="submit">submit</button>
      </form>
    </>
  );
};

export default FruitSelect;