import React from 'react';
import cls from './study.module.scss'
import StudyAccord from './StudyAccord';
import Learn from '../Learn/Learn';
const Study = () => {
    return (
        <div className={cls.study}>
            <Learn/>
            <StudyAccord />
        </div>
    );
};

export default Study;