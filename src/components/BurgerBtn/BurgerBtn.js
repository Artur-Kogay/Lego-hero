import React, { useState } from 'react'
import cls from './burger.module.scss'
import Hamburger from 'hamburger-react'
import home from '../../static/img/home.svg'
import shop from '../../static/img/shop.svg'
import ticket from '../../static/img/ticket.svg'
import timer from '../../static/img/timer.svg'
import help from '../../static/img/help.svg'
import exit from '../../static/img/exit.svg'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Navs = [
  { id: 1, img: home, link: '/' },
  { id: 2, img: shop, link: '/profile' },
  { id: 3, img: ticket, link: '/events' },
  { id: 4, img: timer, link: '/training' },
  { id: 5, img: help, link: '/help' },
]

const BurgerBtn = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={cls.burger}>
      <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} size={20} />
      <motion.div
        className={isOpen ? `${cls.navbarOpen} ` : `${cls.navbarClose} `}
      >
        <nav className={cls.navLinks}>
          {Navs.map((nav) => (
            <NavLink key={nav.id} to={nav.link} className={cls.navLink}>
              <div className={cls.linkIcon}>
                <img src={nav.img} alt="navImg" />
              </div>
              <p>{isOpen ? nav.text : ''}</p>
            </NavLink>
          ))}
        </nav>
        <div className={cls.exit}>
          <div className={cls.exitNav}>
            <div className={cls.navIcon}>
              <img src={exit} alt="exit" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default BurgerBtn
