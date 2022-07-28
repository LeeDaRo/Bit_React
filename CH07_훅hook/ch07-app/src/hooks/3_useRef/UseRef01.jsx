import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
/**
 * useRef()
 * 참조(Reference)를 사용하기 위한 훅
 * 반환 값 : Reference Object(레퍼런스 객체)
 * const ref = useRef(value) == {current : value}
 * ref.current 
 * 
 * ref 객체는 컴포넌트의 전 생애주기 전체에 걸쳐서 유지.
 * 컴포넌트가 재 랜더링 되더라도 초기화되지 않는다.
 * 
 * 어디에 사용하는 가
 * 
 * 1. DOM 요소에 접근할 때 ( 예시 : document.querySelect())
 * 2. 저장 공간으로 사용
 * 
 */
const UseRef01 = () => {

  const inputRef = useRef(); // {current:}
  const imgRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const buttonOnClick = () => {
    alert(`환 영 합 니 다 ${inputRef.current.value}`);
    imgRef.current.style.visibility = 'visible'
  };


  return (
    <div className='container'>
      <img ref={imgRef} src="logo192.png" style={{ width: '100px', marginBottom: '100px', visibility: 'hidden' }} alt="" />
      <div className="d-flex justify-content-center">
        <input ref={inputRef} className='form-control w-auto' type="text" placeholder='username' />
        <button className="btn btn-danger ms-2" onClick={buttonOnClick}>LogIn</button>
      </div>

    </div>
  );
};

export default UseRef01;