import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import styles from "../../styles/Header.module.scss";

import LOGO from "../../images/logo.jpg";
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const location = useLocation();

  return (
    <header className={`${styles.header}`}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Duales-studium" className={styles.logo_img} />
        </Link>
      </div>

      <div className={styles.header__links_container}>
        <nav className={styles.header__links}>
          <Link to={ROUTES.HOME} className={`${styles.headerItem} ${location.pathname === ROUTES.HOME ? styles.headerItem__activeLink : ''}`}>Home</Link>
          <Link to={ROUTES.IMPRINT} className={`${styles.headerItem} ${location.pathname === ROUTES.IMPRINT ? styles.headerItem__activeLink : ''}`}>Impressum</Link>
          <Link to={ROUTES.CONTACT} className={`${styles.headerItem} ${location.pathname === ROUTES.CONTACT ? styles.headerItem__activeLink : ''}`}>Kontakt</Link>
          <Link to={ROUTES.ABOUT} className={`${styles.headerItem} ${location.pathname === ROUTES.ABOUT ? styles.headerItem__activeLink : ''}`}>Über uns</Link>
          <Link to={ROUTES.PRESS} className={`${styles.headerItem} ${location.pathname === ROUTES.PRESS ? styles.headerItem__activeLink : ''}`}>Presse</Link>
        </nav>
      </div>

      
      <div className={styles.menu__btn}>
        <Link to={ROUTES.MENU} className={styles.menu__link}>
          <AiOutlineMenu size={25} />
        </Link>
      </div>

    </header>
  );
};

export default Header;
