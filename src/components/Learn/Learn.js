import React, { useEffect, useState } from 'react'
import cl from './learn.module.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { $api } from '../../services/api'

const Learn = () => {
  const [exams, setExams] = useState()
  const [progress, setProgress] = useState(0)
  const [progressPer, setProgressPer] = useState()
  useEffect(async() => {
    try{
      const {data} = await $api.get('/exams/exams')
      setExams(data)
      getProgress(data)
    }catch(e){
      console.log(e)
    }
  },[])

  const getProgress = (tests) => {
    const progressNum = Math.round((progress*100) / +tests.length)
    setProgressPer(progressNum)
  }

  let percentage = Math.round((105*100)/125)
  let progress1 = Math.round((69*100)/80)
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
              {progress}<span> ИЗ {exams?.length}</span>
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
