import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import cl from "./profile.module.scss";
import account from "../../img/loll.png";
// import ProcessBare from "../../components/proccesBare/ProcessBare";

const Profile = () => {
  const profile = {
    name: "Александр Иванов",
    data: "9 мая 1990",
    telephon: "+7 985 778 88 77",
    city: "Липецк",
    typeProfile: "Начальный",
    email: "ivanov@yandex.ru",
  };
  const [name, setName] = useState(profile);

  const [active, setActive] = useState(false);

  const handleChange = () => {
    const profile = {
      name: "ok",
      data: "9 мая 1990",
      telephon: "+7 985 778 88 77",
      city: "Липецк",
      typeProfile: "Начальный",
      email: "ivanov@yandex.ru",
    };
  };

  return (
    <MainLayout>
      <div className={cl.profile}>
        <h2 className={cl.title}>ЛИЧНЫЙ КАБИНЕТ</h2>
        <div className={cl.prof_block}>
          <div className={cl.photo}>
            <img className={cl.pho} src={account} alt="lol" />
          </div>

          <div className={cl.profile_detail}>
            <div className={cl.ok}>
              <div className={cl.min_block}>
                <p>Ваше имя и фамилия</p>
                {active === false ? (
                  <h5>{name.name}</h5>
                ) : (
                  <input
                    type="text"
                    value={name.name}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setName(name.name.e.target.value);
                    }}
                  />
                )}
              </div>
              <p>Дата рождения</p>
              <div className={cl.min_block}>
                {active === false ? (
                  <h5>{name.data}</h5>
                ) : (
                  <input
                    type="text"
                    value={name.data}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
              </div>
              <div className={cl.min_block}>
                <p>Телефон</p>
                {active === false ? (
                  <h5>{name.telephon}</h5>
                ) : (
                  <input
                    type="text"
                    value={name.telephon}
                    onChange={(e) =>
                      setName({
                        telephon: e.target.value,
                      })
                    }
                  />
                )}
              </div>
            </div>

            <div className="ok">
              <div className={cl.min_block}>
                <p>Город</p>
                {active === false ? (
                  <h5>{name.city}</h5>
                ) : (
                  <input
                    type="text"
                    value={name.city}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
              </div>
              <div className={cl.min_block}>
                <p>Тип профиля</p>
                {active === false ? (
                  <h5>{name.typeProfile}</h5>
                ) : (
                  <input
                    type="text"
                    value={name.typeProfile}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
              </div>
              <div className={cl.min_block}>
                <p>E-mail</p>
                {active === false ? (
                  <h5>{name.email}</h5>
                ) : (
                  <input
                    type="text"
                    value={name.email}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
              </div>
            </div>
            <div>
              {active === false ? (
                <button className={cl.btn_profie}>Изменить</button>
              ) : (
                <button className={cl.btn_profie}>Сохранить</button>
              )}
              {/* onClick={() => setActive(false)} */}
            </div>
          </div>

          <div className={cl.profile_cashh}>
            <div className={cl.profile_cash}></div>
          </div>
        </div>

        <hr style={{ marginTop: "57px" }} />

      </div>
    </MainLayout>
  );
};

export default Profile;
