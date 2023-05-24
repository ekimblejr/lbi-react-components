import React, { useState } from 'react';
import './expandingcards.css';

export interface Card {
  id: number;
  url: string;
  title: string;
}

export interface Props {
  data: Array<Card>;
}

const ExpandingCards = ({ data }: Props) => {
  const [activeId, setAvtiveId] = useState(1);
  const onClick = (id: number) => setAvtiveId(id);

  return (
    <div className="container">
      {data.map((card, index) => (
        <div
          key={card.id}
          className={`panel ${activeId === card.id ? 'active' : ''}`}
          onClick={() => onClick(card.id)}
          style={{
            backgroundImage: `url(${require(`../../assets/images/${card.url}`)})`,
          }}
        >
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;
