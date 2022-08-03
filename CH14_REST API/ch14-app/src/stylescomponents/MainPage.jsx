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
  border-radius: 50%;`;

const MyButton = styled.button`
  background: black;
  color : wheat;
  border-radius: 5px;
  border: 1px solid white;
`;

const SmartButton = styled.button`
  color: ${props => props.dark ? "white" : "dark"};
  background-color: ${props => props.dark ? "black" : "white"};
  border: 1px solid crimson;
  padding: 3px;
`

const MainPage = () => {
  return (
    <Wrapper>
      <div>
        <p>123123</p>
        <MyButton>1231231</MyButton>
        <SmartButton dark={true}> 12</SmartButton>
      </div>
    </Wrapper>
  );
};

export default MainPage;