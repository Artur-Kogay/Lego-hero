import React from 'react'
import Title from '../_components/Title'
import Input from '../_components/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import PrimaryButton from '../_components/PrimaryButton'
import SecondaryButton from '../_components/SecondaryButton'
import { NavLink } from 'react-router-dom'

import classes from './Login.module.scss'
import './style.css'
import Link from '@mui/material/Link'
import { $api } from '../../services/api'

const initialValues = {
  email: '',
  password: '',
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Введите электронный адрес корректно!')
    .required('Введите электронный адрес'),
  password: Yup.string().required('Введите пароль!'),
})

const submit = async (_data) => {
  try {
    const { data } = await $api.post('/accounts/auth/jwt/create/', _data)
    return data
  } catch (e) {
    // console.log(e.response)
  }
}

function LoginPage() {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      submit(values).then(({ access, refresh }) => {
        window.localStorage.setItem('access', access)
        window.localStorage.setItem('refresh', refresh)
      })
    },
  })

  return (
    <div className={classes.LoginBlock}>
      <Title>Авторизация</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Ваш e-mail"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && touched.email && (
            <p className={classes.text_danger}>{errors.email}</p>
          )}
        </div>
        <div className={classes.FormInput}>
          <Input
            label="Пароль"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && touched.password && (
            <p className={classes.text_danger}>{errors.password}</p>
          )}
          <div className="linkblock">
            {/*<span className="LinkSelf">*/}
            {/*  <Link className={classes.lll} href="#">*/}
            {/*    Отправить СМС повторно.*/}
            {/*  </Link>*/}
            {/*  Отправить СМС повторном можно будет через 144 сек.*/}
            {/*</span>*/}
          </div>
          <div className={classes.ButtonContainer}>
            <PrimaryButton type="submit">Войти</PrimaryButton>
            <Link href="/register">
              <SecondaryButton>Зарегистрироваться</SecondaryButton>
            </Link>
          </div>
          <Link href="/password-reset" className="forgotpassword">
            Забыли пароль?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
