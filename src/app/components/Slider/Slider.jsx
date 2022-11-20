import React from 'react'
import s from './slider.module.scss'

import { Slide } from './Slide/slide'

export function Slider({items}) {
    return (
      <>
        <div>
          <div className={s.slider}>
            {items.map((item, idx) => <Slide key={idx} slideId={idx} slideData={item}/>)}
          </div>
          <div class={s.pages}>
            {items.map((item, idx) => <label htmlFor={idx}>{idx + 1}</label>)}
          </div>
        </div>
      </>
    )
}
