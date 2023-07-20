import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from "../../utils/routes";

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

import INVITATION from "../../images/invitation.png";

import JOIN from "../../images/join.png";
import SEARCH from "../../images/search.png";
import COMMUNITY from "../../images/community.png";

const Mach = () => {
  return (
  <div className={`${styles.pages}`} id='press'>
    <div className={`${index.container__pages} ${styles.blue__section} ${grid.grid}`}>
      <div className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h2>Mach mit!</h2>
      </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <p className={`${styles.pages} ${styles.case__text} ${styles.presse__plus__blue}`}>
          Berufsorientierung? Beruf und Zukunft? Was mache ich nach dem Abitur? Studieren? Wie finanziere ich das? Oder lieber eine Ausbildung? Reicht mir das?
        </p>
      </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <div className={`${styles.community__container__pic}`}>
          <img src={INVITATION} alt="IMG" />
        </div>
        <p className={`${styles.pages} ${styles.case__text__first}`}>
          Vielleicht zerbrichst Du Dir gerade den Kopf bei dem Versuch, den passenden Berufsweg zu finden. <span className={`${styles.blue__text}`}>"Studium oder Ausbildung?"</span> ist die erste entscheidende Frage! Praktisches Arbeiten und Geld verdienen oder doch lieber ein theoretisches Fachwissen erwerben?
        </p>

        <p className={`${styles.pages} ${styles.case__text}`}>
          Aber es gibt ja nicht immer nur schwarz oder weiß! Kombiniere einfach die Vorteile beider Möglichkeiten. Verbinde ein Studium mit darauf abgestimmter Anwendung und Praxis:
        </p>

        <p className={`${styles.pages} ${styles.case__text}`}>
          Als <span className={`${styles.blue__text}`}>praxisintegriertes Studium </span>(Studium + Berufserfahrung mit einem Stipendium) oder 
          als <span className={`${styles.blue__text}`}>ausbildungsintegriertes Studium</span> (Ausbildung + Studium mit einem Ausbildungsvertrag).
        </p>

        <p className={`${styles.pages} ${styles.case__text}`}>
          Bist Du jetzt überzeugt, unsicher oder ist Dir das alles völlig neu? Ganz egal - nutze jetzt die zahlreichen Informations-, Orientierungs- und Community-Möglichkeiten 
          von <Link to={ROUTES.HOME} className={`${styles.pages__link__blue} ${styles.blue__text}`}>duales-studium.de</Link> - und das alles kostenlos!
        </p>
      </div>



    </div>

    <div className={`${index.container__blocks} ${grid.grid}`}>
      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h3 className={`${styles.orange__title}`}>
          Informiere dich
        </h3>

        <div className={`${styles.info} ${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <Link to={ROUTES.COMMUNITY} className={`${styles.pages} ${styles.info__item__orange} ${styles.orange__section}`}>
            <div className={`${styles.info__container}`}>
              <div className={`${styles.info__box}`}>
                <img src={COMMUNITY} alt="IMG" />
              </div>
            </div>
            <p className={`${styles.info__text} ${styles.orange__text} ${styles.info__title}`}>
              Die Community
            </p>
            <p className={`${styles.info__text}`}>
              Nutze unsere Community, um dich über Themen rund um das (duale) Studium mit Freunden und Bekannten auszutauschen. Diskutiere im Forum mit anderen Interessierten und Ehemaligen und lies in Erfahrungsberichten, wie es anderen ergangen ist.
            </p>
          </Link>

          <Link to={ROUTES.SEARCHIT} className={`${styles.pages} ${styles.info__item__green} ${styles.green__section}`}>
            <div className={`${styles.info__container}`}>
              <div className={`${styles.info__box}`}>
                <img src={SEARCH} alt="IMG" />
              </div>
            </div>
            <p className={`${styles.info__text} ${styles.green__text} ${styles.info__title}`}>
              Search it!
            </p>
            <p className={`${styles.info__text}`}>
              Erstelle Deine persönliche Favoriten-Liste und informiere Dich im Detail über Studienprogramme, Hochschulen und Unternehmen. Tritt mit den Ansprechpartnern direkt in Kontakt. Sie warten auf Dich und helfen Dir gerne weiter!
            </p>
          </Link>

          <Link to={ROUTES.Allgemein} className={`${styles.pages} ${styles.block} ${styles.info__item__blue} ${styles.blue__section}`}>
            <div className={`${styles.info__container}`}>
              <div className={`${styles.info__box}`}>
                <img src={JOIN} alt="IMG" />
              </div>
            </div>
            <p className={`${styles.info__text} ${styles.blue__text} ${styles.info__title}`}>
              Das duale Studium
            </p>
            <p className={`${styles.info__text}`}>
              Informiere Dich im Detail, was genau ein duales Studium ist und welche Formen der Kooperation es gibt.
            </p>
          </Link>


      </div>

      </div>
    </div>
  </div>
  )
}

export default Mach;
