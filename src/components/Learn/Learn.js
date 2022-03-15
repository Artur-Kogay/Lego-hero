import React from 'react'
import cl from './learn.module.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Learn = () => {
  const percentage = 90
  const progress = 50
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
              value={progress}
              text={`${progress}%`}
              styles={{
                root: {
                  color: 'black',
                },
              }}
            />
          </div>
          <div className={cl.left_inner}>
            <h4>
              69 <span> ИЗ 80</span>
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
