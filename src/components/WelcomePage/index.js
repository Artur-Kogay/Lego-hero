import React from 'react'
import cls from './Welcome.module.scss'
import Title from '../_components/Title'
import SecondaryButton from '../_components/SecondaryButton'
import {DOMAIN} from "../../utils/constants";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function WelcomePage() {
  return (
    <div className={cls.WelcomeBlock}>
      <Title>Новый герой</Title>
      <Title>Зарегистрирован!</Title>
      <div className={cls.SubText}>
        <p>Спасибо тебе за регистрацию на нашей площадке</p>
        <p>
          Проверь <a href={DOMAIN}>свою почту</a>, на нее мы выслали твой пароль от
          личного кабинета.
        </p>
      </div>
      <NavLink to='/profile'><SecondaryButton>Войдите в личный кабинет</SecondaryButton></NavLink>
      <p className={cls.MailCheck}>
        Перед входом проверьте <a href={DOMAIN}> почту!</a>
      </p>
    </div>
  )
}

export default WelcomePage
