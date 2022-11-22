import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { connect } from 'react-redux';

import s from './SignInForm.module.scss'

import { actionSignIn } from '../../common/store/actions/signIn.js'

import { ActionTypes } from "../../common/store/constants";

const mapStateToProps = (state) => ({
    data: state.signInReducer.data,
})

const mapDispatchToProps = (dispatch) => ({
    signIn: (data) => dispatch(actionSignIn(data)),
})

function SignInForm({data, signIn}) {
  const navigate = useNavigate();

  const signInHandler = event => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    if (email == "vh@gmail.com" && password == "1234") {
      signIn({
        token: 'asdsds',
        name: 'Vladislav'
      })
      navigate("/");
    } else {
      signIn({
        token: '',
        name: ''
      })
    }
  }


  return (
    <>
      <form onSubmit={signInHandler} className={s.form}>
        <input name="email" type="email" placeholder="Почта"/>
        <input name="password" type="password" placeholder="Пароль"/>
        <input type="submit" value="Войти"/>
      </form>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
