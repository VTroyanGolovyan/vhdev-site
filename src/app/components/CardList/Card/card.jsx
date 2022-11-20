import React from 'react'
import s from './card.module.scss'
import PropTypes from 'prop-types';

export default function Card({cardData}) {

  return (
    <>
      <div className={s.card}>
        <div className={s.cardName}>{cardData.name}</div>
        <div className={s.cardImg}>
           <img src={cardData.img} alt={cardData.name}/>
        </div>
        <div className={s.cardTags}>
          {cardData.tags.map((item, idx) => <div key={idx}>{item}</div>)}
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  cardData: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    tags: PropTypes.array
  })
};
