import React from "react";
import Menu from '../Menu/Menu'
import cls from './mainLayout.module.scss'

export default function MainLayout({children}){
    return(
        <div className={cls.Main}>
            <Menu />
            <div className={cls.child}>
                {children}
            </div>
            <footer className={cls.footer}>Copyright © АНО “Гонка Героев” 2015 - 2020. ООО “Лига Героев Спорт Проджектс”</footer>
        </div>
    )
}


