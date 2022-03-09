import React, { useState } from 'react'
import logo from '../../static/img/logo.svg'
import { NavLink } from 'react-router-dom'
import account from '../../static/img/account.png'
import cls from './menu.module.scss'
import home from '../../static/img/home.svg'
import shop from '../../static/img/shop.svg'
import ticket from '../../static/img/ticket.svg'
import timer from '../../static/img/timer.svg'
import help from '../../static/img/help.svg'
import exit from '../../static/img/exit.svg'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'

const Navs = [
  { id: 1, text: 'Главная', img: home, link: '/' },
  { id: 2, text: 'Личный кабинет', img: shop, link: '/profile' },
  { id: 3, text: 'Мероприятия', img: ticket, link: '/events' },
  { id: 4, text: 'Моё обучение', img: timer, link: '/training' },
  { id: 5, text: 'Помощь', img: help, link: '/help' },
]

export default function Menu() {
  const [showFullMenu, setShowFullMenu] = useState(false)
  const isMob = useMediaQuery('(max-width:767.9px)')
  const isLaptop = useMediaQuery('(max-width: 1200px)')

  return (
    <div className={`${cls.Menu} main-menu`}>
      <motion.div
        className={cls.logo}
        animate={
          showFullMenu && !isMob
            ? { marginLeft: 110 }
            : isMob
            ? { marginLeft: 0 }
            : { marginLeft: 30 }
        }
      >
        <img
          src={logo}
          alt="logo"
          style={
            showFullMenu
              ? { width: 92.4, height: 59, marginBottom: 32 }
              : { width: 64, height: 41, marginBottom: 50 }
          }
        />
      </motion.div>
      <motion.div
        onMouseEnter={() => !isLaptop && setShowFullMenu(true)}
        onMouseLeave={() => setShowFullMenu(false)}
        className={`${cls.navbar} ${isMob ? `${cls.navbarMob}` : ''}`}
        animate={showFullMenu ? { width: 255 } : { width: 64 }}
      >
        <div className={cls.navbarAccount}>
          <div>
            <img
              src={account}
              alt="account"
              style={showFullMenu ? { marginLeft: 24 } : { marginLeft: 11 }}
            />
          </div>
          <div className={cls.navbarText}>
            <p className={cls.inviteText}>
              {showFullMenu ? 'Вы вошли как:' : ''}
            </p>
            <p className={cls.accountName}>
              {showFullMenu ? 'Рубернштерн Грев' : ''}
            </p>
          </div>
        </div>
        <nav className={cls.navLinks}>
          {Navs.map((nav) => (
            <NavLink key={nav.id} to={nav.link} className={cls.navLink}>
              <div className={cls.linkIcon}>
                <img src={nav.img} alt="navImg" />
              </div>
              <p>{showFullMenu ? nav.text : ''}</p>
            </NavLink>
          ))}
        </nav>
        <div className={cls.exit}>
          <NavLink to="/cabinet" className={cls.exitNav}>
            <div className={cls.navIcon}>
              <img src={exit} alt="exit" />
            </div>
            <p>{showFullMenu ? 'Выйти из аккаунта' : ''}</p>
          </NavLink>
        </div>
      </motion.div>
    </div>
  )
}
