import React from "react";
import HelpAccordion from "../../components/HelpAccordion/HelpAccordion";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "./help.module.scss";
import humanIcon from "../../static/img/contactHuman.svg";
import injenerIcon from "../../static/img/contactEngineer.svg";
import Radio from "../../components/RadioButton/RadioButton";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import { ReactComponent as UserIcon } from "../../static/img/userIcon.svg";
import { ReactComponent as PhoneIcon } from "../../static/img/phoneIcon.svg";
import { ReactComponent as MessageIcon } from "../../static/img/MessageIcon.svg";
import InputHelpPage from "../../components/InputHelpPage/InputHelpPage";
import CustomizedCheckbox from "../../components/HelpCheckbox/HelpCheckbox";
const radios = [
  "Запрос информации",
  "Жалобы и предложения",
  "Вопросы PR, рекламы, фото и видео",
  "Другое",
];

const Help = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>СВЯЗАТЬСЯ С НАМИ</h1>
        <div className={styles.contact__block}>
          <HelpAccordion
            title={"Вопросы к организаторам"}
            img={humanIcon}
            icon={humanIcon}
            backgroundColor={
              "linear-gradient(266.95deg, #982EEB -20.2%, #359AD2 132.4%), #151515"
            }
          >
            <p className={styles.summary__title}>Укажите тему вопроса:</p>
            <div className={styles.summary__radioButtons}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                >
                  <div className={styles.radio__container}>
                    {radios.map((item, index) => {
                      return (
                        <FormControlLabel
                          value={item}
                          key={`${item}__${index}`}
                          label=""
                          control={<Radio text={item} />}
                        />
                      );
                    })}
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </HelpAccordion>
        </div>
        <div className={styles.inputs__container}>
          <div className={styles.litle__inputs}>
            <InputHelpPage title="Ваше имя" text="имя" Icon={UserIcon} />
            <InputHelpPage
              title="Ваше фамилие"
              text="фамилия"
              Icon={UserIcon}
            />
            <InputHelpPage title="Ваш город" text="город" />
            <InputHelpPage title="Ваш email" text="email" Icon={MessageIcon} />
            <InputHelpPage
              title="Ваш номер телефона"
              text="номер телефона"
              Icon={PhoneIcon}
            />
            <div className={styles.table__quastion}>
              <InputHelpPage title="Ваш вопрос" text="Ваш вопрос" />
            </div>
          </div>
          <div className={styles.input__question}>
            <p className={styles.title}>Ваш вопрос</p>
            <textarea className={styles.textarea} placeholder="Ваш вопрос" />
          </div>
          <div className={styles.submit}>
            <button className={styles.button}>Отправить</button>
            <FormControlLabel className={styles.labelCheck}
              control={<CustomizedCheckbox />}
              label={
                <p className={styles.label}>
                  {" "}
                  Я согласен на обработку{" "}
                  <a href="#" className={styles.label__link}>
                    персональных данных
                  </a>{" "}
                </p>
              }
            />
          </div>
        </div>
        <div className={styles.injener__accordion}>
          <HelpAccordion
            title={"Технический вопрос"}
            img={injenerIcon}
            icon={injenerIcon}
            backgroundColor={
              "linear-gradient(266.95deg, #EB2E72 -20.2%, #D2B035 132.4%), #151515"
            }
          >
            <p className={styles.summary__title}>Укажите тему вопроса:</p>
            <div className={styles.summary__radioButtons}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                >
                  <div className={styles.radio__container}>
                    {radios.map((item, index) => {
                      return (
                        <FormControlLabel
                          value={item}
                          key={`${item}__${index}`}
                          label=""
                          control={<Radio text={item} />}
                        />
                      );
                    })}
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </HelpAccordion>
        </div>
      </div>
    </MainLayout>
  );
};

export default Help;
