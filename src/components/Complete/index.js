import React from 'react'
import cls from './Welcome.module.scss'
import Title from '../_components/Title'
import SecondaryButton from '../_components/SecondaryButton'
import { DOMAIN } from '../../utils/constants'
import { Link } from 'react-router-dom'

function Complete() {
  return (
    <div className={cls.WelcomeBlock}>
      <Title>Новый герой</Title>
      <Title>Зарегистрирован!</Title>
      <div className={cls.SubText}>
        <p>Спасибо тебе за регистрацию на нашей площадке</p>
        <p>
          Проверь <a href={DOMAIN}>свою почту</a>, на нее мы выслали ссылку на
          активацию кода
        </p>
      </div>
      <p className={cls.MailCheck}></p>
    </div>
  )
}

export default Complete
