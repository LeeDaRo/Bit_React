import React from 'react';
import styled from 'styled-components';
/** 
 * styled-components
 * css 문법을 그대로 사용
 * 결과물을 스타일링된 컴포넌트 형태로 만들어주는 오픈 소스 라이브러리
 * 
 */

const Wrapper = styled.div`
padding : 1em;
background : crimson;
border-radius: 50%;`
const MyButton = styled.button`
  background: black;
  color : wheat;
`

const MainPage = () => {
  return (
    <Wrapper>
      <div>
        <p>123123</p>
        <MyButton>1231231</MyButton>
      </div>
    </Wrapper>
  );
};

export default MainPage;