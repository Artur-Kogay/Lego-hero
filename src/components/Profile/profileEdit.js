import React from 'react'
import cl from '../../page/profile/profile.module.scss'
import { useMediaQuery } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import Input from '../_components/Input'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import classes from '../RegistrationPage/Registration.module.scss'
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@mui/material/TextField'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

const formatDate = (value, setFieldValue) => {
  const date = new Date(value),
    y = date.getFullYear(),
    m = date.getMonth(),
    d = date.getDate()
  setFieldValue('date_birthday', `${y}-${m + 1}-${d}`)
}

const ProfileEdit = ({
  setEditStatus,
  editStatus,
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  setFieldValue,
}) => {
  const isTabletMin = useMediaQuery('(min-width:768px)')
  const isTabletMax = useMediaQuery('(max-width:1200px)')
  const isMobileMax = useMediaQuery('(max-width: 700px)')

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  return (
    <>
      <div className={`${cl.profile_edit}`}>
        <div className={cl.oks}>
          <div className={cl.ok}>
            <div className={cl.min_block}>
              <p>Ваша фамилия</p>
              <Input
                name="last_name"
                type="text"
                onChange={handleChange}
                value={values?.last_name}
              />
            </div>
            <div className={cl.min_block}>
              <p>Ваше имя</p>
              <Input
                name="first_name"
                type="text"
                onChange={handleChange}
                value={values.first_name}
              />
            </div>
          </div>
          <div className={cl.ok}>
            <div className={cl.min_block}>
              <p>Город</p>
              <Input
                name="city"
                type="text"
                onChange={handleChange}
                value={values.city}
              />
            </div>
            <div className={cl.min_block}>
              <p>E-mail</p>
              <Input
                name="email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                readOnly
              />
            </div>
          </div>
          <div className="ok">
            <div className={cl.min_block}>
              <p>Дата рождения</p>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  inputFormat="dd/MM/yyyy"
                  name="date_birthday"
                  value={values.date_birthday}
                  onChange={(value) => {
                    formatDate(value, setFieldValue)
                  }}
                  renderInput={(params) => (
                    <TextField
                      color="secondary"
                      style={{
                        width: '100%',
                        marginTop: 8,
                      }}
                      sx={{
                        svg: { color: '#fff' },
                        input: { padding: '15px 16px' },
                      }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className={cl.min_block}>
              <p>Телефон</p>
              <Input
                name="phone_number"
                type="phone"
                variant="outlined"
                value={values.phone_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={`${cl.ok} ${cl.last_ok}`}>
            {!(isTabletMax && isTabletMin) && (
              <div>
                <button
                  type={'submit'}
                  className={cl.btn_profie}
                  // onClick={() => setEditStatus(!editStatus)}
                >
                  {editStatus ? 'Сохранить' : 'Изменить'}
                </button>
              </div>
            )}
            <div className={cl.min_block}>
              <p>Тип профиля</p>
              <select
                value={values.role}
                onChange={handleChange}
                name="role"
                id="userRole"
              >
                <option
                  value="Judge"
                  defaultChecked={(!!user.role === 'Judge' && true) || false}
                >
                  Судья
                </option>
                <option
                  value="Volunteer"
                  defaultChecked={
                    (!!user.role === 'Volunteer' && true) || false
                  }
                >
                  Волонтер
                </option>
                <option
                  value="Instructor"
                  defaultChecked={
                    (!!user.role === 'Instructor' && true) || false
                  }
                >
                  Инструктор
                </option>
                <option
                  value="Trainer"
                  defaultChecked={(!!user.role === 'Trainer' && true) || false}
                >
                  Тренер
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileEdit
