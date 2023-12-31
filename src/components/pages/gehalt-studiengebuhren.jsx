import React from 'react';

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

import CARD from "../../images/credit-card.png";

const Gehalt = () => {
  return (
    <div className={`${styles.pages}`} id='gehalt-studiengebuhren'>
      <div className={`${index.container__pages} ${grid.grid}`}>
        <div className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h2>Gehalt & Studiengebühren</h2>
        </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <div className={`${styles.gehalt__container__pic}`}>
          <img src={CARD} alt="IMG" className={`${styles.gehalt__pic}`} />
        </div>

        <p className={`${styles.pages} ${styles.case__text__first}`}>
          Für die meisten Schulabgänger spielt es eine elementare Rolle, welche finanziellen Risiken in einem angestrebten Studium 
          versteckt sind. Ein Studium kommt für viele nicht in Frage, einfach weil sie sich die Gebühren nicht leisten können oder 
          wollen. Hier liegt auch eines der schlagkräftigsten Argumente für das duale Studium verborgen: das Geld. In vielen Fällen 
          werden nicht nur die <span className={`${styles.blue__text}`}>Studiengebühren vom Unternehmen bezahlt, oft wird der Student noch zusätzlich vergütet.</span> Dabei 
          orientiert sich das Gehalt an den Bezügen eines „normalen“ Auszubildenden. Der Verdienst bewegt sich in den meisten Fällen <span className={`${styles.blue__text}`}>zwischen etwa 500 und 1.000 Euro.</span> Dies ist von verschiedenen Faktoren abhängig: Studierst Du an einer privaten oder 
          öffentlichen Fachhochschule? Wie groß und etabliert ist dein Ausbildungsunternehmen? Generell gilt: <span className={`${styles.blue__text}`}>Je größer das Unternehmen, 
          desto höher Dein Verdienst.</span> Je kleiner das Unternehmen, desto wahrscheinlicher ist es aber auch, dass Du von Beginn an stärker 
          in das Tagesgeschäft eingebunden wirst. Du selbst entscheidest, was Dir wichtiger erscheint. Außerdem lässt sich feststellen, 
          dass in einem wirtschaftlichem Betrieb meist mehr gezahlt wird als im Sozialwesen.
        </p>
        
        <p className={`${styles.pages} ${styles.case__text}`}>
          <span className={`${styles.blue__text}`}>Zwischen dem Studierenden und dem Unternehmen wird vorher vertraglich festgelegt</span>, ob die ganzen oder nur ein Teil der Studiengebühren vom Unternehmen übernommen werden. Außerdem existieren in manchen Unternehmen Regelungen, die besagen, dass der Studierende nur während seiner Praxisphasen vergütet wird. Manche Firmen unterstützen Euch auch bei der Anschaffung von Lernmaterialien wie zum Beispiel Büchern. Informiert Euch also vor Vertragsabschluss genau darüber, wie viel und unter welchen Bedingungen Euer Unternehmen zahlt.
        </p>
      </div>

    </div>

    <div className={`${index.container__blocks} ${styles.blue__section} ${grid.grid}`}>
      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <h3 className={`${styles.blue__title}`}>
        Die Studie zum Gehalt dual Studierender
        </h3>

        <p className={`${styles.pages} ${styles.case__text}`}>
          Wir haben mit der Hilfe <span className={`${styles.blue__text}`}>von über 3.000 dual Studierenden Deutschlands</span> größte Studie zum Gehalt im dualen Studium durchführen können. Sie soll Studierenden einen Überblick verschaffen, wie viel sie im Vergleich zu ihren Kommilitonen verdienen. Aber auch jene, die mit dem Gedanken spielen, ein duales Studium zu beginnen können hier eine sehr genaue Einsicht bekommen.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Gehalt ;
