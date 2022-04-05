import React from 'react'
import cls from './PasswordReset.module.scss'
import Title from '../_components/Title'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Input from '../_components/Input'

import PrimaryButton from '../_components/PrimaryButton'
import SecondaryButton from '../_components/SecondaryButton'
import { $api } from '../../services/api'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import classes from '../LoginPage/Login.module.scss'

const initialValues = {
  email: '',
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Введите электронный адрес корректно!')
    .required('Введите электронный адрес'),
})

function PasswordResetPage() {
  const handleSubmit = async (values) => {
    try {
      await $api.post('/accounts/auth/users/reset_password/', values)
      toast.success('На почту выслан новый пароль!')
    } catch (e) {
      toast.error(`${e.response.data.map((item) => item)}`)
    }
  }
  return (
    <div className={cls.PasswordResetBlock}>
      <Title>Восстановление пароля</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <Input
              label="Ваш e-mail"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className={cls.EmailInput}
            />
            {errors.email && touched.email && (
              <p className={cls.text_danger}>{errors.email}</p>
            )}
            <div className={cls.ButtonContainer}>
              <PrimaryButton type="submit">Выслать пароль</PrimaryButton>
              <Link to={'/register'}>
                <SecondaryButton>Зарегистрироваться</SecondaryButton>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  )
}

export default PasswordResetPage
