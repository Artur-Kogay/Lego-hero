import React from 'react';
import cls from './event.module.scss'
import game from '../../img/event-game.svg'
import race1 from '../../img/event-race1.svg'
import race2 from '../../img/event-race2.svg'
import run from '../../img/event-run.svg'
import runTitle from '../../img/run.svg'
import raceTitle from '../../img/herosRace.svg'
import gameTitle from '../../img/herosgame.svg'
const Event = () => {
    const eventCard =[
        {id:1,img:run,h1:runTitle,date:"31 МАЯ",desc:"V ВСЕРОССИЙСКИ ПОЛУМАРАФОН ",city:"Во всех городах России",linear:"linear-gradient(267.53deg, #9F76F7 -0.27%, rgba(53, 154, 210, 0) 100%)"},
        {id:2,img:race1,h1:raceTitle,date:"23 АВГУСТА",desc:"OCR. ЗАБЕГ С ПРЕПЯТСТВИЯМИ",city:"Москва",linear1:"linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)"},
        {id:3,img:race2,h1:raceTitle,date:"18 ИЮНЯ",desc:"OCR. ЗАБЕГ С ПРЕПЯТСТВИЯМИ",city:"Санкт - Петербург",linear:'linear-gradient(267.53deg, #F77676 -0.27%, rgba(210, 53, 53, 0) 100%)',linear2:'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)'},
        {id:4,img:game,h1:gameTitle,date:"15 ИЮНЯ",desc:"OCR. ЗАБЕГ С ПРЕПЯТСТВИЯМИ",city:"Чита",linear:'linear-gradient(267.53deg, #36E65D -0.27%, rgba(53, 163, 210, 0) 100%)',linear2:'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)'},
        {id:5,img:race1,h1:raceTitle,date:"23 АВГУСТА",desc:"OCR. ЗАБЕГ С ПРЕПЯТСТВИЯМИ",city:"Москва",linear:'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)',linear2:'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)'},
        {id:6,img:game,h1:gameTitle,date:"15 ИЮНЯ",desc:"V ВСЕРОССИЙСКИ ПОЛУМАРАФОН ",city:"Чита",linear:'linear-gradient(267.53deg, #36E65D -0.27%, rgba(53, 163, 210, 0) 100%)',linear2:'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)'},
        {id:7,img:run,h1:runTitle,date:"31 МАЯ",desc:"V ВСЕРОССИЙСКИ ПОЛУМАРАФОН ",city:"Во всех городах России",linear:'linear-gradient(267.53deg, #9F76F7 -0.27%, rgba(53, 154, 210, 0) 100%)',linear2:'linear-gradient(269.65deg, #F77676 -18.16%, rgba(210, 53, 53, 0) 100%)'}
    ]
    return (
        <div className={cls.event}>
            <h1 className={cls.h1}>МЕРОПРИЯТИЯ</h1>
            <div className={cls.eventsList}>
                {eventCard.map((item) => {
                    return(
                        <div className={cls.eventItem} style={{ 
                            background: `${item.linear},url(${item.img})` ,
                        }}>
                            <img className={cls.name} src={item.h1}/>
                            <h2 className={cls.date}>{item.date}</h2>
                            <p className={cls.desc}>{item.desc}</p>
                            <p className={cls.city}>{item.city}</p>
                            <button className={cls.participate}>Принять участие</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Event;