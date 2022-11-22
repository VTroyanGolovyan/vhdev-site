import React from 'react'
import s from './signin.module.scss'

import SignInForm from '../../components/SignInForm/SignInForm'
export function SignIn() {
  return (
    <>
    <section class={s.singinSection}>
    <h2>Авторизация</h2>
    <SignInForm/>
    </section>
    </>
  )
}
