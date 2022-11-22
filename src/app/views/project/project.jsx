import React, {useState, useEffect}  from 'react'
import { useParams } from 'react-router-dom'

import s from './project.module.scss'

import { API_LOAD_PROJECT } from '../../../constants'

export function Project(props) {
    const [project, setProject] = useState({
    })

    const { id } = useParams();

    useEffect(() => {
      fetch(API_LOAD_PROJECT + id + '/data.json')
        .then(res => res.json())
        .then(
          (result) => {
            setProject(result);
          }
        )
    }, [])

    if (Object.keys(project).length === 0) {
      return (
        <>
        <section className={s.projectSection}>
          404 error
        </section>
        </>
      )
    }
    return (
      <>
      <section className={s.projectSection}>
        <div class={s.data}>
          <div class={s.img}>
            <img src={project.img}/>
          </div>

          <div class={s.description}>
            <h2>{project.name}</h2>
            <div className={s.cardTags}>
              {project.tags.map((item, idx) => <div key={idx}>{item}</div>)}
            </div>
            <div>
              {project.description.map((item, idx) => <p key={idx}>{item}</p>)}
            </div>
            <div class={s.link}>
              <a target="blank" href={project.link}>Посмотреть проект</a>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}
