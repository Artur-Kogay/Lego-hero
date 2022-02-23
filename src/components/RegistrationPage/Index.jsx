import React from "react";

import Input from "../_components/Input/Index";
import Title from "../_components/Title/Index";
import { Formik, Form } from "formik";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import PrimaryButton from "../_components/PrimaryButton/Index";
import SecondaryButton from "../_components/SecondaryButton/Index";

import classes from "./Registration.module.scss";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const initialValues = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    vk: "",
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

function RegistrationPage() {
    const [value, setValue] = React.useState(null);
    const handleSubmit = async (values) => {
        console.log("HandleSubmit");
    };

    return (
        <div className={classes.registration_block}>
            <Title>Регистрация героя</Title>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ values, errors, touched, handleChange }) => (
                    <Form className={classes.form_inputs}>
                        <Input
                            label="Фамилия"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                        />
                        {errors.last_name && touched.last_name && (
                            <p className={classes.text_danger}>
                                {errors.last_name}
                            </p>
                        )}

                        <Input
                            label="Имя"
                            name="first_name"
                            variant="outlined"
                            value={values.first_name}
                            onChange={handleChange}
                        />
                        {errors.first_name && touched.first_name && (
                            <p className={classes.text_danger}>
                                {errors.first_name}
                            </p>
                        )}

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Дата рождения"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        color="secondary"
                                        style={{
                                            width: 420,
                                            marginTop: 18,
                                        }}
                                        {...params}
                                    />
                                )}
                            />
                        </LocalizationProvider>

                        <Input
                            label="Город"
                            name="city"
                            variant="outlined"
                            value={values.city}
                            onChange={handleChange}
                        />
                        {errors.first_name && touched.first_name && (
                            <p className={classes.text_danger}>
                                {errors.first_name}
                            </p>
                        )}

                        <FormControl className={classes.FormControl}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                className={classes.RadioGroup}
                            >
                                <FormControlLabel
                                    value="judge"
                                    control={<Radio />}
                                    label="Судья"
                                    className={classes.FormControlLabel}
                                />
                                <FormControlLabel
                                    value="volunteer"
                                    control={<Radio />}
                                    label="Волонтер"
                                    className={classes.FormControlLabel}
                                />
                                <FormControlLabel
                                    value="instructor"
                                    control={<Radio />}
                                    label="Инструктор"
                                    className={classes.FormControlLabel}
                                />
                                <FormControlLabel
                                    value="trainer"
                                    control={
                                        <Radio
                                            sx={{
                                                color: "rgba(255, 255, 255, 0.6)",
                                                "&.Mui-checked": {
                                                    color: "rgba(255, 255, 255, 0.6)"
                                                },
                                            }}
                                        />
                                    }
                                    label="Тренер"
                                    className={classes.FormControlLabel}
                                />
                            </RadioGroup>
                        </FormControl>

                        <Input
                            label="Почта"
                            name="mail"
                            type="email"
                            variant="outlined"
                            value={values.mail}
                            onChange={handleChange}
                        />
                        {errors.first_name && touched.first_name && (
                            <p className={classes.text_danger}>
                                {errors.first_name}
                            </p>
                        )}

                        <Input
                            label="Номер"
                            name="number"
                            type="phone"
                            variant="outlined"
                            value={values.number}
                            onChange={handleChange}
                        />
                        {errors.first_name && touched.first_name && (
                            <p className={classes.text_danger}>
                                {errors.first_name}
                            </p>
                        )}

                        <Input
                            label="VKontakte"
                            name="vk"
                            type="text"
                            variant="outlined"
                            value={values.vk}
                            onChange={handleChange}
                            placeholder="Вставьте ссылку на Ваш профиль"
                        />
                        {errors.first_name && touched.first_name && (
                            <p className={classes.text_danger}>
                                {errors.first_name}
                            </p>
                        )}

                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Я согласен на обработку персональных данных"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Я хочу получать рассылку и новости о акциях и новинках компании"
                            />
                        </FormGroup>
                        <div className={classes.ButtonContainer}>
                            <PrimaryButton>Зарегистрироваться</PrimaryButton>
                            <SecondaryButton>Уже есть аккаунт?</SecondaryButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegistrationPage;
