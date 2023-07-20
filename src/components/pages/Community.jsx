import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from "../../utils/routes";

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

import GROUP from "../../images/group.png";

import REVIEWS from "../../images/web-rating.png";
import NEWS from "../../images/news-report.png";
import LINK from "../../images/link.png";

const Community = () => {
  return (
  <div className={`${styles.pages}`} id='press'>
    <div className={`${index.container__pages} ${styles.blue__section} ${grid.grid}`}>
      <div className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h2>Die Community</h2>
      </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <div className={`${styles.community__container__pic}`}>
          <img src={GROUP} alt="IMG" />
        </div>
        <p className={`${styles.pages} ${styles.case__text__first}`}>
          Eignungstest und Datenbanken können Dir erste Ideen liefern. 
        </p>
        <p className={`${styles.pages} ${styles.case__text}`}>
          Genauso entscheidend sind aber auch persönliche Eindrücke, Erfahrungen und individuelle Beratung! 
        </p>
        <p className={`${styles.pages} ${styles.case__text}`}>
          Außerdem werden <span className={`${styles.blue__text}`}>neue Studiengänge</span> eingeführt, <span className={`${styles.blue__text}`}>neue Bildungsgesetze</span> verabschiedet oder 
          die <span className={`${styles.blue__text}`}>BAföG-Regelungen</span> geändert!
        </p>

        <p className={`${styles.pages} ${styles.case__text}`}>
          Deshalb bietet Dir <Link to={ROUTES.HOME} className={`${styles.pages__link__blue} ${styles.blue__text}`}>duales-studium.de</Link> eine Community mit zahlreichen kostenlosen Möglichkeiten.
        </p>
      </div>

    </div>

    <div className={`${index.container__blocks} ${grid.grid}`}>
      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h3 className={`${styles.orange__title}`}>
          Features der Community
        </h3>

        <div className={`${styles.info} ${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <Link to={ROUTES.HOME} className={`${styles.pages} ${styles.info__item__orange} ${styles.orange__section}`}>
          <div className={`${styles.info__container}`}>
            <div className={`${styles.info__box}`}>
              <img src={LINK} alt="IMG" />
            </div>
          </div>
          <p className={`${styles.info__text} ${styles.orange__text} ${styles.info__title}`}>
            Linksammlung
          </p>
          <p className={`${styles.info__text}`}>
            Unsere Linksammlung zeigt Dir den Weg zu Internetseiten und Informationen, die Du benötigst.
          </p>
        </Link>

          <Link to={ROUTES.HOME} className={`${styles.pages} ${styles.info__item__green} ${styles.green__section}`}>
            <div className={`${styles.info__container}`}>
              <div className={`${styles.info__box}`}>
                <img src={NEWS} alt="IMG" />
              </div>
            </div>
            <p className={`${styles.info__text} ${styles.green__text} ${styles.info__title}`}>
              News & Presse
            </p>
            <p className={`${styles.info__text}`}>
              In unserer Kategorie "News & Presse" wirst Du über aktuelle Events wie Berufsmessen oder Einführungen von neuen Studiengängen informiert.
            </p>
          </Link>

          <Link to={ROUTES.HOME} className={`${styles.pages} ${styles.info__item__blue} ${styles.blue__section}`}>
            <div className={`${styles.info__container}`}>
              <div className={`${styles.info__box}`}>
                <img src={REVIEWS} alt="IMG" />
              </div>
            </div>
            <p className={`${styles.info__text} ${styles.blue__text} ${styles.info__title}`}>
              Erfahrungsberichte
            </p>
            <p className={`${styles.info__text}`}>
              Was hilft besser bei Entscheidungen zum richtigen Studiengang als entsprechende persönliche und individuelle Erfahrungsberichte?
            </p>
          </Link>

        </div>

      </div>
    </div>
  </div>
  )
}

export default Community;
