import React from 'react'
import { Link } from 'react-router-dom'


import s from './home.module.scss'

import { AboutMe } from '../../components/AboutMe/AboutMe'
import CardList from '../../components/CardList/CardList'

import { API_LOAD_PROJECTS, API_LOAD_ABOUT } from '../../../constants'

export function Home() {
    return (
      <>
      <AboutMe url={API_LOAD_ABOUT}/>
      <section className={s.portfolioSection}>
        <h2 className={s.h2}>Портфолио</h2>
        <CardList limit="4" url={API_LOAD_PROJECTS}/>
        <Link to='/portfolio'>
          <div className={s.linkBtn}>Все проекты</div>
        </Link>
      </section>
      </>
    )
}
