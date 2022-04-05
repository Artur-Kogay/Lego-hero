import React from 'react'
import cl from '../../page/profile/profile.module.scss'
import { useMediaQuery } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

const ProfileInfo = ({ setEditStatus, editStatus }) => {
  const isTabletMin = useMediaQuery('(min-width:768px)')
  const isTabletMax = useMediaQuery('(max-width:1200px)')
  const isMobileMax = useMediaQuery('(max-width: 700px)')

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  return (
    <>
      {isMobileMax && (
        <div className={`${cl.ok}`}>
          <div className={cl.min_block}>
            <p>Ваше имя и фамилия</p>
            <h5>
              {user.first_name} {user.last_name}
            </h5>
          </div>
          <div className={cl.min_block}>
            <p>Тип профиля</p>
            <h5>{user.role}</h5>
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
                <h5>{user.role}</h5>
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
            <button
              className={cl.btn_profie}
              onClick={() => setEditStatus(!editStatus)}
            >
              {editStatus ? 'Сохранить' : 'Изменить'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default ProfileInfo
