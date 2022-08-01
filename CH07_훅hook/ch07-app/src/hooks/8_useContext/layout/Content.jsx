import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Java from '../pages/Java';
import JavaScript from '../pages/JavaScript';
import Main from '../pages/Main';
import Springboot from '../pages/Springboot';
import Reacts from '../pages/Reacts';

const styles = {
  h5: {
    marginTop: 100
  },
  main: {
    height: 700,
    color: 'gray',
    backroundColor: 'white'
  }
}

const Content = () => {

  const { isDark } = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.mian, height: 700, backgroundColor: 'gray', color: '#eee' }
  }

  return (
    <main style={isDark ? styles.main : setDark()}>
      <div className='container text-center'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Java' element={<Java />} />
          <Route path='/JavaScript' element={<JavaScript />} />
          <Route path='/Springboot' element={<Springboot />} />
          <Route path='/React' element={<Reacts />} />
        </Routes>
      </div>
    </main>

  );
};

export default Content;