import React, { useEffect, useState } from 'react'
import cl from './learn.module.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { $api } from '../../services/api'

const getExams = async () => {
  try{
    const {data} = await $api.get('/exams/exams')
    return data
  }catch(e){
    console.log(e)
  }
}

const Learn = () => {
  const [exams, setExams] = useState()
  const [progressPer, setProgressPer] = useState(1)
  const passNum = 5;
  useEffect(async() => {
    getExams().then(res => {
    setExams(res)
    getProgress(res)
    })
  },[])

  const getProgress = (tests) => {
    const progressNum = Math.round((passNum * 100) / +tests.length)
    setProgressPer(progressNum)
  }

  let percentage = Math.round((105*100)/125)
  return (
    <div className={cl.learn_content}>
      <h1>ОБУЧЕНИЕ</h1>
      <div className={cl.inner}>
        <div className={cl.inner_left}>
          <div className={cl.circle}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                root: {
                  color: 'black',
                },
              }}
            />
          </div>
          <div className={cl.left_inner}>
            <h4>
              105 <span> ИЗ 125</span>
            </h4>
            <h5>Пройдено материалов</h5>
            <p>
              Волонтеры! Инструкторы! Всем привет! Мы ищем в команду всегда
              веселых и отважных ребят, жмякай подробнее.и отважных ребят,
              жмякай подробнее.
            </p>
          </div>
        </div>
        <div className={cl.inner_right}>
          <div className={cl.circle}>
            <CircularProgressbar
              className={cl.tests}
              value={progressPer}
              text={`${progressPer}%`}
              styles={{
                root: {
                  color: 'black',
                },
              }}
            />
          </div>
          <div className={cl.left_inner}>
            <h4>
              {passNum}<span> ИЗ {exams?.length}</span>
            </h4>
            <h5>Пройдено тестов</h5>
            <p>
              Волонтеры! Инструкторы! Всем привет! Мы ищем в команду всегда
              веселых и отважных ребят, жмякай подробнее.и отважных ребят,
              жмякай подробнее.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn
