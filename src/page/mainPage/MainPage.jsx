import MainLayout from "../../components/MainLayout/MainLayout";
import sty from "./MainPage.module.scss";
import React, {useState} from "react";
import {useTheme} from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Learn from "../../components/Learn/Learn";
import Stuff from "../../components/Stuff/Stuff";
import card from '../../static/img/bankCard.svg'

const MainPage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MainLayout>
      <div className={sty.main_container}>
        <div className={sty.first}>
          <div className={sty.slider}>
            <div className={sty.slider_left}>
              <h3>Оформите карту</h3>
              <h1>«ТВОЙ ЧЕМПИОНСКИЙ КЭШБЕК»</h1>
              <p>
                Получайте повышенный кэшбэк на расходы в категории
                спортивные товары! Кэшбэк начисляется на карту ежемесячно,
                что позволяет заработать до 36 000 рублей в год!
              </p>
              <button>Узнать подробнее</button>
            </div>
            <img className={sty.cardImg} src={card}/>
          </div>
          <div className={sty.cont}>
            <MobileStepper
              style={{background: "none"}}
              variant="dots"
              steps={3}
              position="static"
              activeStep={activeStep}
              sx={{
                color: "white",
                position: "relative",
                maxWidth: 800,
                flexGrow: 1,
              }}
            />
            <div className={sty.buttons_cont}>
              <button
                className={sty.buttonss}
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight/>
                ) : (
                  <KeyboardArrowLeft/>
                )}
              </button>
              <button
                className={sty.buttonss}
                size="small"
                onClick={handleNext}
                disabled={activeStep === 2}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft/>
                ) : (
                  <KeyboardArrowRight/>
                )}
              </button>
            </div>
          </div>
        </div>

        <Learn/>

        <Stuff/>
      </div>
    </MainLayout>
  );
};

export default MainPage;
