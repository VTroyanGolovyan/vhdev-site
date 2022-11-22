import React, {useState}  from 'react'
import { useParams } from 'react-router-dom'

import s from './project.module.scss'

import { API_LOAD_PROJECT } from '../../../constants'

export function Project(props) {
    const { id } = useParams();
    return (
      <>
      <section className={s.projectSection}>
        {id}
      </section>
      </>
    )
}
