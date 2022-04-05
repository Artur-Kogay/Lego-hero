import React, { useState } from 'react'
import Title from '../_components/Title'
import Input from '../_components/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import PrimaryButton from '../_components/PrimaryButton'
import SecondaryButton from '../_components/SecondaryButton'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import classes from './Login.module.scss'
import './style.css'
import { Link } from 'react-router-dom'
import { $api } from '../../services/api'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUser } from '../../Redux/asyncFunc/asyncFunc'

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

function LoginPage() {
  const [isAuthed, setIsAuthed] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const router = useHistory()
  const dispatch = useDispatch()
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      submit(values)
    },
  })

  const submit = async (_data) => {
    try {
      await $api
        .post('/accounts/auth/jwt/create/', _data)
        .then(({ data: { access, refresh } }) => {
          window.localStorage.setItem('access', access)
          window.localStorage.setItem('refresh', refresh)
        })
      setErrorMessage(null)
      !!window.localStorage.getItem('access') && router.push('/')
    } catch (e) {
      if (e.response) setErrorMessage('Не верный логин или пароль')
    }
  }

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
          <h4 className={`${classes.text_danger} ${classes.text_center}`}>
            {!!errorMessage && errorMessage}
          </h4>
          <div className={classes.ButtonContainer}>
            <PrimaryButton type="submit">Войти </PrimaryButton>
            <Link to="/register">
              <SecondaryButton>Зарегистрироваться</SecondaryButton>
            </Link>
          </div>
          <Link to="/password-reset" className="forgotpassword">
            Забыли пароль?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
