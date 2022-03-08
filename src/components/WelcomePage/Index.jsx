import React from "react";
import cls from "./Welcome.module.scss";
import Title from "../_components/Title/Index";
import SecondaryButton from "../_components/SecondaryButton/Index";

function WelcomePage() {
    return (
        <div className={cls.WelcomeBlock}>
            <Title >Новый герой</Title>
            <Title>Зарегистрирован!</Title>
            <div className={cls.SubText}>
                <p>Спасибо тебе за регистрацию на нашей площадке</p>
                <p>
                    Проверь <a href="#">свою почту</a>, на нее мы выслали твой пароль от
                    личного кабинета.
                </p>
            </div>
            <SecondaryButton>Войдите в личный кабинет</SecondaryButton>
            <p className={cls.MailCheck}>Перед входом проверьте <a href="#"> почту!</a></p>
        </div>
    );
}

export default WelcomePage;
