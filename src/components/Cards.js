import React from 'react';
import CardCarousel from './CardCarousel';

function Card() {
  const cards = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'First Card',
      text: 'This is the first card in the carousel.'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Second Card',
      text: 'This is the second card in the carousel.'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Third Card',
      text: 'This is the third card in the carousel.'
    }
  ];

  return (
    <div className="App">
      <CardCarousel cards={cards} />
    </div>
  );
}

export default Card;
