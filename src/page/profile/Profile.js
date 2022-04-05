import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import { useMediaQuery } from '@mui/material'
import cl from './profile.module.scss'
import account from '../../static/img/loll.png'
import fotka from '../../static/img/lolll.png'
import Learn from '../../components/Learn/Learn'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_API_URL } from '../../utils/constants'
import { editAvatar, getUser } from '../../Redux/reducers/userReducer'
import { $api } from '../../services/api'
import ProfileInfo from '../../components/Profile/profileInfo'
import ProfileEdit from '../../components/Profile/profileEdit'
import { useFormik } from 'formik'

const submit = async (values, id) => {
  try {
    await $api.patch(`/accounts/${id}/`, values)
  } catch (e) {
    console.log(e.response)
  }
}

const Profile = () => {
  const isTabletMin = useMediaQuery('(min-width:768px)')
  const isTabletMax = useMediaQuery('(max-width:1200px)')
  const isMobileMax = useMediaQuery('(max-width: 700px)')

  const dispatch = useDispatch()
  const [editStatus, setEditStatus] = useState(false)
  const { user } = useSelector((state) => state.user)

  const initialValues = {
    first_name: user.first_name,
    last_name: user.last_name,
    city: user.city,
    date_birthday: user.date_birthday,
    role: user.role,
    phone_number: user.phone_number,
    email: user.email,
  }

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues,
      // validationSchema: SignupSchema,
      onSubmit: (values) => {
        submit(values, user.id).then((data) => {
          dispatch(getUser())
          setEditStatus(!editStatus)
        })
      },
    })
  const editAvatar = async (avatar) => {
    const formData = new FormData()
    formData.append('avatar', avatar, avatar.name)
    await $api.patch(`/accounts/${user.id}/`, formData)
    dispatch(getUser())
  }
  return (
    <MainLayout>
      <div className={cl.profile}>
        <div className={cl.titleWrapper}>
          <h2 className={cl.title}>ЛИЧНЫЙ КАБИНЕТ</h2>
          {isTabletMax && isTabletMin && (
            <button
              className={cl.btn_profie}
              onClick={() => setEditStatus(!editStatus)}
            >
              {editStatus ? 'Сохранить' : 'Изменить'}
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit} className={cl.prof_block}>
          <label className={cl.photo} htmlFor="#userAvatar">
            <input
              onChange={(e) => editAvatar(e.target.files[0])}
              type="file"
              id={'userAvatar'}
            />
            <img
              className={cl.pho}
              src={user.avatar ? `https://relaxout.ru${user.avatar}` : account}
              alt="lol"
            />
          </label>
          {(!editStatus && (
            <ProfileInfo
              setEditStatus={setEditStatus}
              editStatus={editStatus}
            />
          )) || (
            <ProfileEdit
              setEditStatus={setEditStatus}
              editStatus={editStatus}
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setFieldValue={setFieldValue}
            />
          )}

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
                    <button>Узнать подробнее</button>
                  </div>

                  <img
                    className={cl.fotka}
                    src={fotka}
                    alt="asd"
                    style={{
                      maxWidth: '348px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <hr style={{ marginTop: '57px' }} />
      </div>
      <Learn />
    </MainLayout>
  )
}

export default Profile
