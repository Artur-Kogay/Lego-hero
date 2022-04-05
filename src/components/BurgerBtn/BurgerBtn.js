import React, { useEffect, useState } from 'react'
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
import account from '../../static/img/account.png'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Navs = [
  { id: 1, text: 'Главная', img: home, link: '/' },
  { id: 2, text: 'Личный кабинет', img: shop, link: '/profile' },
  { id: 3, text: 'Мероприятия', img: ticket, link: '/events' },
  { id: 4, text: 'Моё обучение', img: timer, link: '/training' },
  { id: 5, text: 'Помощь', img: help, link: '/help' },
]

const BurgerBtn = () => {
  const [isOpen, setOpen] = useState(false)
  const { user } = useSelector((state) => state.user)
  const router = useHistory()
  const blockScroll = () => {
    setOpen(!isOpen)
    if (!isOpen) document.body.style.overflow = 'hidden'
    else if (isOpen) document.body.style.overflow = 'auto'
  }
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const exitFunc = () => {
    window.localStorage.removeItem('access')
    window.localStorage.removeItem('refresh')
    router.push('/login')
  }

  return (
    <div onClick={() => blockScroll()} className={cls.burger}>
      <Hamburger color="#fff" toggled={isOpen} size={20} />
      <motion.div
        variants={variants}
        transition={{ duration: 1, type: 'spring' }}
        animate={isOpen ? 'visible' : 'hidden'}
        className={isOpen ? `${cls.navbarOpen} ` : `${cls.navbarClose} `}
      >
        {isOpen && (
          <div className={cls.menu}>
            <div className={cls.navbarAccount}>
              <div>
                <img
                  src={
                    user.avatar ? `https://relaxout.ru${user.avatar}` : account
                  }
                  alt="account"
                  style={isOpen ? { marginLeft: 24 } : { marginLeft: 11 }}
                />
              </div>
              {window.localStorage.getItem('access') && isOpen ? (
                <div className={cls.navbarText}>
                  <p className={cls.inviteText}>
                    {isOpen ? 'Вы вошли как:' : ''}
                  </p>
                  <p className={cls.accountName}>
                    {user.first_name || (user.last_name && isOpen)
                      ? `${user.first_name} ${user.last_name}`
                      : ''}
                  </p>
                </div>
              ) : (
                <p className={cls.errorMessage}>
                  {isOpen ? 'Вы еще не авторизованы' : ''}
                </p>
              )}
            </div>
            <nav className={cls.navLinks}>
              {isOpen
                ? Navs.map((nav) => (
                    <NavLink key={nav.id} to={nav.link} className={cls.navLink}>
                      <div className={cls.linkIcon}>
                        <img src={nav.img} alt="navImg" />
                      </div>
                      <p>{isOpen ? nav.text : ''}</p>
                    </NavLink>
                  ))
                : null}
            </nav>
            <div onClick={() => exitFunc()} className={cls.exit}>
              <div className={cls.exitNav}>
                <div className={cls.navIcon}>
                  <img src={exit} alt="exit" />
                </div>
                <p>
                  {isOpen
                    ? `${user.first_name ? 'Выйти из аккаунта' : ''}`
                    : ''}
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default BurgerBtn

// <nav className={cls.navLinks}>
//   {Navs.map((nav) => (
//       <NavLink key={nav.id} to={nav.link} className={cls.navLink}>
//         <div className={cls.linkIcon}>
//           <img src={nav.img} alt="navImg" />
//         </div>
//         <p>{isOpen ? nav.text : ''}</p>
//       </NavLink>
//     ))}
// </nav>
// <div className={cls.exit}>
// <div className={cls.exitNav}>
//   <div className={cls.navIcon}>
//   <img src={exit} alt="exit" />
//   </div>
// </div>
// </div>
