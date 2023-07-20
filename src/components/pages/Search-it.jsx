import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from "../../utils/routes";

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

import SEARCHING from "../../images/searching.png";

import RESEARCH from "../../images/research.png";
import COMPANY from "../../images/office-building.png";
import UNIVERSITY from "../../images/graduation.png";

const SearchIt = () => {
  return (
  <div className={`${styles.pages}`} id='press'>
    <div className={`${index.container__pages} ${styles.blue__section} ${grid.grid}`}>
      <div className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h2>Search it! Deine Suche nach dem passenden dualen Studium</h2>
      </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <p className={`${styles.pages} ${styles.case__text} ${styles.presse__plus__blue}`}>
          Allen Mitgliedern steht eine umfassende Datenbank mit Studiengängen, Unternehmen und Hochschulen im dualen Bereich zur Verfügung! Und das Besondere? - Egal, was Du suchst oder warum Du suchst, mit unserer Datenbank findest Du für Dich das richtige Programm.
        </p>
      </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <div className={`${styles.search__container__pic}`}>
          <img src={SEARCHING } alt="IMG"/>
        </div>

        <p className={`${styles.pages} ${styles.case__text__first}`}>
          <i className={styles.search__arrow}></i>Du weißt, was Du dual studieren möchtest, kennst aber keine entsprechenden Partnerunternehmen und Hochschulen?
        </p>

        <p className={`${styles.pages} ${styles.case__text}`}>
          <i className={styles.search__arrow}></i>Du bist dir sicher, an welcher Hochschule du studieren möchtest. Doch du bist dir nicht im Klaren darüber, welche Studienangebote es dort gibt und welche Partnerunternehmen in Frage kommen?
        </p>

        <p className={`${styles.pages} ${styles.case__text}`}>
          <i className={styles.search__arrow}></i>Für Dich ist klar, in welchem Unternehmen Du Dein duales Studium absolvieren willst. Leider weißt Du nicht, welche dualen Studiengänge das Unternehmen anbietet und mit welchen Hochschulen es zusammen arbeitet?
        </p>

        <p className={`${styles.pages} ${styles.case__text}`}>
          <i className={styles.search__arrow}></i>Oder Du willst Dir erst einmal selbstständig einen Überblick über die dualen Möglichkeiten in Deutschland verschaffen und dabei anhand bestimmter Kriterien deine Ergebnisse filtern, um zu einem passenden Ergebnis zu gelangen?
        </p>

        <p className={`${styles.pages} ${styles.case__text}`}>
          <i className={styles.search__arrow}></i>Speichere interessante Unternehmen, Studiengänge oder Hochschulen in einer Favoritenliste oder teile Sie mit deinen Freunden.
        </p>
      </div>

    </div>

    <div className={`${index.container__blocks} ${grid.grid}`}>
      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h3 className={`${styles.orange__title}`}>
          Unsere Datenbank
        </h3>

        <div className={`${styles.info} ${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <Link to={ROUTES.HOME} className={`${styles.pages} ${styles.info__item__orange} ${styles.orange__section}`}>
            <div className={`${styles.info__container}`}>
              <div className={`${styles.info__box}`}>
                <img src={UNIVERSITY} alt="IMG" />
              </div>
            </div>
            <p className={`${styles.info__text} ${styles.orange__text} ${styles.info__title}`}  >
              Hochschulliste
            </p>
            <p className={`${styles.info__text}`}>
              Wenn Du bereits eine Idee hast, an welchem Standort Du studieren möchtest, kannst Du von hier aus die angebotenen Studiengänge und die Unternehmen finden, die die Hochschulen anbieten und mit denen sie kooperieren.
            </p>
          </Link>

          <Link to={ROUTES.HOME} className={`${styles.pages} ${styles.info__item__green} ${styles.green__section}`}>
            <div className={`${styles.info__container}`}>
              <div className={`${styles.info__box}`}>
                <img src={COMPANY} alt="IMG" />
              </div>
            </div>
            <p className={`${styles.info__text} ${styles.green__text} ${styles.info__title}`}>
              Unternehmensliste
            </p>
            <p className={`${styles.info__text}`}>
              Beginne mit der Suche nach einem geeigneten Unternehmen und entdecke, in welchen Studiengängen Du Dich dort fördern lassen kannst und an welchen Hochschulen die Kooperationen stattfinden.
            </p>
          </Link>

          <Link to={ROUTES.HOME} className={`${styles.pages} ${styles.info__item__blue} ${styles.blue__section}`}>
            <div className={`${styles.info__container}`}>
              <div className={`${styles.info__box}`}>
                <img src={RESEARCH} alt="IMG" />
              </div>
            </div>
            <p className={`${styles.info__text} ${styles.blue__text} ${styles.info__title}`}>
              Studienrichtungen
            </p>
            <p className={`${styles.info__text}`}>
              Beginne mit der Suche nach einem geeigneten Studium und informiere Dich über die Schwerpunkte, Standorte und Kooperationspartner.
            </p>
          </Link>

      </div>

      </div>
    </div>
  </div>
  )
}

export default SearchIt;
