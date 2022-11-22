import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import Logo from '../../../img/logo.png'
import s from './header.module.scss'

import { actionSignOut } from '../../common/store/actions/signOut.js'

const mapStateToProps = (state) => ({
    data: state.signInReducer.data,
})

const mapDispatchToProps = (dispatch) => ({
    signOut: (data) => dispatch(actionSignOut({token: '', name: ''})),
})

function Header({data, signOut}) {
    const [isShown, setIsShown] = useState(false);
    const checkId = "showMenu"
    let button;
    if (data.token === '') {
      button = <Link
        onClick={(e) => { setIsShown(false) }}
        className={s.href}
        to='/signin'
      >
        Вход
      </Link>;
    } else {
      button = <div onClick={signOut} className={s.href}>Выход</div>;
    }

    return (
      <>
        <header className={s.header}>
          <input
            onClick={(e) => { setIsShown(e.target.checked) }}
            checked={isShown}
            className={s.showMenu}
            id={checkId}
            type="checkbox"
          />
          <label className={s.labelNav} htmlFor={checkId}>
            <div className={s.central}></div>
          </label>
          <div class={s.logo}>
            <img src={Logo} alt="vhdev"/>
          </div>
          <nav>
            <Link
              onClick={(e) => { setIsShown(false) }}
              className={s.href}
              to='/'
            >
              Главная
            </Link>
            <Link
              onClick={(e) => { setIsShown(false) }}
              className={s.href}
              to='/portfolio'
            >
              Портфолио
            </Link>
            <Link
              onClick={(e) => { setIsShown(false) }}
              className={s.href}
              to='/teaching'
            >
              Преподавание
            </Link>
            {button}
          </nav>
        </header>
      </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
