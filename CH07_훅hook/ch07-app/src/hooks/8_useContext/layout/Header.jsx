import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import img1 from "../images/churrrr.gif";
import { ThemeContext } from '../context/ThemeContext';
import '../layout/layout.css';

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    color: '#111',
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  h4: {
    marginLeft: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  ul: {
    width: 400,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
};


const Header = () => {
  const { isDark } = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.header, backgroundColor: '#333', color: '#eee' }
  }

  return (
    <>
      <header style={isDark ? styles.header : setDark()}>
        <img src={img1} alt="주현아츄르먹쟈" style={styles.avatar} />
        <h4 style={styles.h4}>Bitcamp<i className="fa-solid fa-house-user"></i></h4>
        <nav>

          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/JavaScript'}>JavaScript</NavLink>
          <NavLink to={'React'}>React</NavLink>
          <NavLink to={'Java'}>Java</NavLink>
          <NavLink to={'Springboot'}>SpringBoot</NavLink>

        </nav>
      </header>
    </>
  );
};

export default Header;