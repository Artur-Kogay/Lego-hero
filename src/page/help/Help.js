import React from 'react';
import HelpAccordion from '../../components/HelpAccordion/HelpAccordion';
import MainLayout from '../../components/MainLayout/index';
import styles from "./help.module.scss";
import humanIcon from "../../img/contactHuman.svg";
const Help = () => {
    return (
        <MainLayout>
            <main className={styles.container}>
                <div className={styles.contact__block}>
                        <HelpAccordion title={"Вопросы к организаторам"} img={humanIcon} icon={humanIcon} backgroundColor={"linear-gradient(266.95deg, #982EEB -20.2%, #359AD2 132.4%), #151515"}>
                            Content
                        </HelpAccordion>
                </div>
            </main>
        </MainLayout>
    );
};

export default Help;