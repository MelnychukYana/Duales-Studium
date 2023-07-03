import React, { useState } from 'react';

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

const FormenDesDS = () => {
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);

  const toggleMenu1 = () => {
    setMenuOpen1(!menuOpen1);
  };

  const toggleMenu2 = () => {
    setMenuOpen2(!menuOpen2);
  };

  return (
    <div className={`${styles.pages}`} id="formen-des-dualen-studiums">
      <div className={`${index.container__pages} ${styles.blue__section} ${grid.grid}`}>
        <div className={`${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <div className={`${styles.blue__title} `}>
            <h2>Die Unterschiede - Verschiedene Formen des dualen Studiums</h2>
          </div>

          <div className={`${styles.case}`}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Ein Duales Studium ist nicht einfach ein duales Studium. Es gibt verschiedene Formen, die sich in einigen Punkten wesentlich unterscheiden.
              {"\n"}
              Entscheidend sind vier zentrale Begrifflichkeiten, die sich wie folgt gruppieren lassen:
            </p>

            <div className={styles.menu} onClick={toggleMenu1}>
              <p>Erster Bildungsweg ohne vorherige abgeschlossene Ausbildung:</p>
              <ul className={`${styles.menu_content} ${menuOpen1 ? styles.open : ""}`}>
                <li><a href="#ausbildungsintegrierende">Ausbildungsintegrierende duale Studiengänge</a></li>
                <li><a href="#praxisintegrierende">Praxisintegrierende duale Studiengänge</a></li>
              </ul>
            </div>

            <div className={styles.menu} onClick={toggleMenu2}>
              <p>Weiterbildungsweg mit bereits abgeschlossener Ausbildung:</p>
              <ul className={`${styles.menu_content} ${menuOpen2 ? styles.open : ""}`}>
                <li><a href="#ausbildungsintegrierende">Berufsintegrierende duale Studiengänge</a></li>
                <li><a href="#praxisintegrierende">Berufsbegleitende duale Studiengänge</a></li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      <div className={`${index.container__blocks} ${grid.grid}`}>
        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h3 className={`${styles.orange__title}`}>
            Ausbildungsintegrierende duale Studiengänge
          </h3>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Bei diesem, meist 4-jährigen Ausbildungsweg, wird ein Studium mit Bachelor-Abschluss und eine Ausbildung mit IHK/HWK-Abschluss, bzw. fachschulischem Abschluss kombiniert. Als Zugangsvoraussetzung gilt die allgemeine Hochschulreife oder die Fachhochschulreife. Außerdem wird normalerweise ein Ausbildungsvertrag zwischen Unternehmen und Student als Bedingung erwartet.
              {"\n"}
              Während des Studiums wird die Ausbildung tage- oder blockweise im Unternehmen absolviert. Dabei wird der gewohnte Berufsschulunterricht gestrafft und teilweise von der Hochschule übernommen. Auf diese Weise ist ein gewisser Bezug zwischen Theorie im Studium und der Praxis im Unternehmen gewährleistet.
              {"\n"}
              In einigen Bundesländern, vor allem an bayrischen Fachhochschulen, existiert eine Form von dualem Studium, bei der das Studium erst nach einem Jahr Ausbildung beginnt und die restliche Ausbildung in der studienfreien Zeit nachgeholt wird. Auch diese Form gehört zu den ausbildungsintegrierenden Studiengängen.
            </p>
          </div>
        </div>

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h3 className={`${styles.green__title}`}>
            Praxisintegrierende duale Studiengänge
          </h3>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Dieser 3-4-jährige Ausbildungsweg verbindet ein Bachelor-Studium mit integrierten Praxisphasen. Interessenten benötigen im Vorfeld keinerlei Ausbildung oder Berufserfahrung. Allerdings gilt als Zugangsvoraussetzung die allgemeine Hochschulreife oder die Fachhochschulreife. Auch ein Arbeits-, Volontariats-, Praktikanten- oder Studienvertrag mit einem Unternehmen wird benötigt.
              {"\n"}
              Entweder findet der Studiengang in Form von Teilzeitarbeit im Unternehmen oder in langen Praxisphasen ohne Studium statt. Diese sind mit den Praxissemestern eines „normalen“ Studiums nicht zu vergleichen, da sie zumeist auf den Studieninhalt abgestimmt sind und so eine optimale Verzahnung von Theorie und Praxis ermöglichen.
            </p>
          </div>

        </div>

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h3 className={`${styles.blue__title}`}>
            Berufsintegrierende duale Studiengänge
          </h3>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Ein zumeist 3-4-jähriger Ausbildungsweg, der einen Studiums-Abschluss mit Teilzeittätigkeit kombiniert. Hierbei gilt eine abgeschlossene Berufsausbildung als Zugangsvoraussetzung, die allgemeine Hochschul- oder die Fachhochschulreife werden jedoch nicht erwartet. Außerdem benötigt ein Interessent einen Teilzeitarbeitsvertrag mit einem Unternehmen, wobei die Arbeit während des Studiums tage- oder blockweise ausgeführt wird.
              {"\n"}
              Es handelt sich um einen Ausbildungsweg, der eine Verknüpfung von Theorie und der dazu passenden Praxis ermöglicht.
              {"\n"}
              Bei einigen Studiengängen besteht auch die Option, zusätzlich eine Meisterqualifikation zu erlangen.
              {"\n"}
              Andere setzen einen Meister- oder Techniker-Abschluss voraus oder rechnen diese Abschlüsse mit an.
            </p>
          </div>
        </div>

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h3 className={`${styles.orange__title}`}>
            Berufsbegleitende duale Studiengänge
          </h3>

          <div className={styles.case}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Hier wird ein Studien-Abschluss mit einer Vollzeittätigkeit kombiniert. Die allgemeine Hochschul- oder die Fachhochschulreife sind hierbei keine Voraussetzung.
              {"\n"}
              Es handelt sich um ein Selbststudium, das parallel zum regulären Arbeitsalltag verläuft und Begleitseminare beinhaltet, die höchstens an einem Tag in der Woche stattfinden. Dabei nimmt das Unternehmen eine unterstützende Rolle ein, sei es durch Freistellung oder Erleichterung der Arbeit.
            </p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default FormenDesDS;
