import React from 'react';

import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import index from "../../styles/index.module.scss";
import grid from "../../styles/grid.module.scss";
import styles from "../../styles/Footer.module.scss";

import LOGO from "../../images/logo.jpg";

const Footer = () => {

  return (
    <div className={styles.footer} >

      <div className={`${index.container__blocks} ${grid.grid}`}>

      <div className={`${styles.footer__line__top} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}></div>

      <div className={`${styles.logo} ${grid.grid__item__1_2} ${grid.grid__item__tablet__1_2} ${grid.grid__item__phone__1_1}`}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Duales-studium" className={styles.logo_img} />
        </Link>
      </div>

{/*------------------------------------------desktop------------------------------------------------------ */}

      <div className={`${styles.footer__section} ${grid.grid__item__1_2}`}>
        <nav className={styles.footer__links}>
          <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Neuss</Link>
          <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Offenburg</Link>
          <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Mannheim</Link>
          <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Hallstadt-Bamberg</Link>
        </nav>

        <div className={`${styles.footer__line__between}`}></div>
      </div>

      <div className={`${styles.footer__section} ${grid.grid__item__3_4}`}>
        <nav className={styles.footer__links}>
            <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Braunschweig</Link>
            <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Schwanenmühle</Link>
            <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Frankfurt</Link>
            <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Trier</Link>
          </nav>

          <div className={`${styles.footer__line__between}`}></div>
      </div>

      <div className={`${styles.footer__section} ${grid.grid__item__5_6}`}>
        <nav className={styles.footer__links}>
          <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Übach-Palenberg</Link>
          <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Hamburg</Link>
          <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Stuttgart</Link>
          <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Meerbusch</Link>
        </nav>

        <div className={`${styles.footer__line__between}`}></div>
      </div>

      <div className={`${styles.footer__section} ${grid.grid__item__7_8}`}>
        <nav className={styles.footer__links}>
          <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Stuttgart</Link>
          <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Karlsruhe</Link>
          <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Mechernich</Link>
          <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Magdeburg</Link>
        </nav>

        <div className={`${styles.footer__line__between}`}></div>
      </div>

      <div className={`${styles.footer__section} ${grid.grid__item__9_10}`}>
        <nav className={styles.footer__links}>
            <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Amtzell</Link>
            <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Harsewinkel</Link>
            <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Ettlingen</Link>
            <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Bad Aibling</Link>
          </nav>

        <div className={`${styles.footer__line__between}`}></div>
      </div>

      <div className={`${styles.footer__section} ${grid.grid__item__11_12}`}>
        <nav className={styles.footer__links}>
          <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Pforzheim</Link>
          <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Stuttgart</Link>
          <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Kempten (Allgäu)</Link>
          <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Schwieberdingen</Link>
        </nav>
      </div>

{/*------------------------------------------tablet------------------------------------------------------ */}

      <div className={`${styles.footer__section__tablet} ${grid.grid__item__tablet__1_2}`}>
        <nav className={styles.footer__links}>
          <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Neuss</Link>
          <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Offenburg</Link>
          <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Mannheim</Link>
          <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Hallstadt-Bamberg</Link>
          <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Braunschweig</Link>
          <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Schwanenmühle</Link>
          <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Frankfurt</Link>
          <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Trier</Link>
        </nav>

        <div className={`${styles.footer__line__between}`}></div>
      </div>

      <div className={`${styles.footer__section__tablet} ${grid.grid__item__tablet__3_4}`}>
        <nav className={styles.footer__links}>
            <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Stuttgart</Link>
            <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Karlsruhe</Link>
            <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Mechernich</Link>
            <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Magdeburg</Link>
            <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Übach-Palenberg</Link>
            <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Hamburg</Link>
            <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Stuttgart</Link>
            <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Meerbusch</Link>
          </nav>

          <div className={`${styles.footer__line__between}`}></div>
      </div>

      <div className={`${styles.footer__section__tablet} ${grid.grid__item__tablet__5_6}`}>
        <nav className={styles.footer__links}>
            <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Amtzell</Link>
            <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Harsewinkel</Link>
            <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Ettlingen</Link>
            <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Bad Aibling</Link>
            <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Pforzheim</Link>
            <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Stuttgart</Link>
            <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Kempten (Allgäu)</Link>
            <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Schwieberdingen</Link>
          </nav>

      </div>

{/*------------------------------------------phone------------------------------------------------------ */}

      <div className={`${styles.footer__section__phone} ${grid.grid__item__phone__1_1}`}>
        <nav className={styles.footer__links}>
          <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Neuss</Link>
          <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Offenburg</Link>
          <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Mannheim</Link>
          <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Hallstadt-Bamberg</Link>
          <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Braunschweig</Link>
          <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Schwanenmühle</Link>
          <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Frankfurt</Link>
          <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Trier</Link>
          <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Stuttgart</Link>
          <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Karlsruhe</Link>
          <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Mechernich</Link>
          <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Magdeburg</Link>
        </nav>

        <div className={`${styles.footer__line__between}`}></div>
      </div>

      <div className={`${styles.footer__section__phone} ${grid.grid__item__phone__2_2}`}>
        <nav className={styles.footer__links}>
            <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Amtzell</Link>
            <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Harsewinkel</Link>
            <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Ettlingen</Link>
            <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Bad Aibling</Link>
            <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Pforzheim</Link>
            <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Stuttgart</Link>
            <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Kempten (Allgäu)</Link>
            <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Schwieberdingen</Link>
            <Link to="https://www.duales-studium.de/impressum" className={styles.footer__link}>Duales Studium in {"\n"} Übach-Palenberg</Link>
            <Link to="https://www.duales-studium.de/kontakt" className={styles.footer__link}>Duales Studium in {"\n"} Hamburg</Link>
            <Link to="https://www.duales-studium.de/ueber-uns" className={styles.footer__link}>Duales Studium in {"\n"} Stuttgart</Link>
            <Link to="https://www.duales-studium.de/ueber-uns/presse" className={styles.footer__link}>Duales Studium in {"\n"} Meerbusch</Link>
        </nav>
      </div>

        <div className={`${styles.footer__line__bottom} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}></div>
      </div>
    </div>
  );
};

export default Footer;
