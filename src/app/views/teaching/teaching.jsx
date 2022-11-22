import React, { useEffect, useState } from 'react'
import s from './teaching.module.scss'

import { AboutMe } from '../../components/AboutMe/AboutMe'
import { Contacts } from '../../components/contacts/contacts'

import { Slider } from '../../components/Slider/Slider'

import { API_LOAD_ABOUT, API_LOAD_FEEDBACKS } from '../../../constants'

export function Teaching() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_LOAD_FEEDBACKS)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
      <AboutMe url={API_LOAD_ABOUT}/>
      <div class={s.feeds}>
        <div className={s.iframeWrapper}>
          <iframe scrolling="no" title="Profi"  height="150px" width="300px" src={process.env.PUBLIC_URL + '/widget.html'}/>
          <Contacts/>
        </div>
        <div className={s.sliderWrapper}>
          <Slider items={items}/>
        </div>
      </div>
      </>
    )
  }
}
