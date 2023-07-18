import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const Pricingpackages = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      image: 'card1.jpg',
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      image: 'card2.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      image: 'card3.jpg',
    },
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} image={card.image} />
      ))}
    </div>
  );
};

export default Pricingpackages;
