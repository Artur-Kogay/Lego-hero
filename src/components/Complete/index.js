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
        <p>
          Проверь свою почту, на нее направлена ссылка для активации аккаунта
        </p>
      </div>
      <p className={cls.MailCheck}></p>
    </div>
  )
}

export default Complete
