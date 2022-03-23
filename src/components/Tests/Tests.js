import React, { useState, useEffect } from 'react'
import cls from './test.module.scss'
import { Formik } from 'formik'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { Checkbox } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import first from '../../img/1.jpg'
import second from '../../img/2.jpg'
import third from '../../img/3.jpg'
import fourth from '../../img/4.jpg'
import fifth from '../../img/5.jpg'
import * as Yup from 'yup'
import { $api } from '../../services/api'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const getQuestions = async (id) => {
  try {
    const { data } = await $api.get(`/exams/exams/${id}/`)
    return data
  } catch (e) {
    console.log(e)
  }
}

const Tests = () => {
  const [initialValues, setInitialValues] = useState(null)
  const [data, setData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getQuestions(id).then((res) => {
      setInitialValues(
        res?.questions?.reduce((state, { id }) => {
          return { ...state, [id]: null }
        }, {})
      )
      setData(res)
    })
  }, [id])

  const validateSchema = data
    ? Yup.object().shape(
        data?.questions?.reduce((state, { id }) => {
          return {
            ...state,
            [id]: Yup.mixed()
              .typeError('обязательно')
              .test('value validate', 'обязательно', (value) => {
                return value?.length >= 1
              }),
          }
        }, {})
      )
    : null

  console.log({ data, initialValues })

  return (
    <div className={cls.Test}>
      <Loader size={'30px'} />
      <p className={cls.direction}>Главная Тест</p>
      <h2 className={cls.pageName}>ТЕСТ</h2>
      <h1 className={cls.pageDesc}>{data?.title}</h1>
      {initialValues && data && (
        <Formik
          onSubmit={(values) => console.log(values)}
          validationSchema={validateSchema}
          initialValues={initialValues}
          style={{ display: 'flex', flexDirection: 'column', gridGap: 100 }}
        >
          {({ values, touched, errors, setFieldValue, handleSubmit }) => {
            const handleChange = (type, questionId, answerId) => {
              // проверка на тип вопроса
              if (type === 'R') {
                // задаем значение radio вопроса, тут просто идет замена старого значения на новый
                setFieldValue(questionId, answerId)
              } else if (type === 'C') {
                // ПРОВЕРКА НА НАЛИЧИЕ ОТВЕТА (null или все таки есть значение)
                if (values[questionId]) {
                  // проверяем на наличие прилетевшего ответа в массиве, типа id ответа уже был в массиве или нет
                  if (values[questionId].some((ansId) => ansId === answerId)) {
                    // тут мы убираем уже бывший ответ, если он был нажат, тоесть если пользователь нажал на включенный чекбокс, чтобы выключить
                    setFieldValue(
                      questionId,
                      values[questionId].filter((ansId) => ansId !== answerId)
                    )
                  } else {
                    // мы тут просто собираем всех и добавляем новый ответ в массив
                    setFieldValue(questionId, [...values[questionId], answerId])
                  }
                } else {
                  setFieldValue(questionId, [answerId])
                }
              }
            }

            return (
              <form onSubmit={handleSubmit}>
                {data?.questions?.map(
                  (
                    { id, question_type, answers, title, attachment_file },
                    index
                  ) => {
                    return (
                      <div
                        style={{ display: 'flex' }}
                        className={cls.testBlock}
                        key={id}
                      >
                        {attachment_file ? (
                          <img
                            src={attachment_file}
                            alt="img"
                            className={cls.Img}
                          />
                        ) : (
                          <Loader size={'35px'} />
                        )}
                        <div className={cls.testQues}>
                          <div>
                            <h2 className={cls.count}>{++index}</h2>
                            <div className={cls.line} />
                            <p className={cls.question}>
                              {title}{' '}
                              <span className={cls.attention}>
                                {'helpText'}
                              </span>{' '}
                            </p>{' '}
                            <br />
                          </div>
                          <FormControl
                            onChange={(e) =>
                              handleChange(question_type, id, e.target.value)
                            }
                            className={cls.form}
                          >
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="female"
                              name="radio-buttons-group"
                            >
                              {answers.map(({ id: qId, title }) => (
                                <div>
                                  <FormControlLabel
                                    key={qId}
                                    value={qId}
                                    className={cls.answer}
                                    control={
                                      question_type === 'R' ? (
                                        <Radio className={cls.radio} />
                                      ) : (
                                        <Checkbox className={cls.checkbox} />
                                      )
                                    }
                                    label={title}
                                  />
                                </div>
                              ))}
                            </RadioGroup>
                            {/* {console.log("touched",id,touched[id],"errors",id,errors[id])} */}
                            {touched[id] && errors[id] ? (
                              <p style={{ color: 'red' }}>{errors[id]}</p>
                            ) : (
                              ''
                            )}
                          </FormControl>
                        </div>
                      </div>
                    )
                  }
                )}
                <button type={'submit'} className={cls.btn}>
                  Отправить результаты
                </button>
              </form>
            )
          }}
        </Formik>
      )}
    </div>
  )
}

export default Tests

const tests = [
  {
    id: 'test_1',
    type: 'radio',
    label: 'Кто такой волонтер?',
    helpText: ' (выберите 1 вариант ответа)',
    img: first,
    count: '01',
    answers: [
      {
        id: 'test_1_question_1',
        answer: 'Движущая сила любого мероприятия, часть одной большой команды',
      },
      {
        id: 'test_1_question_2',
        answer: 'Движущая сила только одного мероприятия за весь сезон',
      },
      {
        id: 'test_1_question_3',
        answer: 'Отдельная движущая сила мероприятия, не часть команды',
      },
    ],
  },
]
