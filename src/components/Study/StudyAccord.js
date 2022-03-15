import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import cls from './study.module.scss'
import kurs from '../../img/kurs.svg'
import { Link } from 'react-router-dom'
import { $api } from '../../services/api'

const getCategories = async () => {
  try {
    const { data } = await $api.get('categories/')
    return data
  } catch (e) {
    console.log(e)
  }
}

const StudyAccord = () => {
  const [categories, setCategories] = useState([])
  useEffect(async () => {
    getCategories().then((res) => setCategories(res))
  }, [])
  return (
    <div className={cls.StudyAccord}>
      {categories.map(({ title, exams }) => {
        return (
          <Accordion className={cls.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={cls.icon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={cls.accordSum}
            >
              <Typography className={cls.top} component={'div'}>
                <h2>{title}</h2>
                <div className={cls.line} />
                <p>Курсы + тесты</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={cls.accordDetail}>
              <div className={cls.bottom}>
                {exams.map(({ id, title }) => {
                  return (
                    <div className={cls.details} key={id}>
                      <div
                        className={cls.detailImg}
                        style={{
                          background: `linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)'`,
                        }}
                      >
                        <p>{title}</p>
                      </div>
                      <div className={cls.detailInfo}>
                        <div className={cls.days}>
                          <h3>СТАЛОСЬ КОЛИЧЕСТВО ДНЕЙ</h3>
                          <p>{15}</p>
                        </div>
                        <div className={cls.detailLine} />
                        <div className={cls.btns}>
                          <button className={cls.btn1}>Пройти курс</button>
                          <Link to={`/tests/${id}`}>
                            <button className={cls.btn2}>Пройти тест</button>
                          </Link>
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
