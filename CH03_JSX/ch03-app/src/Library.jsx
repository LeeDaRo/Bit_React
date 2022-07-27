import React from 'react';
import Book from './Book';


const Library = () => {
  return (
    <div>
      <Book title={"쿼카"} pages={100} />
      <Book title={"주현아"} pages={"츄르먹자"} />
      <Book title={"꿔까"} pages={100} />
    </div>
  );
};

export default Library;