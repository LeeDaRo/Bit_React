import React from 'react';
import chu from './우주.jpg';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Book = ({ title, pages }) => {

  return (
    <div css={cssWrapper}>
      <img src={chu} alt="" />
      <div>
        <h2>이 책의 이름은 {title} 입니다</h2>
        <h2>이 책은 총 {pages}p 입니다.</h2>
      </div>
    </div>
  );
};

const cssWrapper = css`
  color: red;
  display : flex;
`
export default Book;

