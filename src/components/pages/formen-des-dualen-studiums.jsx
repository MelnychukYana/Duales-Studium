import React, { useState } from 'react';
import { Link as ScrollLink} from 'react-scroll';


import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

const FormenDesDS = () => {
  const [itemOpen1, setItemOpen1] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [arrowAnimation1, setArrowAnimation1] = useState(false);

  const [itemOpen2, setItemOpen2] = useState(false);
  const [arrowAnimation2, setArrowAnimation2] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleItem1 = () => {
    setItemOpen1(!itemOpen1);
    setIsOpen1(!isOpen1);
    setArrowAnimation1(!arrowAnimation1);
  };

  const toggleItem2 = () => {
    setItemOpen2(!itemOpen2);
    setIsOpen2(!isOpen2);
    setArrowAnimation2(!arrowAnimation2);
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

            <div className={styles.item}>
              <div className={styles.item__container} onClick={toggleItem1}>
                <p className={styles.item__main}>Erster Bildungsweg ohne vorherige abgeschlossene Ausbildung</p>
                <div className={`${styles.arrowAccordion} ${isOpen1 ? styles.open : ''}`}>
                  <div className={styles.arrowWrapper}>
                    <span className={`${styles.arrowAccordionLeft} ${arrowAnimation1 ? styles.animate : ''}`}></span>
                    <span className={`${styles.arrowAccordionRight} ${arrowAnimation1 ? styles.animate : ''}`}></span>
                  </div>
                </div>
              </div>
              <ul className={`${styles.item__content} ${itemOpen1 ? styles.open : ''}`}>
                <li className={`${styles.item__list} ${styles.blue__text}`}>
                  <ScrollLink
                    to="ausbildungsintegrierende"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className={`${styles.pages__link__blue}`}
                  >
                    Ausbildungsintegrierende duale Studiengänge
                  </ScrollLink>
                </li>
                <li className={`${styles.item__list} ${styles.blue__text}`}>
                  <ScrollLink
                    to="praxisintegrierende"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className={`${styles.pages__link__blue}`}
                  >
                    Praxisintegrierende duale Studiengänge
                  </ScrollLink>
                </li>
              </ul>
            </div>

            <div className={styles.item}>
              <div className={styles.item__container} onClick={toggleItem2}>
                <p className={styles.item__main}>Weiterbildungsweg mit bereits abgeschlossener Ausbildung</p>
                <div className={`${styles.arrowAccordion} ${isOpen2 ? styles.open : ''}`}>
                  <div className={styles.arrowWrapper}>
                    <span className={`${styles.arrowAccordionLeft} ${arrowAnimation2 ? styles.animate : ''}`}></span>
                    <span className={`${styles.arrowAccordionRight} ${arrowAnimation2 ? styles.animate : ''}`}></span>
                  </div>
                </div>
              </div>
              <ul className={`${styles.item__content} ${itemOpen2 ? styles.open : ""}`}>
                <li className={`${styles.item__list} ${styles.blue__text}`}>
                  <ScrollLink
                      to="berufsintegrierende"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      className={`${styles.pages__link__blue}`}
                    >
                      Berufsintegrierende duale Studiengänge
                    </ScrollLink>
                </li>
                <li className={`${styles.item__list} ${styles.blue__text}`}>
                  <ScrollLink
                    to="berufsbegleitende"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className={`${styles.pages__link__blue}`}
                  >
                    Berufsbegleitende duale Studiengänge
                  </ScrollLink>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      <div className={`${index.container__blocks} ${grid.grid}`}>
        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`} id="ausbildungsintegrierende">
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

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`} id="praxisintegrierende">
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

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`} id="berufsintegrierende">
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

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`} id="berufsbegleitende">
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
