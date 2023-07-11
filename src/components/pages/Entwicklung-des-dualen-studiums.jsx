import React from 'react';

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

const Entwicklung = () => {
  return (
    <div className={`${styles.pages}`} id='entwicklung-des-dualen-studiums'>
      <div className={`${index.container__pages} ${grid.grid}`}>
        <div className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h2>Geschichte und Entwicklung des dualen Studiums</h2>
        </div>

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h3 className={`${styles.orange__title}`}>
            Die Geschichte
          </h3>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              In den frühen 70er Jahren stieg die Zahl der Abiturienten in Deutschland stark an. Die Unternehmen sorgten sich darum, 
              dass in Zukunft möglicherweise nicht genug qualifizierte Fachkräfte zur Verfügung stehen, da zu viele Schulabgänger studieren würden.
            </p>
          </div>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Die baden-württembergischen Unternehmen Daimler-Benz, Robert Bosch und Standard Elektrik Lorenz reagierten zuerst auf die neuen Umstände. Sie schlugen vor, die Ausbildung mit Inhalten der Hochschulen zu verbinden und so die Ausbildungsform für die Schulabsolventen wieder attraktiver zu machen.
            </p>
          </div>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Im Jahr 1974 wurde das „Stuttgarter Modell“ dann für eine Testphase ins Leben gerufen. Zu diesem Zweck wurden die ersten zwei Berufsakademien in Stuttgart und Mannheim geschaffen. Nur acht Jahre später wurde die Ausbildungsform als voller Erfolg bewertet und damit die Testphase abgeschlossen: Das duale Studium war endgültig in der deutschen Bildungslandschaft angekommen. Allerdings dauerte es noch weitere 13 Jahre bis 1995, bis die Absolventen der Berufsakademien auch offiziell den Status von Hochschulabsolventen bekamen. Seitdem zogen immer mehr Bundesländer nach und gründeten ihrerseits Berufsakademien. Heute bieten auch Fachhochschulen und sogar einige Universitäten duale Studiengänge an.
            </p>
          </div>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Schon seit einigen Jahren entwickelt sich das duale Studium als Ausbildungsform hervorragend. Sowohl die Zahl der Studierenden, als auch die der teilnehmenden Hochschulen und Unternehmen, steigt jedes Jahr in hohem Maß. Damit Ihr nicht alleine durch das dunkele Zahlendickicht stapfen müsst, haben wir die wichtigsten Daten für Euch zusammengefasst.
            </p>
          </div>

        </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h3 className={`${styles.green__title}`}>
          Studiengänge
        </h3>

        <div className={styles.case}>
          <p className={`${styles.pages} ${styles.case__text}`}>
            Die Zahl der dualen Studiengänge nimmt immer weiter zu. Wo am Anfang nur Studiengänge aus dem technischen oder wirtschaftlichen Bereich angeboten
             wurden, finden sich nun zum Beispiel auch soziale Studiengänge wie Pflege oder Psychologie. Außerdem werden immer mehr berufsbegleitende Studiengänge zur Weiterbildung angeboten. Seit 2007 bedeutet dies ein Wachstum um 718 auf 1.384 duale Studiengänge im Jahr 2012. Logischerweise muss es daher auch mehr Studierende geben als vorher, richtig?
          </p>
        </div>

      </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h3 className={`${styles.blue__title}`}>
          Studierende
        </h3>

        <div className={styles.case}>
          <p className={`${styles.pages} ${styles.case__text}`}>
            Richtig! Auch hier ist der Anstieg bemerkenswert: Mehr 20.000 Studierende sind im angesprochenen Zeitraum der vergangenen sechs Jahre dazu gekommen. Damit liegt die Ausbildungsform bei 64.093 Studierenden bundesweit für das Jahr 2012. Tendenz natürlich weiterhin steigend. Damit diese Entwicklung beibehalten werden kann, müssen natürlich auch viele Unternehmen mit den Hochschulen kooperieren…
          </p>
        </div>

      </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h3 className={`${styles.orange__title}`}>
            Unternehmen
          </h3>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Und das machen Sie auch. Allein der Sprung in den vergangenen drei Jahren war enorm: 2010 waren es noch 27.900 Unternehmen, die duale Studenten einstellen, nur ein Jahr später waren es mit 40.874 Firmen 46,5 Prozent mehr. Im Jahr 2012 boten deutschlandweit 45.630 Unternehmen mindestens einen dualen Studiengang an. Somit entwickeln sich alle drei Parteien weiter: Die Unternehmen stellen mehr duale Studierende ein, die Hochschulen entwickeln immer mehr neue Studiengänge, immer mehr Schülerinnen und Schüler entscheiden sich für ein duales Studium. So kann es weiter gehen.
            </p>
          </div>

        </div>
    </div>
  </div>
  )
}

export default Entwicklung ;
