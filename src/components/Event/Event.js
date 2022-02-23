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
        {id:1,img:run,h1:runTitle},
        {id:2,img:race1,h1:raceTitle},
        {id:3,img:race2,h1:raceTitle},
        {id:4,img:game,h1:gameTitle},
        {id:5,img:race1,h1:raceTitle},
        {id:6,img:game,h1:gameTitle},
        {id:7,img:run,h1:runTitle}
    ]
    return (
        <div className={cls.event}>
            <h1 className={cls.h1}>МЕРОПРИЯТИЯ</h1>
            <div className={cls.eventsList}>
                {eventCard.map((item) => {
                    return(
                        <div style={{ 
                            backgroundImage: `url(${item.img})` ,
                        }}>
                            <h1><img src={item.h1}/></h1>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Event;