import React, { useEffect, useState } from 'react'
import cls from './event.module.scss'
import game from '../../static/img/event-game.jpeg'
import race1 from '../../static/img/event-race1.jpeg'
import race2 from '../../static/img/event-race2.jpeg'
import run from '../../static/img/event-run.jpeg'
import runTitle from '../../static/img/run.svg'
import raceTitle from '../../static/img/herosRace.svg'
import gameTitle from '../../static/img/herosgame.svg'
import axios from 'axios'

const eventCard = [
  {
    id: 1,
    img: run,
    h1: runTitle,
    date: '31 МАЯ',
    desc: 'V ВСЕРОССИЙСКИ ПОЛУМАРАФОН ',
    city: 'Во всех городах России',
    linear:
      'linear-gradient(267.53deg, #9F76F7 -0.27%, rgba(53, 154, 210, 0) 100%)',
  },
  {
    id: 2,
    img: race1,
    h1: raceTitle,
    date: '23 АВГУСТА',
    desc: 'OCR. ЗАБЕГ С ПРЕПЯТСТВИЯМИ',
    city: 'Москва',
    linear:
      'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)',
  },
  {
    id: 3,
    img: race2,
    h1: raceTitle,
    date: '18 ИЮНЯ',
    desc: 'OCR. ЗАБЕГ С ПРЕПЯТСТВИЯМИ',
    city: 'Санкт - Петербург',
    linear:
      'linear-gradient(267.53deg, #F77676 -0.27%, rgba(210, 53, 53, 0) 100%)',
    linear2:
      'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)',
  },
  {
    id: 4,
    img: game,
    h1: gameTitle,
    date: '15 ИЮНЯ',
    desc: 'OCR. ЗАБЕГ С ПРЕПЯТСТВИЯМИ',
    city: 'Чита',
    linear:
      'linear-gradient(267.53deg, #36E65D -0.27%, rgba(53, 163, 210, 0) 100%)',
    linear2:
      'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)',
  },
  {
    id: 5,
    img: race1,
    h1: raceTitle,
    date: '23 АВГУСТА',
    desc: 'OCR. ЗАБЕГ С ПРЕПЯТСТВИЯМИ',
    city: 'Москва',
    linear:
      'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)',
    linear2:
      'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)',
  },
  {
    id: 6,
    img: game,
    h1: gameTitle,
    date: '15 ИЮНЯ',
    desc: 'V ВСЕРОССИЙСКИ ПОЛУМАРАФОН ',
    city: 'Чита',
    linear:
      'linear-gradient(267.53deg, #36E65D -0.27%, rgba(53, 163, 210, 0) 100%)',
    linear2:
      'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)',
  },
  {
    id: 7,
    img: run,
    h1: runTitle,
    date: '31 МАЯ',
    desc: 'V ВСЕРОССИЙСКИ ПОЛУМАРАФОН ',
    city: 'Во всех городах России',
    linear:
      'linear-gradient(267.53deg, #9F76F7 -0.27%, rgba(53, 154, 210, 0) 100%)',
    linear2:
      'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)',
  },
]

const monthName = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Агуст',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

const getEvents = async () => {
  try {
    const { data } = await axios.get('https://heroleague.ru/api/event/list')
    return data
  } catch (e) {
    console.log(e.response)
  }
}
const getEventDate = (unixDate) => {
  const date = new Date(unixDate * 1000)
  return `${date.getDate()} ${monthName[date.getMonth()]}`
}
// --------------------------------------------------
const Event = () => {
  const [readyEvents, setReadyEvents] = useState(null)
  const [events, setEvents] = useState(null)
  const [currentDate, setCurrentDate] = useState(new Date().getTime() / 1000)
  const memo = React.useMemo(() => {
    let current = []

    !!events &&
      events.map(({ title, event_city, title_above, external_url }) => {
        event_city.forEach((item) => {
          if (item.start_time >= currentDate)
            current.push({
              data: item.start_time,
              title,
              description: title_above,
              address: item.address,
              external_url,
              id: item.id,
            })
        })
      })
    let readyData = current.sort((a, b) => a.data - b.data).splice(0, 10)
    setReadyEvents(readyData)
  }, [events])

  useEffect(async () => {
    getEvents().then((res) => {
      setEvents(res.values)
      // console.log(res.values)
    })
  }, [])
  return (
    <div className={cls.event}>
      <h1 className={cls.h1}>МЕРОПРИЯТИЯ</h1>
      <div className={cls.eventsList}>
        {readyEvents &&
          readyEvents?.map(
            ({
              id,
              data,
              title,
              description,
              address,
              external_url,
              banners,
            }) => {
              return (
                <div
                  key={id}
                  className={cls.eventItem}
                  style={{
                    background: `url(${banners?.home_page?.desktop_picture})`,
                    backgroundSize: `cover`,
                  }}
                >
                  <img className={cls.name} alt="name" src={eventCard[0].h1} />
                  <h2 className={cls.date}>{getEventDate(data)}</h2>
                  <p className={cls.desc}>{description}</p>
                  <p className={cls.city}>{address}</p>
                  <a
                    href={`https://heroleague.ru${external_url}`}
                    target={'_blank'}
                  >
                    <button className={cls.participate}>Принять участие</button>
                  </a>
                </div>
              )
            }
          )}
      </div>
    </div>
  )
}

export default Event
