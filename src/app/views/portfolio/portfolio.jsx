import React from 'react'
import s from './portfolio.module.scss'

import CardList from '../../components/CardList/CardList'
import { API_LOAD_PROJECTS } from '../../../constants'

export function Portfolio(props) {

    return (
      <>
      <section className={s.portfolioSection}>
        <div>
          <input type="text" placeholder="Филтр"/>
        </div>
        <CardList limit="0" url={API_LOAD_PROJECTS}/>
        <div className={s.pages}>
        </div>
      </section>
      </>
    )
}
