import React from 'react';
import Card from './Card';

// JSON
const articles = [
  {
    img: 'baby.jpg',
    title: 'Baby',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img: 'dog.jpg',
    title: 'My dog',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img: 'free.jpg',
    title: 'vacation',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img: 'food.jpg',
    title: 'Food',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img: 'women.jpg',
    title: 'Blog',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img: 'flower.jpg',
    title: 'Nature',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const CardList = () => {
  return (
    <div className='container mt-5 d-flex flex-row justify-center-center flex-wrap'>
      {articles.map((element, idx) => {
        let img = element.img;
        let title = element.title;
        let content = element.content;

        return <Card key={idx} titles={title} contents={content} imgs={img} />
      })}

    </div>
  );
};

export default CardList;