import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import cls from './study.module.scss'
import kurs from '../../img/kurs.svg'

const accordName = [
  { id: 1, title: 'КАТЕГОРИЯ 1', desc: 'Курсы + тесты' },
  { id: 2, title: 'КАТЕГОРИЯ 2', desc: 'Курсы + тесты' },
  { id: 3, title: 'КАТЕГОРИЯ 3', desc: 'Курсы + тесты' },
]
const accordDetails = [
  {
    id: 1,
    img: kurs,
    linear:
      'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)',
    name: 'НАЗВАНИЕ КУРСА #1',
    days: '25',
  },
  {
    id: 2,
    img: kurs,
    linear:
      'linear-gradient(267.53deg, #36E65D -0.27%, rgba(53, 163, 210, 0) 100%)',
    name: 'НАЗВАНИЕ КУРСА #2',
    days: '25',
  },
  {
    id: 3,
    img: kurs,
    linear:
      'linear-gradient(267.53deg, #9F76F7 -0.27%, rgba(53, 154, 210, 0) 100%)',
    name: 'НАЗВАНИЕ КУРСА #3',
    days: '25',
  },
  {
    id: 4,
    img: kurs,
    linear:
      'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)',
    name: 'НАЗВАНИЕ КУРСА #4',
    days: '25',
  },
]
const StudyAccord = () => {
  return (
    <div className={cls.StudyAccord}>
      {accordName.map((accord) => {
        return (
          <Accordion className={cls.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={cls.icon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={cls.accordSum}
            >
              <Typography className={cls.top} component={'div'}>
                <h2>{accord.title}</h2>
                <div className={cls.line} />
                <p>{accord.desc}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={cls.accordDetail}>
              <div className={cls.bottom}>
                {accordDetails.map((detail) => {
                  return (
                    <div className={cls.details}>
                      <div
                        className={cls.detailImg}
                        style={{
                          background: `${detail.linear} ,url(${detail.img})`,
                        }}
                      >
                        <p>{detail.name}</p>
                      </div>
                      <div className={cls.detailInfo}>
                        <div className={cls.days}>
                          <h3>СТАЛОСЬ КОЛИЧЕСТВО ДНЕЙ</h3>
                          <p>{detail.days}</p>
                        </div>
                        <div className={cls.detailLine} />
                        <div className={cls.btns}>
                          <button className={cls.btn1}>Пройти курс</button>
                          <button className={cls.btn2}>Пройти курс</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default StudyAccord
