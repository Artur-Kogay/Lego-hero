import React, { useState } from 'react'

import Input from '../_components/Input'
import Title from '../_components/Title'
import { Formik, Form } from 'formik'
import TextField from '@mui/material/TextField'
import * as Yup from 'yup'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import PrimaryButton from '../_components/PrimaryButton'
import SecondaryButton from '../_components/SecondaryButton'
import { Link, useHistory } from 'react-router-dom'
import AdapterJalali from '@date-io/date-fns-jalali'

import classes from './Registration.module.scss'

import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import './style.css'
import { $api } from '../../services/api'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  first_name: '',
  last_name: '',
  vk: '',
  date_birthday: '',
  city: '',
  role: '',
  phone_number: '',
}

// {
//     "email": "argenalimbaev@gmail.com",
//     "password": "Daniel20",
//     "first_name": "Argen",
//     "last_name": "Alimbaev",
//     "vk": "https://www.facebook.com/doni.asangulov1",
//     "date_birthday": "2004-11-12",
//     "city": "Bishkek",
//     "role": "Trainer",
//     "phone_number": "+996 700 000 000"
// }

const SignupSchema = Yup.object().shape({
  phone_number: Yup.string()
    .min(2, 'Too Short!')
    .required('Введите номер телефона корректно!'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Введите пароль!'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Пароли не совпадают!'
  ),
  first_name: Yup.string().required('Введите Имя корректно!'),
  last_name: Yup.string().required('Введите Фамилию корректно!'),
  email: Yup.string()
    .email('Введите электронный адрес корректно!')
    .required('Введите электронный адрес'),
})

const formatDate = (value, setFieldValue) => {
  const date = new Date(value),
    y = date.getFullYear(),
    m = date.getMonth(),
    d = date.getDate()
  setFieldValue('date_birthday', `${y}-${m + 1}-${d}`)
}

function RegistrationPage() {
  const [passwordMessage, setPasswordMessage] = useState(null)
  const [dateMessage, setDateMessage] = useState(null)
  const [emailMessage, setEmailMessage] = useState(null)
  const errorHandler = (errors) => {
    if (errors.data.password)
      setPasswordMessage(errors.data.password.map((item) => `${item} `))
    else if (errors.data.date_birthday) setDateMessage('Не корректная дата')
    else if (errors.data.email)
      setEmailMessage(errors.data.email.map((item) => `${item} `))
  }

  const handleSubmit = async ({
    email,
    password,
    first_name,
    last_name,
    vk,
    date_birthday,
    city,
    role,
    phone_number,
  }) => {
    try {
      let data = {
        email,
        password,
        first_name,
        last_name,
        vk,
        date_birthday,
        city,
        role,
        phone_number,
      }
      await $api.post('/accounts/auth/users/', data)
      toast.success(
        'На вашу почту выслана ссылка на активацию аккаунта. Вы можете закрыть эту вкладку',
        {
          position: toast.POSITION.TOP_RIGHT,
          closeOnClick: false,
          hideProgressBar: true,
          autoClose: false,
          draggable: false,
        }
      )
      setDateMessage(null)
      setPasswordMessage(null)
      setEmailMessage(null)
    } catch (e) {
      errorHandler(e.response)
    }
  }

  return (
    <div className={classes.registration_block}>
      <Title>Регистрация героя</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, setFieldValue }) => (
          <Form className={classes.form_inputs}>
            <Input
              label="Фамилия"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
            />
            {errors.last_name && touched.last_name && (
              <p className={classes.text_danger}>{errors.last_name}</p>
            )}
            <Input
              label="Имя"
              name="first_name"
              variant="outlined"
              value={values.first_name}
              onChange={handleChange}
            />
            {errors.first_name && touched.first_name && (
              <p className={classes.text_danger}>{errors.first_name}</p>
            )}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <p className={classes.labelInfo}>Дата рождения</p>
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
                      height: 50,
                    }}
                    sx={{
                      svg: { color: '#fff' },
                    }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
            <p className={classes.text_danger}>{dateMessage}</p>
            <Input
              label="Город"
              name="city"
              variant="outlined"
              value={values.city}
              onChange={handleChange}
            />
            {errors.city && touched.city && (
              <p className={classes.text_danger}>{errors.city}</p>
            )}
            <FormControl
              name={'role'}
              className={classes.FormControl}
              value={values.role}
              onChange={handleChange}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="role"
                className={classes.RadioGroup}
              >
                <FormControlLabel
                  value="Judge"
                  control={
                    <Radio
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        scale: '0.8',
                        '&.Mui-checked': {
                          color: '#3237de',
                        },
                      }}
                    />
                  }
                  label="Судья"
                  className={classes.FormControlLabel}
                />
                <FormControlLabel
                  value="Volunteer"
                  control={
                    <Radio
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        scale: '0.8',
                        '&.Mui-checked': {
                          color: '#3237de',
                        },
                      }}
                    />
                  }
                  label="Волонтер"
                  className={classes.FormControlLabel}
                />
                <FormControlLabel
                  value="Instructor"
                  control={
                    <Radio
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        scale: '0.8',
                        '&.Mui-checked': {
                          color: '#3237de',
                        },
                      }}
                    />
                  }
                  label="Инструктор"
                  className={classes.FormControlLabel}
                />
                <FormControlLabel
                  value="Trainer"
                  control={
                    <Radio
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        scale: '0.8',
                        '&.Mui-checked': {
                          color: '#3237de',
                        },
                      }}
                    />
                  }
                  label="Тренер"
                  className={classes.FormControlLabel}
                />
              </RadioGroup>
            </FormControl>
            <Input
              label="Почта"
              name="email"
              type="email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <p className={classes.text_danger}>{errors.email}</p>
            )}
            <p className={classes.text_danger}>{emailMessage}</p>
            <Input
              label="Пароль"
              name="password"
              type="password"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <p className={classes.text_danger}>{errors.password}</p>
            )}
            <p className={classes.text_danger}>{passwordMessage}</p>
            <Input
              label="Подтвердите пароль"
              name="confirmPassword"
              type="password"
              variant="outlined"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className={classes.text_danger}>{errors.confirmPassword}</p>
            )}
            <Input
              label="Номер"
              name="phone_number"
              type="phone"
              variant="outlined"
              value={values.phone_number}
              onChange={handleChange}
            />
            {errors.phone_number && touched.phone_number && (
              <p className={classes.text_danger}>{errors.phone_number}</p>
            )}
            <Input
              label="VKontakte"
              name="vk"
              type="text"
              variant="outlined"
              value={values.vk}
              onChange={handleChange}
              placeholder="Вставьте ссылку на Ваш профиль"
            />
            {errors.vk && touched.vk && (
              <p className={classes.text_danger}>{errors.vk}</p>
            )}
            <FormGroup className={classes.FormGroup}>
              <FormControlLabel
                className={classes.FormControl}
                control={
                  <Checkbox
                    style={{
                      color: '#3237de',
                      transform: 'scale(1.3)',
                      marginBottom: 20,
                    }}
                  />
                }
                label={
                  <p className={classes.CheckBoxLabel}>
                    Я согласен на обработку персональных данных
                  </p>
                }
              />
              <FormControlLabel
                className={classes.FormControl}
                control={
                  <Checkbox
                    style={{
                      color: '#3237de',
                      transform: 'scale(1.3)',
                      marginBottom: 20,
                    }}
                  />
                }
                label={
                  <p className={classes.CheckBoxLabel}>
                    Я хочу получать рассылку и новости о акциях и новинках
                    компании
                  </p>
                }
              />
            </FormGroup>
            <div className={classes.ButtonContainer}>
              <PrimaryButton type="submit">Зарегистрироваться</PrimaryButton>
              <Link sx={{ textDecoration: 'none' }} to={'/login'}>
                <SecondaryButton>Уже есть аккаунт?</SecondaryButton>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default RegistrationPage
