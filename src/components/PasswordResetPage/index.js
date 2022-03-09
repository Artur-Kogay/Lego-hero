import React from 'react'
import cls from './PasswordReset.module.scss'
import Title from '../_components/Title'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Input from '../_components/Input'

import PrimaryButton from '../_components/PrimaryButton'
import SecondaryButton from '../_components/SecondaryButton'

const initialValues = {
  username: '',
  password: '',
}

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .required('Введите номер телефона корректно!'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Введите пароль!'),
  first_name: Yup.string().required('Введите Имя корректно!'),
  last_name: Yup.string().required('Введите Фамилию корректно!'),
})

function PasswordResetPage() {
  const handleSubmit = async () => {
    console.log('HandleSubmit')
  }
  return (
    <div className={cls.PasswordResetBlock}>
      <Title>Восстановление пароля</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, handleChange }) => (
          <Form>
            <Input
              label="Ваш e-mail"
              name="email"
              type="email"
              value={values.username}
              onChange={handleChange}
              className={cls.EmailInput}
            />
            <div className={cls.ButtonContainer}>
              <PrimaryButton>Выслать пароль</PrimaryButton>
              <SecondaryButton>Зарегистрироваться</SecondaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PasswordResetPage
