import React from 'react';

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

const Zeitmodelle = () => {
  return (
    <div className={`${styles.pages}`} id='zeitmodelle'>
      <div className={`${index.container__pages} ${grid.grid}`}>
        <div className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h2>Zeitmodelle - Block- vs Wochensystem</h2>
        </div>

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <p className={`${styles.pages} ${styles.case__text} ${styles.presse__plus__blue}`}>
            Damit kein Aspekt des dualen Studiums zu kurz kommt, werden Theorie- und Praxisphasen vorher genau aufgeteilt. Dabei gibt es zwei Systeme die sich etabliert haben: Das Blockmodell und das Wochenmodell. Im Folgenden erklären wir die beiden Typen etwas genauer.
          </p>
        </div>


        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h3 className={`${styles.orange__title}`}>
            Blockmodell
          </h3>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Hier wird das duale Studium in größere, meist drei-monatige Blöcke eingeteilt. So arbeitet der Studierende erst für drei Monate im Betrieb (hier rot), dann ist er wieder an der Hochschule (hier grün) und lernt die theoretischen Inhalte. Das Blockmodell zeichnet sich dadurch aus, dass die theoretischen und praktischen Phasen länger andauern.
            </p>
          </div>

        </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h3 className={`${styles.green__title}`}>
          Wochenmodell
        </h3>

        <div className={styles.case}>
          <p className={`${styles.pages} ${styles.case__text}`}>
            Dieses Modell verbindet den theoretischen und praktischen Aspekt sehr zeitnah. So verbringt der Studierende in diesem System drei Tage in der Woche im Betrieb (rot), die anderen zwei/drei Tage dann in der Hochschule (grün). Das Wochenmodell zeichnet sich also dadurch aus, dass beide Phasen im direkten Wechsel in jeder Woche vertreten sind.
            {"\n"}
            Natürlich sind diese Angaben nicht verbindlich. Wie genau die Verteilung der Phasen geregelt ist, liegt bei der Hochschule und dem Unternehmen. Die Beispiele sollten lediglich die beiden grundsätzlichen Typen veranschaulichen.
            {"\n"}
            Welches System besser oder angenehmer ist, lässt sich allgemeinen nicht beantworten. Es hängt von den Vorlieben des Studierenden ab: Fällt es Dir schwer, dich kurzfristig umzustellen? Möchtest Du Dich auf beide Aspekte immer voll konzentrieren können? Dann liegt Dir das Blockmodell eher. Willst Du die direkte Verbindung zwischen Theorie und Praxis haben und Gelerntes unmittelbar im Betrieb umsetzen? Dann empfiehlt sich für Dich eher das Wochensystem.
          </p>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Zeitmodelle;
