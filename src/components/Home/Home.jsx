import React from 'react';
import { Link } from "react-router-dom";

import styles from "../../styles/Home.module.scss";

import grid from "../../styles/grid.module.scss";
import 'animate.css';

import GallerySwiper from './GallerySwiper';

import BLOCK1IMG from "../../images/block1__IMG.png";
import b2p1_img from "../../images/b2p1_img.svg";
import b2p2_img from "../../images/b2p2_img.svg";
import b2p3_img from "../../images/b2p3_img.svg";

export const Home = () => {
  return (
    <div className={`${styles.home}`}>
      <div className={`${styles.block__1} `}>
        <div className={`${styles.container__block__1} ${grid.grid}`}>
          <div className={`${styles.container__Block1_IMG1} ${grid.grid__item__1_6} ${grid.grid__item__tablet__1_3} ${grid.grid__item__phone__1_2}`}>
            <img src={BLOCK1IMG} alt="IMG" className={`${styles.block1__img} `} />
          </div>

          <div className={`${styles.block1__story} ${grid.grid__item__8_12} ${grid.grid__item__tablet__4_6} ${grid.grid__item__phone__1_2}`}>
            <h1 className={styles.block1__title}>
              Duales-studium.de - Die 
              vollständigste Placement-
              Community zum dualen 
              Studium im Web!
            </h1>

            <div className={`${styles.block1__text} ${grid.grid__item__8_12} ${grid.grid__item__tablet__4_6} ${grid.grid__item__phone__1_2}`}>
              Schüler und Studenten, Unternehmen und Hochschulen treffen sich auf einer Plattform, um alles rund um das duale Studium zu finden, zu präsentieren und zu diskutieren. Mit Erfahrungsberichten, Foren, persönlichem Stärkentest, individueller Studiengang-Empfehlung...
            </div>
          </div>
        </div>

      </div>

      <div className={styles.block__2}>

        <div className={`${styles.container__for_blocks} ${styles.container__blocks}`}>
          
          <div className={`${styles.block__main} ${styles.block__sudents}`}>
            <div className={styles.container__block2}>
              <div className={styles.container__Block2_IMG}>
                <img src={b2p1_img} alt="BLOCK1IMG" className={styles.block2__img} />
              </div>

              <h3 className={styles.b2p1__title}>Schüler</h3>

              <p className={styles.b2__text}>
                Du weißt noch nicht genau, ob Du demnächst studieren möchtest?
                Was Du gerne studieren möchtest?
                {"\n"}
                Wie Du das alles bezahlen sollst?
                {"\n"}
                Und wie das alles so geht?
                {"\n"}
                Ob das überhaupt was für Dich ist?
              </p>

              <p className={styles.b2__text}>
                Hast du schon mal über ein duales Studium nachgedacht?
              </p>

              <nav className={styles.b2__links}>
                <Link to="https://www.duales-studium.de/impressum" className={styles.b2__Item}>
                  ▶ Mehr erfahren / mitmachen!
                </Link>
                {"\n"}
                <Link to="https://www.duales-studium.de/kontakt" className={styles.b2__Item}>
                  ▶ kostenlos anmelden
                </Link>
                {"\n"}
                <Link to="https://www.duales-studium.de/kontakt" className={styles.b2__Item}>
                  [mehr]
                </Link>
              </nav>

              <div className={styles.b2__Buttons}>
                <Link to="https://www.duales-studium.de/fuer-schueler-und-studenten">
                  <button className={`${styles.main__button} ${styles.b2button1}`}>Jetzt durchstaren</button>
                </Link>
              </div>
            </div>
          </div>

          <div className={`${styles.block__main} ${styles.block__business} }`}>
            <div className={styles.container__block2}>
              <div className={styles.container__Block2_IMG}>
                <img src={b2p2_img} alt="BLOCK1IMG" className={styles.block2__img} />
              </div>

              <h3 className={styles.b2p2__title}>Unternehmen</h3>
              <p className={styles.b2__text}>
              Sie möchten hochqualifizierte Mitarbeiter ausbilden? 
              Oder Ihrem Unternehmen den zukünftigen Fachkräftemangel ersparen? 
              Zeit und Budget zur Personalsuche sind knapp?
              </p>
              <p className={styles.b2__text}>
              Sichern Sie sich den Zugang zu den TOP-Schulabgängern, 
              die Sie über das duale Studium langfristig binden können!
              </p>

              <nav className={styles.b2__links}>
                <Link to="https://www.duales-studium.de/impressum" className={styles.b2__Item}>
                  ▶ Mehr erfahren / mitmachen!
                </Link>
                {"\n"}
                <Link to="https://www.duales-studium.de/kontakt" className={styles.b2__Item}>
                  ▶ kostenlos anmelden
                </Link>
                {"\n"}
                <Link to="https://www.duales-studium.de/kontakt" className={styles.b2__Item}>
                  [mehr]
                </Link>
              </nav>

              <div className={styles.b2__Buttons}>
                <Link to="https://www.duales-studium.de/fuer-unternehmen">
                  <button className={`${styles.main__button} ${styles.b2button2}`}>Partner werden</button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className={`${styles.block__main} ${styles.block__colleges} `}>
            <div className={styles.container__block2}>
            <div className={styles.container__Block2_IMG}>
                <img src={b2p3_img} alt="BLOCK1IMG" className={styles.block2__img} />
              </div>
            <h3 className={styles.b2p3__title}>Hochschulen</h3>
            <p className={styles.b2__text}>
            Sie suchen nach Wegen das Image Ihrer Hochschule weiter zu steigern? 
            Exzellente Studenten anzuwerben und somit langfristig Studentenzahlen und Gelder zu sichern? 
            Sie kooperieren bereits mit Unternehmen und wollen damit werben?
            </p>

            <p className={styles.b2__text}>
            Präsentieren Sie Ihre Hochschule 
            und profitieren von dualen Studiengängen!
            </p>

            <nav className={styles.b2__links}>
                <Link to="https://www.duales-studium.de/impressum" className={styles.b2__Item}>
                  ▶ Unsere Angebote für Hochschulen
                </Link>
                {"\n"}
                <Link to="https://www.duales-studium.de/kontakt" className={styles.b2__Item}>
                  ▶ Kontakt
                </Link>
                {"\n"}
                <Link to="https://www.duales-studium.de/kontakt" className={styles.b2__Item}>
                  [mehr]
                </Link>
            </nav>

            <div className={styles.b2__Buttons}>
              <Link to="https://www.duales-studium.de/fuer-hochschulen">
                <button className={`${styles.main__button} ${styles.b2button3}`}>Jetzt einsteigen</button>
              </Link>
            </div>
            </div>

          </div>

        </div>

      </div>

      <div className={styles.block__4} >

        <div className={`${styles.container__blocks} `}>
          <div className={`${grid.grid}`}>
            <h2 className={`${styles.block4__title} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
              PARTNER
            </h2>
          </div>
          
          <GallerySwiper />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
