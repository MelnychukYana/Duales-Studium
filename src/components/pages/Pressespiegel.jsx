import React from 'react';
import { Link} from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import index from "../../styles/index.module.scss";
import styles from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

import PRESSE from "../../images/presse_Nils.jpg";

const Pressemitteilungen = () => {

  return (
    <div className={`${styles.pages}`} id="pressespiegel">
        <div className={`${index.container__pages} ${grid.grid}`}>
          <div className={`${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            <h2  className={`${styles.green__title}`}>
              Online-Portal für den potenziellen Führungskräftenachwuchs
            </h2>
          </div>

          <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            <div className={`${styles.presse__plus__pic__container}`} >
              <img src={PRESSE} alt="IMG" className={`${styles.presse__plus__pic}`} />
            </div>

            <p className={`${styles.pages} ${styles.case__text__first}`}>
              Vlotho (va). Was bereits 2001 als lockeres Studentenprojekt begann, ist jetzt als Unternehmen an den Start gegangen. Mit 
              der Firma "Duales Studium GmbH" will der 31-jährige Exteraner Nils Frohloff quasi eine "Win-Win-Win-Idee" verwirklichen: 
              sinnvoll für Schüler als künftige Studenten, sinnvoll für die Hochschulen und sinnvoll für die Unternehmen.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Das duale Studium - angeboten von Hochschulen in Zusammenarbeit mit Unternehmen - ist längst kein Geheimtipp mehr. Auch 
              Nils Frohloff hat ein solches Studium absolviert: Wirtschaftsingenieurswesen an der Fachhochschule Südwestfalen, 
              Abteilung Meschede. Und im Gespräch mit Kommilitonen erfuhr er damals, dass viele eher zufällig ins duale Studium 
              hereingerutscht waren. Weil es Verwandte gab, die schon im Unternehmen arbeiteten, oder planlos und "auf den letzten 
              Drücker." Für Nils Frohloff stand fest: Irgendetwas stimmt hier nicht.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              "Mir gefiel es nicht, dass viele Leute ihre Berufsorientierung mehr oder weniger dem Zufall überließen." Schon damals 
              entwickelte er gemeinsam mit Christian Buck die erste Version einer Internet-Suchmaschine, die andere Absolventen über 
              duale Studienmöglichkeiten informieren sollte.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Die Studenten wussten: Jährlich schließen 1,3 Millionen junge Menschen in Deutschland ihre Schulausbildung ab und müssen sich für die passende Ausbildung oder das richtige Studium entscheiden. "Erstmal BWL" sei da nicht immer die beste Antwort, wusste Frohloff.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Schon damals bekamen die beiden eine gute Resonanz auf ihr Vorhaben, hatten aber noch nicht die Traute, sich sogleich nach dem eigenen Studium selbstständig zu machen.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Nils Frohloff hat erst einmal Erfahrungen gesammelt: Fünf Jahre bei MIT in Vlotho-Exter, dann die Erfüllung eines Traums: das MBA-Studium in Australien.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Die "alte Idee" aber ließ ihn nie los. In "Down Under" hat er einen Businessplan geschrieben, war und ist mehr denn je davon überzeugt, dass das Projekt als Start-Up funktionieren kann.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Buck arbeitet weiter bei MIT und unterstützt seinen Kumpel nach Kräften, denn Frohloff, der sein Brot als Unternehmensberater verdient, wagte 
              den Schritt: Mitte 2010 gründeten beide die "Duales Studium GmbH", im Januar 2011 ging die interaktive Internetseite <Link to={ROUTES.HOME} className={`${styles.green__text} ${styles.pages__link}`}>www.duales-studium.de</Link> online.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Nach sage und schreibe vier Wochen waren bereits 450 Schülerinnen und Schüler mit Profilen registriert, über 1300 Unternehmen sind erfasst, die Akquise beginnt in diesen Tagen. Auch die Firmen können und sollen ihre Profile einstellen, was zwar in diesem Fall Geld kostet, aber eben auf kurze und lange Sicht profitabel sein soll.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Das Prinzip vergleicht Frohloff mit einer Internet-Flirtbörse, auf der sich Absolventen, aber auch Unternehmen individuell darstellen können. Über die bestehenden Internet-Angebote gehe das Start-Up hinaus, ist Frohloff überzeugt. "Denn viele Schulabgänger wissen nicht, was es überhaupt für Studiengänge gibt oder welche Partnerunternehmen infrage kommen. Sie suchen dann im Internet nur nach Angeboten, die sie ohnehin schon kennen."
            </p>

            <div className={`${styles.line__container}`}>
              <div className={`${styles.line}`}></div>
            </div>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Trefferquote durch Profile erhöhen
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Die neue Seite hingegen soll die Trefferquote erhöhen, gerade auch, was die regionalen Plätze angeht. Angegeben werden kann im Profil nämlich die Entfernung des Unternehmens zum eigenen Wohnort. Die Frage "Passen wir zueinander?" wird ausführlich beantwortet - auf beiden Seiten. Der Absolvent kann darstellen, ob vom Typ her Einzelkämpfer oder Teamplayer, ob ein kleines oder ein großes Unternehmen bevorzugt wird. Das Unternehmen liefert eine ausführliche Selbstbeschreibung und kann- wenn gewünscht - mit Präsentationsfilmen punkten.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              "Das Ziel unserer Internetseite ist es auch, die Zahl der Studienabbrecher zu senken", sagt Nils Frohloff. Schade sei es, wenn ein Studium nach zwei oder mehr Semestern beendet wird, die Zeit sei möglicherweise verpufft, der Wirtschaft entstehe Schaden.
            </p>

            <p className={`${styles.pages} ${styles.case__text}`}>
              Und Schaden will keiner. Frohloff hofft, dass das Start-Up zum durchschlagenden Erfolg wird. Denn es sieht schon jetzt ganz so aus, dass zum "Win-Win-Win" noch ein ganz persönliches "Win" dazukommt.
            </p>
          </div>

          <div className={`${styles.case} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            <h3 className={`${styles.orange__title}`}>
              Per "Klick" zum Traumstudium
            </h3>

            <div className={styles.case}>
              <p className={`${styles.pages} ${styles.case__text}`}>
                Um Transparenz in den wachsenden Markt der dualen Studiengänge zu bringen, hat der Löhner Wirtschaftsingenieur N. Frohloff vor 
                kurzem das Start-Up "duales-studium GmbH" ins Leben gerufen. Auf einer Website, die Ende 2010 online ging, haben Unternhemen die 
                Möglichkeit, potenziellen Führungskräftenachwuchs zu akquirieren. Auch Hochschulen können sich dort präsentieren. "Außerdem wollen 
                wir Schülern, die sich im Berufsfindungsprozess befinden, über die bestehenden Möglichkeiten dualer Ausbildungswege informieren", 
                erklärt der 31 Jährige. Durch spezielle Tests und Vorliebensabfragen liefert die Datenbank den Jugendlichen Vorschläge für eine 
                passende Bildungskarriere. Frohloff: "Zudem vermitteln wir die Kontaktdaten von Unternehmen, die eine solche Ausbildung ermöglichen." 
                Das Prinzip sei mit dem einer Internet-Flirtbörse vergleichbar. "Das Problem ist, dass viele Schulabgänger gar nicht wissen, was es 
                für verschiedene Studiengäge gibt. Sie suchen im Internet nur nach dem, was sie kennen. Wir hingegen zeigen ihnen Angebote auf, die auch zu ihnen passen."
              </p>

              <p className={`${styles.pages} ${styles.case__text}`}>
                In einem zweiten Schritt soll es den Schülern zudem möglich sein, ein eigenes Profil hoch zu laden, das die Firmen mit ihren Anforderungen an Bewerbern abgleichen könnten. "Mit unserer Website möchten wir das Matching zwischen Berufsanfängern, Unternehmen und Hochschulen optimieren", sagt Frohloff, der vor gut zehn Jahren selbst ein duales Wirtschaftsingenieurstudium absolviert hat. Zusamen mit seinen Mitstudenten habe er damals auch die Idee für die Kontaktplattform entwickelt und eine Homepage gestaltet. Den Bedarf für ein solches Vermittlungsangebot schätzt der Unternehmer hoch ein: "Eine Umfrage auf unserer alten Website hat gezeigt, dass sich viele Schüler und Unternhemen für ein solches Angebot interessieren."
                {"\n"}
                <span className={`${styles.presse__plus__orange}`}>
                  Daniel Salmon, Ostwestfälische Wirtschaft, Ausgabe Januar 2011
                </span>
              </p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Pressemitteilungen
