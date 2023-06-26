import React from 'react';

import index from "../../styles/index.module.scss";
import grid from "../../styles/grid.module.scss";
import styles from "../../styles/Pages.module.scss";

const About = () => {
  return (
    <div className={`${styles.pages}`} id='about'>
      <div className={`${index.container__pages} ${grid.grid}`}>

        <h3 className={`${styles.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          Das darf nicht sein...
        </h3>

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <p className={`${styles.pages} ${styles.case__text}`}>
            Jedes Jahr schließen <b className={styles.blue__text}>1,3 Millionen junge Menschen in Deutschland Ihre Schulausbildung</b> ab und stehen einer schwierigen Entscheidung gegenüber: 
            Sie müssen sich für die passende Ausbildung oder das richtige Studium entscheiden.
          </p>

          <p className={`${styles.pages} ${styles.case__text}`}>
            Was daran so schwierig ist? Hochschulen melden eine Abbrecherquote von Studienanfängern in Höhe von 20%. Unternehmen haben immense Kosten durch fehlende Nachwuchskräfte und die hohe Abbrecherquote. 
            Allein im Bereich der dualen Studiengänge versuchen <b className={styles.blue__text}>mehr als 22.000 Unternehmen mit hohem Aufwand jedes Jahr über 42.000 Plätze mit qualifizierten Kandidaten zu besetzen</b>. Diese Daten sprechen für sich.
          </p>
        </div>

      </div>

      <div className={`${styles.orange} ${index.container__blocks} ${grid.grid}`}>
        <h3 className={`${styles.orange__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          Das wollen wir dagegen tun...
        </h3>

        <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
          <p className={`${styles.pages} ${styles.case__text}`}>
              Unternehmen präsentieren sich und ihre Ausbildungs- und Studiengänge in <b className={styles.orange__text}>detaillierten, individuellen Profilen („Employer Branding“)</b> und selektieren Kriterien, 
              die von unserer Analyse für ein <b className={styles.orange__text}>optimales „Bewerber-Matching“</b> berücksichtigt werden, um geeignete Kandidaten vorzuschlagen („<b className={styles.orange__text}>Recruiting</b>“). Dies geschieht durch einen Vergleich psychologischer, sozialer und geografischer Faktoren, Erfahrungen, individuellen Interessen und Kompetenzen der Absolventen mit den Anforderungen der Unternehmen. Ähnliche Anforderungs-Profile werden auch von Universitäten, Fachhochschulen und Berufsakademien erstellt. 
              Die duales-studium GmbH setzt damit neue Maßstäbe in der Rekrutierung von Schulabgängern.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Das Internetportal hat den Anspruch <b className={styles.orange__text}>umfassend und vollständig zu informieren</b>. Der Vorteil für Schulabgänger: 
              ausführliche Informationen und Profile über Studien- und Ausbildungsgänge, Unternehmen und Hochschulen auf einer einzigen Webseite. Die <b className={styles.orange__text}>innovative 
              „Matching-Technologie“</b> empfiehlt Ausbildungs- und Studienmöglichkeiten, die optimal auf den jeweiligen Bewerber zugeschnitten sind und zuvor 
              vielleicht nicht einmal im Blickfeld des Schulabgängers standen.
            </p>
        </div>

      </div>

      <div className={`${index.container__blocks} ${grid.grid}`}>
        <h3 className={`${styles.green__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            Und das sind wir...
          </h3>

          <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            <p className={`${styles.pages} ${styles.case__text}`}>
              Selbst 1999-2003 als duale Studenten gestartet, entwickelten die späteren Gründer der duales-studium GmbH Nils Frohloff und Christian Buck schon während 
              ihres Studiums eine erste Version einer Internet-Suchmaschine, die es anderen Absolventen ermöglichen sollte, sich über duale Studienmöglichkeiten zu 
              informieren. Im Jahr 2009 haben Sie dann - auf Basis Ihrer Erfahrungen in den Bereichen Unternehmensentwicklung, 
              Marketing und IT - dieses Projekt in den rechtlichen Rahmen einer GmbH überführt und sind erfolgreich gestartet.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Ihren Prinzipien sind sie treu geblieben: Nicht der kurzfristige Profit, sondern die umfassende und vollständige Information steht im Vordergrund der Internetseiten, so dass ein größtmöglicher Nutzen für Absolventen entsteht und auf ablenkende Werbung und die permanente Präsentation einiger weniger Zahler verzichtet wird.
              Durch die Kooperation mit wissenschaftlichen Instituten zur optimalen Beratung der Absolventen durch eine "Matching-Technologie" soll ein wichtiger gesellschaftlicher Beitrag geleistet und dem akuten Fachkräftemangel aktiv entgegengewirkt werden.
          </p>
          </div>
      </div>
    </div>
  )
}

export default About;
