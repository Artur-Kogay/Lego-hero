import MainLayout from '../../components/MainLayout/MainLayout'
import sty from './MainPage.module.scss'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import MobileStepper from '@mui/material/MobileStepper'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import Learn from '../../components/Learn/Learn'
import Stuff from '../../components/Stuff/Stuff'
import card from '../../static/img/bankCard.svg'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Box } from '@mui/material'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const banners = [
  {
    img: card,
    title: 'Оформите карту',
    mainTitle: 'ТВОЙ ЧЕМПИОНСКИЙ КЭШБЕК',
    description:
      'Получайте повышенный кэшбэк на расходы в категории спортивные\n' +
      '                товары! Кэшбэк начисляется на карту ежемесячно, что позволяет\n' +
      '                заработать до 36 000 рублей в год!',
  },
  {
    img: card,
    title: 'Оформите карту',
    mainTitle: 'ТВОЙ ЧЕМПИОНСКИЙ КЭШБЕК',
    description:
      'Получайте повышенный кэшбэк на расходы в категории спортивные\n' +
      '                товары! Кэшбэк начисляется на карту ежемесячно, что позволяет\n' +
      '                заработать до 36 000 рублей в год!',
  },
  {
    img: card,
    title: 'Оформите карту',
    mainTitle: 'ТВОЙ ЧЕМПИОНСКИЙ КЭШБЕК',
    description:
      'Получайте повышенный кэшбэк на расходы в категории спортивные\n' +
      '                товары! Кэшбэк начисляется на карту ежемесячно, что позволяет\n' +
      '                заработать до 36 000 рублей в год!',
  },
  {
    img: card,
    title: 'Оформите карту',
    mainTitle: 'ТВОЙ ЧЕМПИОНСКИЙ КЭШБЕК',
    description:
      'Получайте повышенный кэшбэк на расходы в категории спортивные\n' +
      '                товары! Кэшбэк начисляется на карту ежемесячно, что позволяет\n' +
      '                заработать до 36 000 рублей в год!',
  },
]
const MainPage = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleStepChange = (step) => {
    setActiveStep(step)
  }
  useEffect(() => {
    console.log(activeStep)
  }, [activeStep])
  return (
    <MainLayout>
      <div className={sty.main_container}>
        <div className={sty.first}>
          <div className={sty.sliderBlock}>
            <AutoPlaySwipeableViews
              autoplay={false}
              style={{ maxWidth: '100%', flexGrow: 1 }}
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {banners.map((step, index) => (
                <div className={sty.slider}>
                  <div className={sty.slider_left}>
                    <h3>{step.title}</h3>
                    <h1>«{step.mainTitle}»</h1>
                    <p>{step.description}</p>
                    <button>Узнать подробнее</button>
                  </div>
                  <img className={sty.cardImg} src={step.img} alt="carImg" />
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </div>

          <div className={sty.cont}>
            <div
              style={{
                color: 'white',
                position: 'relative',
                maxWidth: 800,
                flexGrow: 1,
                display: 'flex',
              }}
            >
              {banners.map((item, index) => (
                <Box
                  onClick={() => setActiveStep(index)}
                  sx={{
                    width: '26px',
                    height: '4px',
                    borderRadius: '2px',
                    margin: '2px',
                    background: activeStep === index ? 'white' : '#27262F',
                    transition: '0.8s',
                    cursor: 'pointer',
                  }}
                >
                  {''}
                </Box>
              ))}
            </div>
            <div className={sty.buttons_cont}>
              <button
                className={sty.buttonss}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </button>
              <button
                className={sty.buttonss}
                onClick={handleNext}
                disabled={activeStep === banners.length - 1}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </button>
            </div>
          </div>
        </div>

        <Learn />

        <Stuff />
      </div>
    </MainLayout>
  )
}

export default MainPage
