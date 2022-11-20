import React from 'react'
import s from './slide.module.scss'

export function Slide({slideId, slideData}) {
  return (
    <>
      <input name="slider" id={slideId} checked type="radio"/>
      <div className={s.slide}>
        <div className={s.slideName}>{slideData.name}</div>
        <div className={s.slideTags}>
          {slideData.tags.map((item, idx) => <div key={idx}>{item}</div>)}
        </div>
        <cite className={s.slideText}>
          {slideData.text}
        </cite>
      </div>
    </>
  )
}
