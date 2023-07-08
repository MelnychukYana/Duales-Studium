import React from 'react';

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

import STUDENT from "../../images/student.png";
import UNIVERSITY from "../../images/university.png";
import COMPANY from "../../images/company.png";

const DSImDetail = () => {
  return (
  <div className={`${styles.pages}`} id="duales-studium-im-detail">
    <div className={`${index.container__pages} ${grid.grid} ${styles.details__background}`}>
      <div className={`${styles.blue__title} ${styles.details__text} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h2>Die Details - Was genau ist ein duales Studium?</h2>
        </div>

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <p className={`${styles.pages} ${styles.details__text} ${styles.presse__plus__blue}`}>
            Ein Duales Studium ist im Prinzip eine Kooperation zwischen Universität, Firma und Student. 
            {"\n"}
            Es setzt konsequent das erfolgreiche duale System der 
            Ausbildung in die Hochschullandschaft um.
          </p>
        </div>
    </div>

    <div className={`${index.container__blocks} ${grid.grid}`}>
      <div className={`${styles.details__container} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <div className={`${styles.details__item} ${styles.orange__section}`}>
          <div className={styles.details__item__content}>
            <div className={`${styles.details__container__pic}`}>
              <img src={STUDENT} alt="IMG" className={`${styles.details__pic}`} />
            </div>

            <h3 className={`${styles.orange__title}`}>
              Der Student
            </h3>

            <div className={styles.case}>
              <p className={`${styles.pages} ${styles.case__text}`}>
                Der Student geht mit einer Firma eine Art Ausbildungsvertrag ein. Dabei verpflichtet er sich in der studienfreien Zeit in der Firma zu arbeiten. Als Gegenleistung erhält er eine Art Stipendium über die gesamte Studiendauer. Neben den finanziellen Vorteilen profitiert der Student aber auch durch jede Menge Praxiserfahrung und die Chance, Kontakte im Unternehmen zu knüpfen. In manchen dualen Studienprogrammen ist sogar noch eine klassische Ausbildung enthalten, die parallel zum Studium durchgeführt und auch während des Studiums abgeschlossen wird.
              </p>
            </div>
          </div>
        </div>

        <div className={` ${styles.details__item} ${styles.green__section}`}>
          <div className={styles.details__item__content}>
            <div className={`${styles.details__container__pic}`}>
              <img src={UNIVERSITY} alt="IMG" className={`${styles.details__pic}`} />
            </div>

              <h3 className={`${styles.green__title}`}>
                Die Hochschule
              </h3>

              <div className={styles.case}>
                <p className={`${styles.pages} ${styles.case__text}`}>
                  Die Universitäten und Fachhochschulen als dritte beteiligte Partei können durch die Zusammenarbeit mit den Firmen mit einem konstanten Zulauf an 
                  Studenten rechnen. So akquirieren Ihre Partnerunternehmen im übertragenen Sinne die Studierenden für Ihre Lehranstalt. Das garantiert ein gewisses 
                  Maß an Planungssicherheit und Einkommen für Ihre Hochschule.
                </p>
              </div>
          </div>
        </div>

        <div className={`${styles.details__item} ${styles.blue__section}`}>
          <div className={styles.details__item__content}>
            <div className={`${styles.details__container__pic}`}>
              <img src={COMPANY} alt="IMG" className={`${styles.details__pic}`} />
            </div>

            <h3 className={`${styles.blue__title}`}>
              Das Unternehmen
            </h3>

            <div className={styles.case}>
              <p className={`${styles.pages} ${styles.case__text}`}>
                Die Firma auf der anderen Seite beschäftigt einen Studenten/Praktikanten, der sich im jeweiligen Unternehmen auskennt. Damit entfällt die 
                kostspielige Einarbeitungszeit vor jeder Praxisphase und bei einer späteren Übernahme. Sie hat also die Möglichkeit, geeignete Studenten 
                längerfristig an sich zu binden. Teilweise werden auch Übernahmeregelungen mit den Studenten vereinbart, so dass diese nach dem Studium 
                verpflichtet sind, eine gewisse Zeit im Unternehmen zu arbeiten.
              </p>
            </div>
          </div>


        </div>
      </div>

    </div>
  </div>
  )
}

export default DSImDetail;
