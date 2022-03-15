import React, { useEffect } from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import { useMediaQuery } from '@mui/material'
import cl from './profile.module.scss'
import account from '../../static/img/loll.png'
import fotka from '../../static/img/lolll.png'
import Learn from '../../components/Learn/Learn'
import { useSelector } from 'react-redux'

const Profile = () => {
  const isTabletMin = useMediaQuery('(min-width:768px)')
  const isTabletMax = useMediaQuery('(max-width:1200px)')
  const isMobileMax = useMediaQuery('(max-width: 700px)')
  const { user } = useSelector((state) => state.user)

  return (
    <MainLayout>
      <div className={cl.profile}>
        <div className={cl.titleWrapper}>
          <h2 className={cl.title}>ЛИЧНЫЙ КАБИНЕТ</h2>
          {isTabletMax && isTabletMin && (
            <button className={cl.btn_profie}>Изменить</button>
          )}
        </div>
        <div className={cl.prof_block}>
          <div className={cl.photo}>
            <img
              className={cl.pho}
              src={user.avatar ? user.avatar : account}
              alt="lol"
            />
          </div>
          {isMobileMax && (
            <div className={cl.ok}>
              <div className={cl.min_block}>
                <p>Ваше имя и фамилия</p>
                <h5>
                  {user.first_name} {user.last_name}
                </h5>
              </div>
              <div className={cl.min_block}>
                <p>Тип профиля</p>
                <h5>Начальный</h5>
              </div>
            </div>
          )}
          <div className={cl.profile_detail}>
            <div className={cl.oks}>
              {isTabletMin && (
                <div className={cl.ok}>
                  <div className={cl.min_block}>
                    <p>Ваше имя и фамилия</p>
                    <h5>
                      {user.first_name} {user.last_name}
                    </h5>
                  </div>
                  <div className={cl.min_block}>
                    <p>Тип профиля</p>
                    <h5>Начальный</h5>
                  </div>
                </div>
              )}
              <div className={cl.ok}>
                <div className={cl.min_block}>
                  <p>Город</p>
                  <h5>{user.city}</h5>
                </div>
                <div className={cl.min_block}>
                  <p>E-mail</p>
                  <h5>{user.email}</h5>
                </div>
              </div>

              <div className="ok">
                <div className={cl.min_block}>
                  <p>Дата рождения</p>
                  <h5>{user.date_birthday}</h5>
                </div>
                <div className={cl.min_block}>
                  <p>Телефон</p>
                  <h5>{user.phone_number}</h5>
                </div>
              </div>
            </div>
            {!(isTabletMax && isTabletMin) && (
              <div>
                <button className={cl.btn_profie}>Изменить</button>
              </div>
            )}
          </div>

          <div className={cl.profile_cashh}>
            <div className={cl.profile_cash}>
              <div className={cl.cart_portfolio}>
                <div className={cl.cart_bud}>
                  <div className={cl.cart_title}>
                    <h5>«Твой кэшбэк»</h5>
                    <p>
                      Получайте повышенный кэшбэк на расходы в категории
                      спортивные товары!{' '}
                    </p>
                  </div>

                  <img
                    className={cl.fotka}
                    src={fotka}
                    alt="asd"
                    style={{
                      width: '170px',
                      height: '110px',
                      marginLeft: '20px',
                    }}
                  />
                </div>

                <button>Узнать подробнее</button>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ marginTop: '57px' }} />
      </div>
      <Learn />
    </MainLayout>
  )
}

export default Profile
