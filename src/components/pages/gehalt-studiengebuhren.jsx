import React from 'react';

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

const Gehalt = () => {
  return (
    <div className={`${styles.pages}`} id='gehalt-studiengebuhren'>
      <div className={`${index.container__pages} ${grid.grid}`}>
        <div className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <h2>Gehalt & Studiengebühren</h2>
        </div>

      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
        <div className={styles.case}>
          <p className={`${styles.pages} ${styles.case__text}`}>
            Für die meisten Schulabgänger spielt es eine elementare Rolle, welche finanziellen Risiken in einem angestrebten Studium versteckt sind. Ein Studium kommt für viele nicht in Frage, einfach weil sie sich die Gebühren nicht leisten können oder wollen. Hier liegt auch eines der schlagkräftigsten Argumente für das duale Studium verborgen: das Geld. In vielen Fällen werden nicht nur die Studiengebühren vom Unternehmen bezahlt, oft wird der Student noch zusätzlich vergütet. Dabei orientiert sich das Gehalt an den Bezügen eines „normalen“ Auszubildenden. Der Verdienst bewegt sich in den meisten Fällen zwischen etwa 500 und 1.000 Euro. Dies ist von verschiedenen Faktoren abhängig: Studierst Du an einer privaten oder öffentlichen Fachhochschule? Wie groß und etabliert ist dein Ausbildungsunternehmen? Generell gilt: Je größer das Unternehmen, desto höher Dein Verdienst. Je kleiner das Unternehmen, desto wahrscheinlicher ist es aber auch, dass Du von Beginn an stärker in das Tagesgeschäft eingebunden wirst. Du selbst entscheidest, was Dir wichtiger erscheint. Außerdem lässt sich feststellen, dass in einem wirtschaftlichem Betrieb meist mehr gezahlt wird als im Sozialwesen.
            {"\n"}
            Zwischen dem Studierenden und dem Unternehmen wird vorher vertraglich festgelegt, ob die ganzen oder nur ein Teil der Studiengebühren vom Unternehmen übernommen werden. Außerdem existieren in manchen Unternehmen Regelungen, die besagen, dass der Studierende nur während seiner Praxisphasen vergütet wird. Manche Firmen unterstützen Euch auch bei der Anschaffung von Lernmaterialien wie zum Beispiel Büchern. Informiert Euch also vor Vertragsabschluss genau darüber, wie viel und unter welchen Bedingungen Euer Unternehmen zahlt.
          </p>
        </div>
      </div>

      
      <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <p className={`${styles.pages} ${styles.case__text} ${styles.presse__plus__blue}`}>
            Die Studie zum Gehalt dual Studierender
            {"\n"}
            Wir haben mit der Hilfe von über 3.000 dual Studierenden Deutschlands größte Studie zum Gehalt im dualen Studium durchführen können. Sie soll Studierenden einen Überblick verschaffen, wie viel sie im Vergleich zu ihren Kommilitonen verdienen. Aber auch jene, die mit dem Gedanken spielen, ein duales Studium zu beginnen können hier eine sehr genaue Einsicht bekommen.
          </p>
        </div>
    </div>
  </div>
  )
}

export default Gehalt ;
