import React from 'react'
import cls from './course.module.scss'
import first from '../../img/first.jpg'
import second from '../../img/second.jpg'
import third from '../../img/third.jpg'
import firstGirl from '../../img/firstGirl.jpg'
import secondGirl from '../../img/secondGirl.jpg'
import thirdGirl from '../../img/thirdGirl.jpg'
import fourthGirl from '../../img/firstGirl.jpg'
import fifthGirl from '../../img/fifthGirl.jpg'
import sixthGirl from '../../img/sixthGirl.jpg'
import denis from '../../img/denis.jpg'
import igor from '../../img/igor.jpg'
import dilyara from '../../img/dilyara.jpg'
import jun from '../../img/jun.jpg'
import nastya from '../../img/nastya.jpg'
import team from '../../img/team.jpg'
const Course = () => {
  return (
    <div className={cls.course}>
      <p className={cls.direction}>Главная {'>'} Курс</p>
      <h1 className={cls.pageName}>КУРС</h1>
      <div className={cls.firstBlock}>
        <h3 className={cls.greetings}>ПРИВЕТСТВУЕМ, ДОРОГОЙ ДРУГ!</h3>
        <div className={cls.aboutVolonter}>
          <div>
            <h4>КТО ТАКОЙ ВОЛОНТЕР</h4>
            <p>
              Волонтер - это движущая сила любого мероприятия, <br />
              часть одной большой команды.
            </p>
          </div>
          <div>
            <h4>ЗАЧЕМ СТАНОВИТСЯ ВОЛОНТЕРОМ?</h4>
            <p>
              Стань волонтёром Лиги Героев и приобрети бесценный <br />
              опыт, новых друзей и единомышленников!
            </p>
          </div>
        </div>
        <button className={cls.btnVolonter}>Стать волонтером</button>
      </div>
      <img className={cls.firstImg} alt="firstImg" src={first} />
      <div className={cls.secondBlock}>
        <h3 className={cls.goals}>ЦЕЛИ ВОЛОНТЕРСКОГО ЦЕНТРА ЛИГА ГЕРОЕВ:</h3>
        <div className={cls.volonterGoals}>
          <div>
            <div>
              <div />{' '}
              <p>Обеспечение мероприятий Лиги Героев волонтерским составом</p>
            </div>
            <div>
              <div />{' '}
              <p>
                Проведение предварительной подготовки и обучения волонтеров
                перед мероприятиями
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Постоянное улучшение качества работы волонтеров на мероприятиях
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Ознакомление волонтеров с миссиями и целями проектов Лиги Героев
              </p>
            </div>
          </div>
          <div>
            <div>
              <div />{' '}
              <p>
                Повышение уровня лояльности и преданности волонтеров к проектам
                Лиги Героев
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Обеспечение доступных условий для личностного роста волонтеров
                Центра
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Повышение внутренней мотивации и желания развиваться в активной
                команде
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className={cls.secondImg} alt="secondImg" src={second} />
      <div className={cls.thirdBlock}>
        <h3 className={cls.causes}>ЧТО БУДЕТ, ЕСЛИ ТЫ ПРИДЕШЬ К НАМ?</h3>
        <div className={cls.infoAbout}>
          <div>
            <h4>ДЛЯ ТЕБЯ</h4>
            <div>
              <div />{' '}
              <p>Участие в организации популярного спортивного проекта; </p>
            </div>
            <div>
              <div /> <p>Новые знакомства с интересными людьми; </p>
            </div>
            <div>
              <div /> <p>Вкусная полевая кухня; </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Эмоции и впечатления, о которых ты будешь рассказывать друзьям;{' '}
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Фирменная футболка, браслет и благодарность от организаторов!{' '}
              </p>
            </div>
            <div>
              <div /> <p>Яркие и эмоциональные фото!</p>
            </div>
            <div>
              <div /> <p>Спортивная движуха разного уровня сложности</p>
            </div>
          </div>
          <div>
            <h4>ЧТО НУЖНО, ЧТОБЫ СТАТЬ ВОЛОНТЕРОМ:</h4>
            <div>
              <div /> <p>Возраст от 16 лет;</p>
            </div>
            <div>
              <div /> <p>Немного общительности;</p>
            </div>
            <div>
              <div /> <p>Много ответственности;</p>
            </div>
            <div>
              <div />{' '}
              <p>
                Желание расти и развиваться в спортивной и успешной команде!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.fourthBlock}>
        <h3 className={cls.remember}>ПОМНИ</h3>
        <div className={cls.blocks}>
          <div>
            <p className={cls.count}>01</p>
            <div className={cls.line} />
            <p className={cls.attentionTitle}>
              Волонтерская деятельность является добровольной и безвозмездной!
            </p>
            <p className={cls.attentionDesc}>
              Это как хобби – доставляет удовольствие и немного приятных бонусов
            </p>
          </div>
          <div>
            <p className={cls.count}>02</p>
            <div className={cls.line} />
            <p className={cls.attentionTitle}>Мы любим взаимность!</p>
            <p className={cls.attentionDesc}>
              Относись к другим так, как бы ты хотел чтобы относились к тебе!
            </p>
          </div>
          <div>
            <p className={cls.count}>03</p>
            <div className={cls.line} />
            <p className={cls.attentionTitle}>Мы всегда поможем!</p>
            <p className={cls.attentionDesc}>
              Если ты не знаешь, как решить свою задачу - обратись к тим-лидеру
              или к старшему на участке волонтеру
            </p>
          </div>
          <div>
            <p className={cls.count}>04</p>
            <div className={cls.line} />
            <p className={cls.attentionTitle}>Мы ценим свое и твое время!</p>
            <p className={cls.attentionDesc}>
              Если у тебя поменялись планы и ты не можешь приехать на гонку,
              сообщи нам хотя бы за 2 дня, чтобы мы могли найти тебе замену.
            </p>
          </div>
          <div>
            <p className={cls.count}>05</p>
            <div className={cls.line} />
            <p className={cls.attentionTitle}>
              Мы хотим развиваться и быть лучше!
            </p>
            <p className={cls.attentionDesc}>
              Если у тебя есть интересные идеи или объективные замечания по
              организации, то координатор и руководитель Центра всегда тебя
              выслушают. На важно твоё мнение!
            </p>
          </div>
        </div>
      </div>
      <img className={cls.thirdImg} src={third} alt="third" />
      <div className={cls.fifthBlock}>
        <h3 className={cls.important}>ВАЖНО</h3>
        <div className={cls.duties}>
          <div className={cls.rights}>
            <h4>ТВОИ ПРАВА</h4>
            <div>
              <div /> <p>Взаимодействовать с командой на равных;</p>
            </div>
            <div>
              <div /> <p>Получить назначение на оговоренную функцию;</p>
            </div>
            <div>
              <div />{' '}
              <p>
                Получать оценку своей деятельности от координатора и
                руководителя Центра;
              </p>
            </div>
            <div>
              <div />{' '}
              <p>Иметь возможность на приобретение новых знаний и навыков;</p>
            </div>
            <div>
              <div /> <p>Выражать свое мнение;</p>
            </div>
            <div>
              <div />{' '}
              <p>
                Вносить предложения по улучшению и развитию проекта в целом и
                волонтерского центра в частности.
              </p>
            </div>
          </div>
          <div className={cls.responsibility}>
            <h4>ТЫ ОТВЕТСТВЕНЕН ЗА:</h4>
            <div>
              <div /> <p>Свой внешний вид </p>
            </div>
            <div>
              <div /> <p>Эффективное использование времени и ресурсов;</p>
            </div>
            <div>
              <div />{' '}
              <p>
                Соблюдение режима работы (если что-то изменилось – предупреди);
              </p>
            </div>
            <div>
              <div /> <p>Соблюдение техники безопасности;</p>
            </div>
            <div>
              <div /> <p>Выполнение поставленных тебе задач;</p>
            </div>
            <div>
              <div /> <p>Информирование команды о всех необычных инцидентах.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.sixthBlock}>
        <h3 className={cls.loyalty}>СИСТЕМА ЛОЯЛЬНОСТИ</h3>
        <div className={cls.aboutBonus}>
          <div>
            <h4>БОНУСЫ</h4>
            <div>
              <div />{' '}
              <p>
                Первое качественное волонтерство – футболка, браслет и
                благодарность от команды Лиги Героев
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                После 2 волонтерств на мероприятиях Лиги Героев с положительной
                оценкой, при условии продолжения волонтерской деятельности на
                мероприятиях до конца сезона – бесплатное посещение тренировок
                «Подготовка к Гонке Героев» с HeroLeagueTraining (1-2 раза в
                неделю)
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Качественное волонтерство на 3 мероприятиях «Гонка Героев» –
                волонтерский забег на Гонке Героев (18+)
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                4 волонтерства и более (минимум отволонтерить 1 год) +
                положительная оценка координатора + проявление активности в
                сезоне– возможность стать судьей на препятствиях или попробовать
                себя в роли старшего волонтера на функции
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Сувениры от Лиги Героев в конце сезона для особо отличившихся.
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Отличительная активность на мероприятиях в течение нескольких
                сезонах – жетон Почетного волонтера
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                За 5 и более волонтерств в сезоне – значок «Волонтер Гонки
                Героев», в следующем сезоне, кто уже получил данный значок и
                отволонтерил также 5 и более мероприятий – значок «Волонтер Лиги
                Героев»
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Волонтерство в 3х разных городах – билет на гонку в категории
                масстарт в любом городе
              </p>
            </div>
          </div>
          <div>
            <h4>АНТИБОНУСЫ</h4>
            <div>
              <div />{' '}
              <p>
                Неявка на мероприятие без оповещения –удаление из рядов
                волонтеров.
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Самовольное покидание мероприятия до завершающего брифинга без
                оповещения – исключение из волонтерского центра.{' '}
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Недобросовестное обращение с материальными ценностями Лиги
                Героев – изменение условий поощрения.
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Пассивный подход к выполнению поставленной задачи – смена задачи
                на менее значимую.
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Отказ от волонтерства меньше, чем за сутки – пропуск в
                статистике
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Отличительная активность на мероприятиях в течение нескольких
                сезонах – жетон Почетного волонтера
              </p>
            </div>
            <div>
              <div />{' '}
              <p>
                Несогласованное с координатором участие в забеге в день
                волонтерства и без билета – исключение из волонтерского центра.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.seventhBlock}>
        <h3 className={cls.volunteerDevelopment}>
          РАЗВИТИЕ ВОЛОНТЕРА В НАШЕЙ КОМАНДЕ
        </h3>
        <div className={cls.volonterPhotos}>
          <div>
            <img src={firstGirl} alt="firstGirl" /> <p>Старший волонтер на функции</p>
          </div>
          <div>
            <img src={secondGirl} alt="secondGirl" /> <p>Волонтер</p>
          </div>
          <div>
            <img src={thirdGirl} alt="thirdGirl" /> <p>Судья/Инструктор</p>
          </div>
          <div>
            <img src={fourthGirl} alt="fourthGirl" /> <p>Координатор Центра</p>
          </div>
          <div>
            <img src={fifthGirl} alt="fifthGirl" /> <p>Проектный сотрудник</p>
          </div>
          <div>
            <img src={sixthGirl} alt="sixthGirl" /> <p>Старший судья</p>
          </div>
        </div>
      </div>
      <div className={cls.eighthBlock}>
        <h3 className={cls.functions}>ФУНКЦИИ ВОЛОНТЕРОВ</h3>
        <div className={cls.aboutFunc}>
          <div>
            <h4>01</h4>
            <div className={cls.line} />
            <div className={cls.func}>
              <h4>РЕГИСТРАЦИИ</h4>
              <div>
                <div /> <p>Встреча и координирование участников</p>
              </div>
              <div>
                <div /> <p>Регистрация участников </p>
              </div>
              <div>
                <div /> <p>Проверка билетов и документов участников</p>
              </div>
              <div>
                <div /> <p>Внесение данных в базу</p>
              </div>
              <div>
                <div /> <p>Выдача стартовых пакетов</p>
              </div>
            </div>
          </div>
          <div>
            <h4>02</h4>
            <div className={cls.line} />
            <div className={cls.func}>
              <h4>КАМЕРА ХРАНЕНИЯ</h4>
              <div>
                <div />{' '}
                <p>Прием и выдача личных вещей участников по номеру манишки</p>
              </div>
              <div>
                <div />{' '}
                <p>
                  Четкое распределение вещей на стеллажах,для быстрой выдачи
                  участникам{' '}
                </p>
              </div>
              <div>
                <div /> <p>Обеспечение сохранности полученных вещей</p>
              </div>
            </div>
          </div>
          <div>
            <h4>03</h4>
            <div className={cls.line} />
            <div className={cls.func}>
              <h4>ПОЛЕВАЯ КУХНЯ</h4>
              <div>
                <div /> <p>Контроль входа и выхода в зону кухни</p>
              </div>
              <div>
                <div /> <p>Помощь в раздаче пищи</p>
              </div>
            </div>
          </div>
          <div>
            <h4>04</h4>
            <div className={cls.line} />
            <div className={cls.func}>
              <h4>СТАРТ</h4>
              <div>
                <div /> <p>Выдача чипов хронометража</p>
              </div>
              <div>
                <div /> <p>Организация стартовых коридоров </p>
              </div>
            </div>
          </div>
          <div>
            <h4>05</h4>
            <div className={cls.line} />
            <div className={cls.func}>
              <h4>ФИНИШ</h4>
              <div>
                <div /> <p>Встреча финишеров</p>
              </div>
              <div>
                <div /> <p>Торжественное вручение жетонов </p>
              </div>
              <div>
                <div /> <p>Ведение протокола финишеров</p>
              </div>
              <div>
                <div /> <p>Сбор чипов хронометража </p>
              </div>
            </div>
          </div>
          <div>
            <h4>06</h4>
            <div className={cls.line} />
            <div className={cls.func}>
              <h4>ПИТ-СТОПЫ</h4>
              <div>
                <div /> <p>Раздача воды</p>
              </div>
              <div>
                <div /> <p>Подбадривание участников </p>
              </div>
            </div>
          </div>
          <div>
            <h4>07</h4>
            <div className={cls.line} />
            <div className={cls.func}>
              <h4>СОПРОВОЖДЕНИЕ ТРАССЫ</h4>
              <div>
                <div /> <p>Контроль техники безопасности на препятствиях</p>
              </div>
              <div>
                <div /> <p>Подбадривание участников </p>
              </div>
            </div>
          </div>
          <div>
            <h4>08</h4>
            <div className={cls.line} />
            <div className={cls.func}>
              <h4>МЕДИЦИНА</h4>
              <div>
                <div />{' '}
                <p>Фиксирование обращений участников за медицинской помощью</p>
              </div>
              <div>
                <div /> <p>Подбадривание участников </p>
              </div>
              <div>
                <div />{' '}
                <p>
                  При необходимости сопровождение участника до медучреждения{' '}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4>09</h4>
            <div className={cls.line} />
            <div className={cls.func}>
              <h4>ФАН-ЗОНА</h4>
              <div>
                <div /> <p>Помощь ивент-менеджеру</p>
              </div>
              <div>
                <div />{' '}
                <p>
                  Содействие партнерам в проведении развлекательных мероприятий
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.ninthBlock}>
        <h3 className={cls.structure}>СТРУКТУРА ВОЛОНТЕРСКОГО ЦЕНТРА</h3>
        <div className={cls.directors}>
          <div>
            <img src={denis} alt="denis" />
            <h4>Анников Денис</h4>
            <div className={cls.underline} />
            <p>Директор Гонки Героев, г. Москвы</p>
          </div>
          <div>
            <img src={igor} alt="igor" />
            <h4>Кактыш Игорь</h4>
            <div className={cls.underline} />
            <p>Региональный представитель </p>
          </div>
          <div>
            <img src={dilyara} alt="dilyara" />
            <h4>Садыкова Диляра</h4>
            <div className={cls.underline} />
            <p>Руководитель спортивного департамента</p>
          </div>
          <div>
            <img src={jun} alt="jun" />
            <h4>Алиева Джунай</h4>
            <div className={cls.underline} />
            <p>Руководитель ВЦ</p>
          </div>
          <div>
            <img src={nastya} alt="nastya" />
            <h4>Золина Анастасия</h4>
            <div className={cls.underline} />
            <p>Координатор ВЦ</p>
          </div>
        </div>
      </div>
      <div className={cls.tenthBlock}>
        <h3 className={cls.thanksgiving}>
          И САМОЕ ГЛАВНОЕ - СПАСИБО ТЕБЕ, ДОРОГОЙ ДРУГ, ЧТО ТЫ ОТКЛИКНУЛСЯ НА
          НАШ ПРИЗЫВ ПРИСОЕДИНИТЬСЯ К НАШЕЙ КОМАНДЕ ВОЛОНТЕРСКОГО ЦЕНТРА ЛИГИ
          ГЕРОЕВ!
        </h3>
        <p>
          Мы очень ценим твою помощь и готовы ответить тем же! <br />
          Пусть этот день будет в радость и оставит только хорошие воспоминания!{' '}
          <br />
          Ты уже наш Герой!
        </p>
      </div>
      <img className={cls.fourthImg} src={team} alt="team" />
    </div>
  )
}

export default Course
