import React from 'react';

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

import SCIENCE from "../../images/data-science.png";

const Kurz_und_knapp = () => {
  return (
    <div className={`${styles.pages}`} id='allgemein'>
      <div className={`${index.container__pages} ${grid.grid}`}>
        <div className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h2>Kurz und knapp - das duale Studium</h2>
        </div>

        <div className={`${styles.allgemein__container__pic} ${grid.grid__item__1_4} ${grid.grid__item__tablet__1_3} ${grid.grid__item__phone__1_2}`}>
          <img src={SCIENCE} alt="IMG" />
        </div>


        <div className={`${styles.case} ${grid.grid__item__5_12} ${grid.grid__item__tablet__4_6} ${grid.grid__item__phone__1_2}`}>
          <div className={`${styles.case}`}>
            <p className={`${styles.pages} ${styles.case__text} ${styles.presse__plus__blue}`}>
              Innovative Website informiert über duale Studienmöglichkeiten und führt Schüler, Unternehmen und Hochschulen zusammen.
            </p>
          </div>

          <div className={`${styles.case}`}>
            <h3 className={`${styles.orange__title}`}>
              Theorie und Praxis
            </h3>

            <div className={styles.case}>
              <p className={`${styles.pages} ${styles.case__text}`}>
                Verbinde die umfassende wissenschaftliche Lehre der Hochschule mit der frühen Praxiserfahrung oder einer Ausbildung in einem Betrieb.
              </p>
            </div>

          </div>

        <div className={`${styles.case} ${grid.grid__item__5_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h3 className={`${styles.green__title}`}>
            Hervorragende Berufsaussichten
          </h3>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Ein Studium im dualen System eröffnet einem Studenten hervorragende Berufsaussichten und angenehme finanzielle Verhältnisse, sowohl während des Studiums als auch danach. Die durchschnittliche Übernahmequote der Unternehmen von 80 Prozent spricht für sich.
            </p>
          </div>

        </div>
        </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h3 className={`${styles.blue__title}`}>
          Tolle Netzwerke
        </h3>

        <div className={styles.case}>
          <p className={`${styles.pages} ${styles.case__text}`}>
            Bau Dir ein stark verzweigtes Kontaktnetz auf und schaffe so sehr gute Voraussetzungen für deine eigene Zukunft. Duale Studierende überzeugen Ihren Arbeitgeber bereits während des Studiums - nicht erst danach!
          </p>
        </div>

      </div>


      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h3 className={`${styles.orange__title}`}>
            Über den Tellerrand schauen
          </h3>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Ein duales Studium hilft Dir dabei, Dich durch Förderung und Forderung, national und international, zu einem weltoffenen, selbstständigen und selbstbewussten Menschen zu entwickeln.
            </p>
          </div>

        </div>
    </div>
  </div>
  )
}

export default Kurz_und_knapp;
