import React from 'react'

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

import classes from './Registration.module.scss'

import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import './style.css'
import { $api } from '../../services/api'


const initialValues = {
  email: '',
  password: 'Daniel20',
  first_name: '',
  last_name: '',
  vk: '',
  date_birthday:'',
  city:'',
  role:'',
  phone_number:''
}

const SignupSchema = Yup.object().shape({
  // username: Yup.string()
  //   .min(2, 'Too Short!')
  //   .required('Введите номер телефона корректно!'),
  // password: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Введите пароль!'),
  // first_name: Yup.string().required('Введите Имя корректно!'),
  // last_name: Yup.string().required('Введите Фамилию корректно!'),
})

const handleSubmit = async ( values) => {
  console.log(values)
 try {
  return await $api.post("/accounts/auth/users/", values)
 } catch (e) {
    console.log(e.response)
 }
}

function RegistrationPage() {
  const [value, setValue] = React.useState(null)


  
  return (
    <div className={classes.registration_block}>
      <Title>Регистрация героя</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange,setFieldValue }) => (
          <Form className={classes.form_inputs} 
          >
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
              <DatePicker
                name="date_birthday"
                label="Дата рождения"
                value={values.date_birthday}
                onChange={(value) => {
                  setFieldValue("date_birthday", value)
                }}
                renderInput={(params) => (
                  <TextField
                    color="secondary"
                    style={{
                      width: '100%',
                      marginTop: 18,
                      height: 50,
                    }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>

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

            <FormControl className={classes.FormControl} value={values.role}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                className={classes.RadioGroup}
                
              >
                <FormControlLabel
                  value="judge"
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
                  value="volunteer"
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
                  value="instructor"
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
                  value="trainer"
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
              <SecondaryButton>Уже есть аккаунт?</SecondaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegistrationPage
