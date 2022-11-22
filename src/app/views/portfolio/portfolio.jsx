import React, {useState}  from 'react'
import s from './portfolio.module.scss'

import CardList from '../../components/CardList/CardList'
import { API_LOAD_PROJECTS, PROJECT_TAGS } from '../../../constants'

export function Portfolio(props) {
    const [state, setState] = useState(
      {
        selected: Array(PROJECT_TAGS.length).fill(true),
        filters: PROJECT_TAGS
      }
    )

    const changeTag = (id) => {
      const i = parseInt(id)
      setState((old) => {
        const res = old.slice()
        res[i] = !res[i]
        filters = PROJECT_TAGS.filter((element, index) => res[index])
        return {
          selected: res,
          filters: filters
        }
      })
    }

    const {selected, filters} = state

    return (
      <>
      <section className={s.portfolioSection}>
        <div className={s.tags}>
          {
            PROJECT_TAGS.map(
              (tag, idx) =>
                <span
                  onClick={(evt) => changeTag(idx)}
                  className={selected[idx] ? s.tagSelected : s.tag}
                  key={idx}
                >
                  {tag}
                </span>
           )
          }
        </div>
        <CardList filter={filters} limit="0" url={API_LOAD_PROJECTS}/>
        <div className={s.pages}>
        </div>
      </section>
      </>
    )
}
