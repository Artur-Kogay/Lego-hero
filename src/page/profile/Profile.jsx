import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import cl from "./profile.module.scss"
import account from '../../static/img/loll.png'

const Profile = () => {
  return (
    <MainLayout>
      <div className={cl.profile}>

        <h2 className={cl.title}>ЛИЧНЫЙ КАБИНЕТ</h2>
        <div className={cl.prof_block}>
          <div className={cl.photo}>
            <img className={cl.pho} src={account} alt='lol'/>
          </div>

          <div className={cl.profile_detail}>

            <div className={cl.ok}>
              <div className={cl.min_block}>
                <p>Ваше имя и фамилия</p>
                <h5>Александр Иванов</h5>
              </div>
              <div className={cl.min_block}>
                <p>Дата рождения</p>
                <h5>9 мая 1990</h5>
              </div>
              <div className={cl.min_block}>
                <p>Телефон</p>
                <h5>+7 985 778 88 77</h5>
              </div>
            </div>

            <div className="ok">
              <div className={cl.min_block}>
                <p>Город</p>
                <h5>Липецк</h5>
              </div>
              <div className={cl.min_block}>
                <p>Тип профиля</p>
                <h5>Начальный</h5>
              </div>
              <div className={cl.min_block}>
                <p>E-mail</p>
                <h5>ivanov@yandex.ru</h5>
              </div>
            </div>
            <div>
              <button className={cl.btn_profie}>
                Изменить
              </button>
            </div>

          </div>

          <div className={cl.profile_cashh}>
            <div className={cl.profile_cash}></div>

          </div>

        </div>

        <hr style={{marginTop: '57px'}}/>

      </div>
    </MainLayout>
  );
};

export default Profile;
