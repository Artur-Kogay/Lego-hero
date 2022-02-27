import stuffAva from "../../static/img/heroPhotoPng.png";
import mask from "../../static/img/Mask Group.png";
import styles from "./stuff.module.scss";
import {useMediaQuery} from "@mui/material";


const stuffs = [
  {
    id: 'stuff-1',
    title: "СУДЬЯ",
    desctiption: 'Честность, профессионализм, внимательность',
    stuffAva: stuffAva,
    mask: mask,
    color: "#FEEC4F",
    skills: [
      'Четко следует регламентам',
      'Оценивает прохождение препятствий\n',
      'Следит за выполением правил и беспристрастно выносит решения',
    ]
  },
  {
    id: 'stuff-2',
    title: "СУДЬЯ",
    desctiption: 'Честность, профессионализм, внимательность',
    stuffAva: stuffAva,
    mask: mask,
    color: "#FEEC4F",
    skills: [
      'Четко следует регламентам',
      'Оценивает прохождение препятствий\n',
      'Следит за выполением правил и беспристрастно выносит решения',
    ]
  },
  {
    id: 'stuff-3',
    title: "СУДЬЯ",
    desctiption: 'Честность, профессионализм, внимательность',
    stuffAva: stuffAva,
    mask: mask,
    color: "#FEEC4F",
    skills: [
      'Четко следует регламентам',
      'Оценивает прохождение препятствий\n',
      'Следит за выполением правил и беспристрастно выносит решения',
    ]
  },
  {
    id: 'stuff-4',
    title: "СУДЬЯ",
    desctiption: 'Честность, профессионализм, внимательность',
    stuffAva: stuffAva,
    mask: mask,
    color: "#FEEC4F",
    skills: [
      'Четко следует регламентам',
      'Оценивает прохождение препятствий\n',
      'Следит за выполением правил и беспристрастно выносит решения',
    ]
  },
]

export default function Stuff() {
  const isLaptop = useMediaQuery("(max-width: 1200px)");

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>КТО ВАС ЖДЕТ</h2>

      <div className={styles.stuffsMainWrapper}>
        {
          stuffs.map(({id, title, desctiption, stuffAva, mask, color, skills}) => {
            console.log(mask)

            return (
              <div key={`Stuffs-${id}`} className={styles.stuffsWrapper}>
                <div className={styles.maskWrapper}>
                  <div className={styles.mask} style={{backgroundImage: `url('${mask}')`}}/>
                  <img src={stuffAva} alt=""/>
                </div>
                <div className={styles.contentWrapper}>
                  <p className={styles.stuffSkillTitle}>{title}</p>
                  <p className={styles.stuffSkillDesc}>{desctiption}</p>
                  <ul className={styles.skills}>
                    {
                      skills.map(skill => (
                        <li className={styles.skill} key={`stuffsSkills-${id}-${skill}`}>
                          <div className={styles.circle} style={{backgroundColor: color}}/>
                          <span>
                        {skill}
                      </span>
                        </li>
                      ))
                    }
                  </ul>
                  <button className={styles.moreBtn}>
                    Подробнее
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}