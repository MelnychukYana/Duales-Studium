import React from 'react';
import { Link} from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

const Pressemitteilungen = () => {
  return (
    <div className={`${styles.pages}`} id="pressemitteilungen">
        <div className={`${index.container__pages} ${grid.grid}`}>
          <div className={`${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            <h2  className={`${styles.blue__title}`}>
              Online-Portal für den potenziellen Führungskräftenachwuchs
            </h2>
          </div>

          <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            <p className={`${styles.pages} ${styles.case__text} ${styles.presse__plus}`}>
              Innovative Website informiert über duale Studienmöglichkeiten und führt Schüler, Unternehmen und Hochschulen zusammen.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Löhne, 22. Februar 2011 - Der zunehmende Druck auf Unternehmen, bedingt durch den gegenwärtigen Nachwuchskräftemangel, lässt das Angebot an 
              dualen Studiengängen stetig wachsen. Sowohl Unternehmen, als auch angehende Studenten haben erkannt, dass von einer kombinierten 
              Berufsausbildung beide Parteien gleichermaßen profitieren: Unternehmen bilden aus, lernen ihre Nachwuchskräfte richtig kennen und integrieren die 
              Studenten direkt in die internen Unternehmensabläufe. Die Berufsanfänger können ihr Fachwissen in der Praxis anwenden, zusätzlich Geld verdienen und sind 
              durch solch einen Berufsstart nach Studienabschluss direkt im Betrieb einsetzbar.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Die seit Ende Januar freigeschaltete Website <Link to={ROUTES.HOME} className={`${styles.blue__text} ${styles.pages__link}`}>www.duales-studium.de</Link> bietet eine Orientierungshilfe für duale Berufsausbildungsmöglichkeiten und ist für 
              Schüler komplett kostenlos.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Das Anliegen der „duales-studium GmbH“ ist allgemeine Transparenz in den Markt von dualen Studienmöglichkeiten zu bringen. Schüler haben die Möglichkeit 
              anhand einer Kartenansicht und durch Filterfunktionen einen Überblick über entsprechende Unternehmen, Hochschulen und Studiengänge auf der Homepage zu 
              bekommen. Die Betriebe und Hochschulen präsentieren sich nach individueller Aufmachung und in eigenem Corporate Design auf der Plattform.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Ziel ist es, alle Beteiligten passgenau zusammenzubringen. So soll in der Zukunft die Abbruchquote von Auszubildenden verringert, und Unternehmen bei der Rekrutierung von Nachwuchskräften unterstützt werden.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Die bisherige Resonanz der Website ist bislang sehr positiv und das Unternehmen arbeitet weiterhin daran, die Homepage mit mehr Funktionen und einer 
              Erweiterung der aktuellen Datenbank auszustatten, um das bundesweite Angebot zu vervollständigen.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Pressemitteilungen
