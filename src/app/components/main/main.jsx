import { Routes, Route } from 'react-router-dom'

import { Home } from '../../views/home/home'
import { Portfolio } from '../../views/portfolio/portfolio'
import { Teaching } from '../../views/teaching/teaching'

import s from './main.module.scss'

export function Main() {
  return (
    <main class={s.main}>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/portfolio/:page' element={<Portfolio/>}/>
        <Route path='/teaching' element={<Teaching/>}/>
      </Routes>
    </main>
  )
}
