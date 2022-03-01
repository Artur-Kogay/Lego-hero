import React from 'react';
import cls from './course.module.scss'
import first from '../../img/first.svg'
import second from '../../img/second.svg'
const Course = () => {
    return (
        <div className={cls.course}>
            <p className={cls.direction}>Главная > Курс</p>
            <h1 className={cls.pageName}>КУРС</h1>
            <div className={cls.firstBlock}>
                <h3 className={cls.greetings}>ПРИВЕТСТВУЕМ, ДОРОГОЙ ДРУГ!</h3>
                <div className={cls.aboutVolonter}>
                    <div>
                        <h4>КТО ТАКОЙ ВОЛОНТЕР</h4>
                        <p>
                            Волонтер -  это движущая сила любого мероприятия, <br/>
                            часть одной большой команды.
                        </p>
                    </div>
                    <div>
                        <h4>ЗАЧЕМ СТАНОВИТСЯ ВОЛОНТЕРОМ?</h4>
                        <p>
                            Стань волонтёром Лиги Героев и приобрети бесценный <br/>
                            опыт, новых друзей и единомышленников!
                        </p>
                    </div>
                </div>
                <button className={cls.btnVolonter}>Стать волонтером</button>
            </div>
            <img className={cls.firstImg} src={first}/>
            <div className={cls.secondBlock}>
                <h3 className={cls.goals}>ЦЕЛИ ВОЛОНТЕРСКОГО ЦЕНТРА ЛИГА ГЕРОЕВ:</h3>
                <div className={cls.volonterGoals}>
                    <div>
                        <div><div/> <p>Обеспечение мероприятий Лиги Героев волонтерским составом</p></div>
                        <div><div/> <p>Проведение предварительной подготовки и обучения волонтеров перед мероприятиями</p></div>
                        <div><div/> <p>Постоянное улучшение качества работы волонтеров на мероприятиях</p></div>
                        <div><div/> <p>Ознакомление волонтеров с миссиями и целями проектов Лиги Героев</p></div>
                    </div>
                    <div>
                        <div><div/> <p>Повышение уровня лояльности и преданности волонтеров к проектам Лиги Героев</p></div>
                        <div><div/> <p>Обеспечение доступных условий для личностного роста волонтеров Центра</p></div>
                        <div><div/> <p>Повышение внутренней мотивации и желания развиваться в активной команде</p></div>
                    </div>
                </div>
            </div>
            <img className={cls.secondImg} src={second}/>
            <div className={cls.thirdBlock}>
                <h3 className={cls.causes}>ЧТО БУДЕТ, ЕСЛИ ТЫ ПРИДЕШЬ К НАМ?</h3>
                <div className={cls.infoAbout}>
                    <div>
                        <h4>ДЛЯ ТЕБЯ</h4>
                        <div><div/> <p>Участие в организации популярного спортивного проекта; </p></div>
                        <div><div/> <p>Новые знакомства с интересными людьми; </p></div>
                        <div><div/> <p>Вкусная полевая кухня; </p></div>
                        <div><div/> <p>Эмоции и впечатления, о которых ты будешь рассказывать друзьям; </p></div>
                        <div><div/> <p>Фирменная футболка, браслет и благодарность от организаторов! </p></div>
                        <div><div/> <p>Яркие и эмоциональные фото!</p></div>
                        <div><div/> <p>Спортивная движуха разного уровня сложности</p></div>
                    </div>
                    <div>
                        <h4>ЧТО НУЖНО, ЧТОБЫ СТАТЬ ВОЛОНТЕРОМ:</h4>
                        <div><div/> <p>Возраст от 16 лет;</p></div>
                        <div><div/> <p>Немного общительности;</p></div>
                        <div><div/> <p>Много ответственности;</p></div>
                        <div><div/> <p>Желание расти и развиваться в спортивной и успешной команде!</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;