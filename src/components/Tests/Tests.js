import React from 'react'
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

const Tests = () => {
  // const { values ,errors,touched, setFieldValue, onSubmit } = useFormik({
  //     initialValues,
  //     validateSchema,
  //     onSubmit: (values) => {console.log(values)},
  //   });
  const validateSchema = Yup.object().shape(
    tests.reduce((state, { id }) => {
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

  return (
    <div className={cls.Test}>
      <p className={cls.direction}>Главная Тест</p>
      <h2 className={cls.pageName}>ТЕСТ</h2>
      <h1 className={cls.pageDesc}>ВОЛОНТЕРСКИЙ МАТЕРИАЛ</h1>
      <Formik
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        validationSchema={validateSchema}
        initialValues={initialValues}
        style={{ display: 'flex', flexDirection: 'column', gridGap: 100 }}
      >
        {({ values, touched, errors, setFieldValue, handleSubmit }) => {
          console.log(values)

          const handleChange = (type, questionId, answerId) => {
            // проверка на тип вопроса
            if (type === 'radio') {
              // задаем значение radio вопроса, тут просто идет замена старого значения на новый
              setFieldValue(questionId, answerId)
            } else if (type === 'checkbox') {
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
              {tests.map(
                ({ id, type, answers, helpText, label, count, img }) => {
                  return (
                    <div
                      style={{ display: 'flex' }}
                      className={cls.testBlock}
                      key={id}
                    >
                      <img src={img} alt="img" className={cls.Img} />
                      <div className={cls.testQues}>
                        <div>
                          <h2 className={cls.count}>{count}</h2>
                          <div className={cls.line}/>
                          <p className={cls.question}>
                            {label}{' '}
                            <span className={cls.attention}>{helpText}</span>{' '}
                          </p>{' '}
                          <br />
                        </div>
                        <FormControl
                          onChange={(e) =>
                            handleChange(type, id, e.target.value)
                          }
                          className={cls.form}
                        >
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            {answers.map(({ id: qId, answer }) => (
                              <div>
                                <FormControlLabel
                                  key={qId}
                                  value={qId}
                                  className={cls.answer}
                                  control={
                                    type === 'radio' ? (
                                      <Radio className={cls.radio} />
                                    ) : (
                                      <Checkbox className={cls.checkbox} />
                                    )
                                  }
                                  label={answer}
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
              <button type="submit" className={cls.btn}>
                Отправить результаты
              </button>
            </form>
          )
        }}
      </Formik>
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
  {
    id: 'test_2',
    type: 'radio',
    label: 'Какие основные цели Волонтёрского центра Лига Героев? ',
    helpText: ' (выберите 1 вариант ответа)',
    img: second,
    count: '02',
    answers: [
      {
        id: 'test_2_question_1',
        answer:
          'Обеспечение мероприятий Лиги Героев волонтерским составом, повышение внутренней мотивации и желания развиваться, проведение предварительной подготовки и обучения волонтеров перед мероприятиями ',
      },
      {
        id: 'test_2_question_2',
        answer:
          'Необеспечение мероприятий Лиги Героев волонтерским составом, повышение внутренней мотивации и желания развиваться, проведение предварительной подготовки и обучения волонтеров после мероприятия',
      },
      {
        id: 'test_2_question_3',
        answer:
          'Обеспечение мероприятий Лиги Героев волонтерским составом, повышение внутренней мотивации и желания развиваться, проведение предварительной подготовки и обучения волонтеров после мероприятия   ',
      },
    ],
  },
  {
    id: 'test_3',
    type: 'checkbox',
    label: 'Ты ответственен за?  ',
    helpText: ' (несколько вариантов ответа)',
    img: third,
    count: '03',
    answers: [
      {
        id: 'test_3_question_1',
        answer: 'Свой внешний вид ',
      },
      {
        id: 'test_3_question_2',
        answer: 'Соблюдение техники безопасности',
      },
      {
        id: 'test_3_question_3',
        answer: 'За внешний вид участников ',
      },
      {
        id: 'test_3_question_4',
        answer: 'Выполнение поставленных тебе задач ',
      },
    ],
  },
  {
    id: 'test_4',
    type: 'radio',
    label: 'Структура развития? ',
    helpText: '  (выбери правильный ответ)',
    img: fourth,
    count: '04',
    answers: [
      {
        id: 'test_4_question_1',
        answer:
          'Волонтер – волонтер/судья – старший волонтер – координатор волонтерского центра ',
      },
      {
        id: 'test_4_question_2',
        answer:
          'Стажер – старший волонтер – волонтер – координатор ВЦ – волонтер/судья ',
      },
      {
        id: 'test_4_question_3',
        answer:
          'Старший волонтер – волонтер – координатор ВЦ – волонтер/судья – стажер ',
      },
      {
        id: 'test_4_question_4',
        answer:
          'Волонтер – координатор ВЦ – волонтер/судья – Стажер  – старший волонтер',
      },
    ],
  },
  {
    id: 'test_5',
    type: 'checkbox',
    label: 'Какие основные функции на мероприятиях ? ',
    helpText: ' (выберите несколько вариантов ответа)',
    img: fifth,
    count: '05',
    answers: [
      {
        id: 'test_5_question_1',
        answer: 'Старт',
      },
      {
        id: 'test_5_question_2',
        answer: 'Финиш',
      },
      {
        id: 'test_5_question_3',
        answer: 'Регистрация',
      },
      {
        id: 'test_5_question_4',
        answer: 'Медицина',
      },
      {
        id: 'test_5_question_5',
        answer: 'Траса/ пит-стопы ',
      },
      {
        id: 'test_5_question_6',
        answer: 'Полевая кухня ',
      },
      {
        id: 'test_5_question_7',
        answer: 'Фан-Зона',
      },
      {
        id: 'test_5_question_8',
        answer: 'Камера хранения ',
      },
      {
        id: 'test_5_question_9',
        answer: 'Проверка внешнего вида участников ',
      },
      {
        id: 'test_5_question_10',
        answer: 'Проверка качественной постройки трассы ',
      },
      {
        id: 'test_5_question_11',
        answer: 'Проверка оборудования ',
      },
    ],
  },
]

const initialValues = tests.reduce((state, { id }) => {
  return { ...state, [id]: null }
}, {})
