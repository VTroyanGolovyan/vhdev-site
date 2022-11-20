import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../img/logo.png'
import s from './header.module.scss'

export function Header() {
    return (
      <>
        <header className={s.header}>
          <div class={s.logo}>
            <img src={Logo} alt="vhdev"/>
          </div>
          <nav>
            <Link className={s.href} to='/'>Главная</Link>
            <Link className={s.href} to='/portfolio'>Портфолио</Link>
            <Link className={s.href} to='/teaching'>Преподавание</Link>
          </nav>
        </header>
      </>
    )
}
