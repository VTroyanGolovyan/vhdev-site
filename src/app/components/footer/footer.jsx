import React, { useEffect, useState } from 'react'

import s from './footer.module.scss'

import { API_LOAD_CONTACTS } from '../../../constants'

export function Footer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_LOAD_CONTACTS)
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
      <footer className={s.footer}>
        <div>vhdev @ 2022</div>
        <div>
           {items.map(
             (item, idx) => <a className={s.contact} key={idx} href={item.link}>{item.name}</a>
           )}
        </div>
      </footer>
    )
  }
}
