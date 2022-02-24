import React from "react";
import Menu from '../Menu/Menu'
import cls from './mainLayout.module.scss'
import { useMediaQuery } from "@mui/material";
export default function MainLayout({children}){
    const isMob = useMediaQuery("(max-width:768px)")
    return(
        <div className={`${cls.Main} ${isMob ? `${cls.MainMob}`:`${cls.MainDesktop}`}`}>
            <Menu />
            <div className={cls.child}>
                {children}
            </div>
            <footer className={cls.footer}>Copyright © АНО “Гонка Героев” 2015 - 2020. ООО “Лига Героев Спорт Проджектс”</footer>
        </div>
    )
}


