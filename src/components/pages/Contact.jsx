import React from 'react';

import index from "../../styles/index.module.scss";
import grid from "../../styles/grid.module.scss";
import styles from "../../styles/Pages.module.scss";

const Contact = () => {
  return (
    <div className={`${styles.contact}`} id='contact'>
      <div className={`${index.container__pages} ${grid.grid} `}>

        <h3 className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__3_4} ${grid.grid__item__phone__1_2}`}>
          Wir sind für Sie da!
        </h3>

        <div className={`${styles.contact__container__block} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <p className={`${styles.pages} `}>
            Sie haben Fragen oder Feedback zu unserer Seite? 
            Sie möchten sich als Unternehmen oder Hochschule auf duales-studium.de präsentieren? 
            Schicken Sie uns eine kurze Nachricht und wir nehmen kurzfristig Kontakt zu Ihnen auf!
          </p>
        </div>

        <div className={`${styles.contact__container__info} ${grid.grid__item__1_6} ${grid.grid__item__tablet__1_3} ${grid.grid__item__phone__1_2}`}>
          <div>
            <p className={`${styles.pages} `}>
            <b className={styles.blue__text}>duales-studium GmbH</b>
              {"\n"}
              Heinrich-Wintermeyer-Str. 
              {"\n"}
              2432602 Vlotho
            </p>
          </div>

          <div className={`${styles.contact__container__block} `}>
            <p className={`${styles.pages}`}>
              <b className={styles.blue__text}>Kontakt:</b>
              {"\n"}
              E-Mail: <a href="mailto:info@duales-studium.de" className={`${styles.blue__text} `}>info@duales-studium.de</a>
              {"\n"}
              Telefon: <a href="tel: 052285329891" className={`${styles.blue__text} `}>05228-5329891</a>
            </p>
          </div>
        </div>

        <form action="/submit" method="POST" className={`${grid.grid__item__7_12} ${grid.grid__item__tablet__4_6} ${grid.grid__item__phone__1_2} ${styles.contact__container__info}`}>
          <div className={`${styles.contact__container__input}`}>
            <input type="text" id="name" name="name" placeholder="Name" className={styles.contact__input} required />
          </div>
          <div className={` ${styles.contact__container__input}`}>
          <input type="email" id="email" name="email" placeholder="E-mail" className={styles.contact__input} required />
          </div>
          <div className={` ${styles.contact__container__input}`}>
          <textarea id="message" name="message" placeholder="Ihre Nachricht" className={`${styles.contact__input__textarea}`} required></textarea>
          </div>
          <div className={`${styles.contact__container__button}`}>
            <button className={styles.contact__button} type="submit">Absenden</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
