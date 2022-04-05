import stuffAva from '../../static/img/heroPhotoPng.png'
import mask from '../../img/Mask-4.jpg'
import styles from './stuff.module.scss'
import sudya from '../../img/sudya.png'
import inst from '../../img/instruktor.png'
import trener from '../../img/trener.png'
import mask1 from '../../img/Mask-1.jpg'
import mask2 from '../../img/Mask-2.jpg'
import mask3 from '../../img/Mask-3.jpg'
import { useMediaQuery } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import SecondaryButton from '../_components/SecondaryButton'

const stuffs = [
  {
    id: 'stuff-1',
    title: 'СУДЬЯ',
    description: 'Честность, профессионализм, внимательность',
    stuffAva: sudya,
    mask: mask1,
    color: '#FEEC4F',
    skills: [
      'Четко следует регламентам',
      'Оценивает прохождение препятствий\n',
      'Следит за выполением правил и беспристрастно выносит решения',
    ],
  },
  {
    id: 'stuff-2',
    title: 'ИНСТРУКТОР',
    description: 'Честность, профессионализм, внимательность',
    stuffAva: inst,
    mask: mask2,
    color: '#80E396',
    skills: [
      'Четко следует регламентам',
      'Оценивает прохождение препятствий\n',
      'Следит за выполением правил и беспристрастно выносит решения',
    ],
  },
  {
    id: 'stuff-3',
    title: 'ТРЕНЕР',
    description: 'Честность, профессионализм, внимательность',
    stuffAva: trener,
    mask: mask3,
    color: '#359AD2',
    skills: [
      'Четко следует регламентам',
      'Оценивает прохождение препятствий\n',
      'Следит за выполением правил и беспристрастно выносит решения',
    ],
  },
  {
    id: 'stuff-4',
    title: 'ВОЛОНТЕР',
    description: 'Честность, профессионализм, внимательность',
    stuffAva: stuffAva,
    mask: mask,
    color: '#FEEC4F',
    skills: [
      'Четко следует регламентам',
      'Оценивает прохождение препятствий\n',
      'Следит за выполением правил и беспристрастно выносит решения',
    ],
  },
]
// import required modules

export default function Stuff() {
  const isLaptop = useMediaQuery('(max-width: 1200px)')
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>КТО ВАС ЖДЕТ</h2>

      <div className={styles.stuffsMainWrapper}>
        {isLaptop ? (
          // <div>
          <Swiper
            slidesPerView={isLaptop && !isMobile ? 2 : 1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {stuffs.map(
              ({ id, title, description, stuffAva, mask, color, skills }) => (
                <SwiperSlide key={`Stuffs-${id}`}>
                  <div className={styles.stuffsWrapper}>
                    <div className={styles.maskWrapper}>
                      <div
                        className={styles.mask}
                        style={{ backgroundImage: `url('${mask}')` }}
                      />
                      <img src={stuffAva} alt="" />
                    </div>
                    <div className={styles.contentWrapper}>
                      <p className={styles.stuffSkillTitle}>{title}</p>
                      <p className={styles.stuffSkillDesc}>{description}</p>
                      <ul className={styles.skills}>
                        {skills.map((skill) => (
                          <li
                            className={styles.skill}
                            key={`stuffsSkills-${id}-${skill}`}
                          >
                            <div
                              className={styles.circle}
                              style={{ backgroundColor: color }}
                            />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                      <SecondaryButton className={styles.moreBtn}>
                        Подробнее
                      </SecondaryButton>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        ) : (
          // </div>
          stuffs.map(
            ({ id, title, description, stuffAva, mask, color, skills }) => (
              <div key={`Stuffs-${id}`} className={styles.stuffsWrapper}>
                <div className={styles.maskWrapper}>
                  <div
                    className={styles.mask}
                    style={{ backgroundImage: `url('${mask}')` }}
                  />
                  <img src={stuffAva} alt="" />
                </div>
                <div className={styles.contentWrapper}>
                  <p className={styles.stuffSkillTitle}>{title}</p>
                  <p className={styles.stuffSkillDesc}>{description}</p>
                  <ul className={styles.skills}>
                    {skills.map((skill) => (
                      <li
                        className={styles.skill}
                        key={`stuffsSkills-${id}-${skill}`}
                      >
                        <div
                          className={styles.circle}
                          style={{ backgroundColor: color }}
                        />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={styles.moreBtn}>Подробнее</button>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  )
}
