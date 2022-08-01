import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const styles = {
  footer: {
    backgroundColor: '#eee',
    height: 100,
    display: 'flex',
    // flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111',

  },

  contain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  }
};

const Footer = () => {

  const { isDark, setIsDark } = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.footer, backgroundColor: '#333', color: '#eee' }
  }

  const toggle = () => {
    setIsDark(!isDark);
  }

  return (
    <>
      <footer style={isDark ? styles.footer : setDark()}>
        <div style={styles.contain}>
          Currntly v.5.2.1 code liensed BIT221, docs CC BY 3.0.
          <button className='btn btn-danger ms-5 ' onClick={toggle}>{isDark ? "Dark" : "Light"}</button>
        </div>
      </footer>
    </>
  );
};

export default Footer;