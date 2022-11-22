import React from 'react'

import s from './contacts.module.scss'

export function Contacts() {
  return (
    <>
      <div className={s.Contacts}>
        <div className={s.contact}>Email: vhdev@yandex.ru</div>
        <div className={s.contact}>Telegram: @vhdev</div>
        <div className={s.contact}>Github: <a href="https://github.com/VladislavHacker" target="blank">VladislavHacker</a></div>
      </div>
    </>
  )
}
