import React, { useEffect, useState }  from 'react'

import Photo from '../../../img/photo.jpg'

import s from './AboutMe.module.scss'

export function AboutMe({url}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [url])
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <section class={s.aboutSection}>
           <h2> Обо мне</h2>
           <div class={s.about}>
             <div class={s.photo}>
              <img src={Photo} alt="vhdev"/>
             </div>
             <div class={s.descriptionText}>
              {data.about}
             </div>
           </div>
        </section>
      </>
    )
  }
}
