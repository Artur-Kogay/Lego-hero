import React, { useState } from 'react'
import HelpAccordion from '../../components/HelpAccordion/HelpAccordion'
import MainLayout from '../../components/MainLayout/MainLayout'
import styles from './help.module.scss'
import humanIcon from '../../static/img/contactHuman.svg'
import injenerIcon from '../../static/img/contactEngineer.svg'
import Radio from '../../components/RadioButton/RadioButton'
import { FormControl, FormControlLabel, RadioGroup } from '@mui/material'
import { ReactComponent as UserIcon } from '../../static/img/userIcon.svg'
import { ReactComponent as PhoneIcon } from '../../static/img/phoneIcon.svg'
import { ReactComponent as MessageIcon } from '../../static/img/MessageIcon.svg'
import InputHelpPage from '../../components/InputHelpPage/InputHelpPage'
import CustomizedCheckbox from '../../components/HelpCheckbox/HelpCheckbox'
import { DOMAIN } from '../../utils/constants'
import { useFormik } from 'formik'
import TechnicalAccordion from '../../components/HelpAccordion/technicalAccordion'

const initialValues = {
  first_name: '',
  last_name: '',
  city: '',
  email: '',
  phone_number: '',
  question: '',
  type: '',
}

const radios = [
  'Запрос информации',
  'Жалобы и предложения',
  'Вопросы PR, рекламы, фото и видео',
  'Другое',
]

const techRadios = ['Проблемы с заказом', 'Проблемы с регистрацией']

const Help = () => {
  const [expanded, setExpanded] = useState(false)
  const [technicalQuestionExpanded, setTechnicalQuestionExpanded] =
    useState(false)
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>СВЯЗАТЬСЯ С НАМИ</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.contact__block}>
            <HelpAccordion
              expanded={expanded}
              setExpanded={setExpanded}
              title={'Вопросы к организаторам'}
              img={humanIcon}
              icon={humanIcon}
              backgroundColor={
                'linear-gradient(266.95deg, #982EEB -20.2%, #359AD2 132.4%), #151515'
              }
            >
              <p className={styles.summary__title}>Укажите тему вопроса:</p>
              <div className={styles.summary__radioButtons}>
                <FormControl
                  onChange={handleChange}
                  value={values.type}
                  name={'type'}
                >
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="type"
                  >
                    <div className={styles.radio__container}>
                      {radios.map((item, index) => {
                        return (
                          <FormControlLabel
                            value={item}
                            key={`${item}__${index}`}
                            label=""
                            control={<Radio text={item} />}
                          />
                        )
                      })}
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </HelpAccordion>
          </div>
          {expanded && (
            <div className={styles.inputs__container}>
              <div className={styles.litle__inputs}>
                <InputHelpPage
                  changeFunc={handleChange}
                  title="Ваше имя"
                  text="имя"
                  Icon={UserIcon}
                  value={values.first_name}
                  name="first_name"
                />
                <InputHelpPage
                  title="Ваше фамилия"
                  text="фамилия"
                  Icon={UserIcon}
                  value={values.last_name}
                  name="last_name"
                  changeFunc={handleChange}
                />
                <InputHelpPage
                  title="Ваш город"
                  text="город"
                  value={values.city}
                  name="city"
                  changeFunc={handleChange}
                />
                <InputHelpPage
                  title="Ваш email"
                  text="frsh@bk.ru "
                  Icon={MessageIcon}
                  value={values.email}
                  placeholder={'frsh@bk.ru '}
                  name="email"
                  changeFunc={handleChange}
                />
                <InputHelpPage
                  title="Ваш номер телефона"
                  text="номер телефона"
                  Icon={PhoneIcon}
                  value={values.phone_number}
                  name="phone_number"
                  changeFunc={handleChange}
                />
                <div className={styles.table__quastion}>
                  <InputHelpPage
                    title="Ваш вопрос"
                    text="Ваш вопрос"
                    value={values.question}
                    name="question"
                    changeFunc={handleChange}
                  />
                </div>
              </div>
              <div className={styles.input__question}>
                <p className={styles.title}>Ваш вопрос</p>
                <textarea
                  className={styles.textarea}
                  placeholder="Ваш вопрос"
                  value={values.question}
                  name="question"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.submit}>
                <button type="submit" className={styles.button}>
                  Отправить
                </button>
                <FormControlLabel
                  className={styles.labelCheck}
                  control={<CustomizedCheckbox />}
                  label={
                    <p className={styles.label}>
                      {' '}
                      Я согласен на обработку{' '}
                      <a href={DOMAIN} className={styles.label__link}>
                        персональных данных
                      </a>{' '}
                    </p>
                  }
                />
              </div>
            </div>
          )}
          <div className={styles.injener__accordion}>
            <TechnicalAccordion
              title={'Технический вопрос'}
              img={injenerIcon}
              icon={injenerIcon}
              backgroundColor={
                'linear-gradient(266.95deg, #EB2E72 -20.2%, #D2B035 132.4%), #151515'
              }
              technicalQuestionExpanded={technicalQuestionExpanded}
              setTechnicalQuestionExpanded={setTechnicalQuestionExpanded}
            >
              <p className={styles.summary__title}>Укажите тему вопроса:</p>
              <div className={styles.summary__radioButtons}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                  >
                    <div className={styles.radio__container}>
                      {techRadios.map((item, index) => {
                        return (
                          <FormControlLabel
                            value={item}
                            key={`${item}__${index}`}
                            label=""
                            control={<Radio text={item} />}
                          />
                        )
                      })}
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </TechnicalAccordion>
          </div>
          {technicalQuestionExpanded && (
            <div className={styles.inputs__container}>
              <div className={styles.litle__inputs}>
                <InputHelpPage
                  changeFunc={handleChange}
                  title="Ваше имя"
                  text="имя"
                  Icon={UserIcon}
                  value={values.first_name}
                  name="first_name"
                />
                <InputHelpPage
                  title="Ваше фамилия"
                  text="фамилия"
                  Icon={UserIcon}
                  value={values.last_name}
                  name="last_name"
                  changeFunc={handleChange}
                />
                <InputHelpPage
                  title="Ваш город"
                  text="город"
                  value={values.city}
                  name="city"
                  changeFunc={handleChange}
                />
                <InputHelpPage
                  title="Ваш email"
                  text="frsh@bk.ru"
                  Icon={MessageIcon}
                  value={values.email}
                  name="email"
                  changeFunc={handleChange}
                />
                <InputHelpPage
                  title="Ваш номер телефона"
                  text="номер телефона"
                  Icon={PhoneIcon}
                  value={values.phone_number}
                  name="phone_number"
                  changeFunc={handleChange}
                />
                <div className={styles.table__quastion}>
                  <InputHelpPage
                    title="Ваш вопрос"
                    text="Ваш вопрос"
                    value={values.question}
                    name="question"
                    changeFunc={handleChange}
                  />
                </div>
              </div>
              <div className={styles.input__question}>
                <p className={styles.title}>Ваш вопрос</p>
                <textarea
                  className={styles.textarea}
                  placeholder="Ваш вопрос"
                  value={values.question}
                  name="question"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.submit}>
                <button type="submit" className={styles.button}>
                  Отправить
                </button>
                <FormControlLabel
                  className={styles.labelCheck}
                  control={<CustomizedCheckbox />}
                  label={
                    <p className={styles.label}>
                      {' '}
                      Я согласен на обработку{' '}
                      <a href={DOMAIN} className={styles.label__link}>
                        персональных данных
                      </a>{' '}
                    </p>
                  }
                />
              </div>
            </div>
          )}
        </form>
      </div>
    </MainLayout>
  )
}

export default Help
