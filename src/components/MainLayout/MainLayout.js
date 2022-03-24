import React from 'react'
import Menu from '../Menu/Menu'
import cls from './mainLayout.module.scss'
import { useMediaQuery } from '@mui/material'
import BurgerBtn from '../BurgerBtn/BurgerBtn'

export default function MainLayout({ children }) {
  const isMob = useMediaQuery('(max-width:767.9px)')

  return (
    <div
      className={`${cls.Main} ${
        isMob ? `${cls.MainMob}` : `${cls.MainDesktop}`
      }`}
    >
      <div className={cls.MenuMob}>
        <Menu />
        <div
          className={isMob ? `${cls.burgerBtnMob}` : `${cls.burgerBtnDesktop}`}
        >
          <BurgerBtn />
        </div>
      </div>

      <div className={cls.child}>{children}</div>

      <footer className={cls.footer}>
        <p>
          Copyright © АНО “Гонка Героев” 2015 - {new Date().getFullYear()}. ООО
          “Лига Героев Спорт Проджектс”
        </p>
      </footer>
    </div>
  )
}
