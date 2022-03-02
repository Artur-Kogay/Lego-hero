import React from "react";
import Title from "../_components/Title/Index";
import Input from "../_components/Input/Index";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PrimaryButton from '../_components/PrimaryButton/Index'
import SecondaryButton from '../_components/SecondaryButton/Index'


import classes from './Login.module.scss'
import './style.css'
import Link from '@mui/material/Link'

const initialValues = {
    username: "",
    password: ""
};

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "Too Short!")
        .required("Введите номер телефона корректно!"),
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Введите пароль!"),
    first_name: Yup.string().required("Введите Имя корректно!"),
    last_name: Yup.string().required("Введите Фамилию корректно!"),
});

function LoginPage() {
    const handleSubmit = async (values) => {
        console.log("HandleSubmit");
    };
    return (
        <div className={classes.LoginBlock}>
        <Title>Авторизация</Title>
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => handleSubmit(values)}
            >
                {({ values, errors, touched, handleChange }) => (
                    <Form className={classes.form_inputs}>
                        <div>
                        <Input
                            label="Ваш e-mail"
                            name="email"
                            type="email"
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.last_name && touched.last_name && (
                            <p className={classes.text_danger}>
                                {errors.last_name}
                            </p>
                        )}
                        </div>
                        <div className={classes.FormInput}>
                        <Input
                            label="Пароль"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && touched.password && (
                            <p className={classes.text_danger}>
                                {errors.password}
                            </p>
                        )}
                        <div className="linkblock"><span className="LinkSelf"><Link className={classes.lll} href="#" >Отправить СМС повторно.</Link> Отправить СМС повторном можно будет через 144 сек.</span></div>
                        </div>
                        <div className={classes.ButtonContainer}>
                            <PrimaryButton>Войти</PrimaryButton>
                            <SecondaryButton>Зарегистрироваться</SecondaryButton>
                        </div>
                        <Link href="#" className="forgotpassword">Забыли пароль?</Link>
                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default LoginPage;
