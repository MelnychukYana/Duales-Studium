import React from 'react';
import { Link} from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

import NEWSPAPERS from "../../images/newspapers.png";

const Press = () => {
  return (
    <div className={`${styles.pages}`} id='press'>
      <div className={`${index.container__pages} ${grid.grid}`}>
        <div className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h2>Presse</h2>
        </div>

        <div className={`${styles.case}  ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <p className={`${styles.pages} ${styles.case__text}`}>
            Erfahren Sie mehr über das Projekt duales-studium.de. Falls Sie einen Artikel über uns schreiben, würden wir Sie bitten uns ein Belegexemplar zur Verfügung zu stellen.
          </p>

          <p className={`${styles.pages} ${styles.case__text}`}>
            Falls Sie noch weitergehende Fragen haben sollten, stehen wir Ihnen gerne und jederzeit zur Verfügung.
          </p>
        </div>


        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h3 className={`${styles.orange__title}`}>
            Pressemitteilungen
          </h3>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              22.02.2010: <Link to={ROUTES.HOME} className={`${styles.orange__text} ${styles.pages__link}`}>Online-Portal für den potenziellen Führungskräftenachwuchs</Link>
            </p>
          </div>

        </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h3 className={`${styles.green__title}`}>
          Pressespiegel
        </h3>

        <div className={styles.case}>
          <p className={`${styles.pages} ${styles.case__text}`}>
            23.02.2011: <Link to={ROUTES.HOME} className={`${styles.green__text} ${styles.pages__link}`}>"Flirtbörse" für Studenten und Unternehmen</Link>
            {"\n"}
            Januar 2011: <Link to={ROUTES.HOME} className={`${styles.green__text} ${styles.pages__link}`}>Per "Klick" zum Traumstudium</Link>
          </p>
        </div>

      </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h3 className={`${styles.blue__title}`}>
          Pressekontakt
        </h3>
      </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <div className={`${styles.presse__container}`}>
          <div className={`${styles.presse__container__pic}`}>
            <img src={NEWSPAPERS} alt="IMG" className={`${styles.presse__pic}`} />
          </div>


          <div className={`${styles.presse__container__info}`}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              duales-studium GmbH
            {"\n"}
              Nils Frohloff
            {"\n"}
              Geschäftsführer
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
            <a href="mailto:info@duales-studium.de" className={`${styles.blue__text} `}>info@duales-studium.de</a>
              {"\n"}
              <a href="tel: 052285329891" className={`${styles.blue__text} `}>05228-5329890</a>
            </p>
          </div>
        </div>
        </div>

      </div>


    </div>
  )
}

export default Press
