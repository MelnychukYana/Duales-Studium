import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Link} from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import styles from "../../styles/Menu.module.scss";
import grid from "../../styles/grid.module.scss";

import { AiOutlineClose } from 'react-icons/ai';

const Menu = () => {
  const [activeLink, setActiveLink] = useState('product');
  const navigate = useNavigate();

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);

  const location = useLocation();

//Якщо меню відкрите скрита прокрутка
useEffect(() => {
  const setOverflowY = () => {
    document.documentElement.style.overflowY = location.pathname === '/menu' ? 'hidden' : 'auto';
  };

  setOverflowY();

  return () => {
    document.documentElement.style.overflowY = 'auto';
  };
}, [location]);


  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  const goBack = () => {
    navigate(-1); // Повертаємося до попередньої сторінки
  };

  const handleItemClick1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false); 
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const handleItemClick2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false); 
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const handleItemClick3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false); 
    setIsOpen2(false); 
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const handleItemClick4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen1(false); 
    setIsOpen2(false); 
    setIsOpen3(false);
    setIsOpen5(false);
  };

  const handleItemClick5 = () => {
    setIsOpen5(!isOpen5);
    setIsOpen1(false); 
    setIsOpen2(false); 
    setIsOpen3(false);
    setIsOpen4(false);
  };

  const handleItemClick6 = () => {
    setIsOpen6(!isOpen6);
    setIsOpen7(false); 
    setIsOpen8(false); 
    setIsOpen9(false);
  };
  
  const handleItemClick7 = () => {
    setIsOpen7(!isOpen7);
    setIsOpen6(false); 
    setIsOpen8(false); 
    setIsOpen9(false);
  };

  const handleItemClick8 = () => {
    setIsOpen8(!isOpen8);
    setIsOpen6(false); 
    setIsOpen7(false); 
    setIsOpen9(false);
  };

  const handleItemClick9 = () => {
    setIsOpen9(!isOpen9);
    setIsOpen6(false); 
    setIsOpen7(false); 
    setIsOpen8(false);
  };

  const handleItemClick10 = () => {
    setIsOpen10(!isOpen10);
    setIsOpen11(false); 
    setIsOpen12(false);
    setIsOpen13(false);
    setIsOpen14(false);
  };

  const handleItemClick11 = () => {
    setIsOpen11(!isOpen11);
    setIsOpen10(false);  
    setIsOpen12(false);
    setIsOpen13(false);
    setIsOpen14(false);
  };

  const handleItemClick12 = () => {
    setIsOpen12(!isOpen12);
    setIsOpen10(false); 
    setIsOpen11(false); 
    setIsOpen13(false);
    setIsOpen14(false);
  };

  const handleItemClick13 = () => {
    setIsOpen13(!isOpen13);
    setIsOpen10(false); 
    setIsOpen11(false); 
    setIsOpen12(false);
    setIsOpen14(false);
  };

  const handleItemClick14 = () => {
    setIsOpen14(!isOpen14);
    setIsOpen10(false); 
    setIsOpen11(false); 
    setIsOpen12(false);
    setIsOpen13(false);
  };

  return (
    <div className={`${styles.container__menu} ${styles[`background-${activeLink}`]}`}>
      <div className={styles.block__btn}>
        <div className={`${styles.go__back} `}>
          <AiOutlineClose size={30} onClick={goBack} style={{ color: styles[`background-${activeLink}`] }}/>
        </div>
      </div>

      <ul className={`${styles.menu__links} ${grid.grid__menu}`}>
        <div className={`${styles.menu__button} ${grid.grid__menu__item__1_4} ${grid.grid__menu__item__tablet__1_2} ${grid.grid__menu__item__phone__2_3}`}>
          <li className={`${styles.menu__item} `}>
            <div
              className={`${activeLink === 'product' ? styles.active : ''} `}
              onClick={() => handleLinkClick('product')}
            >
              Für Studenten
            </div>
          </li>
        </div>
        <div className={`${styles.menu__button} ${grid.grid__menu__item__5_8} ${grid.grid__menu__item__tablet__3_4} ${grid.grid__menu__item__phone__2_3}`}>
          <li className={`${styles.menu__item}`}>
            <div
              className={activeLink === 'about' ? styles.active : ''}
              onClick={() => handleLinkClick('about')}
            >
              Für Hochschulen
            </div>
          </li>
        </div>
        <div className={`${styles.menu__button} ${grid.grid__menu__item__9_12} ${grid.grid__menu__item__tablet__5_6} ${grid.grid__menu__item__phone__2_3}`}>
          <li className={`${styles.menu__item} `}>
            <div
              className={activeLink === 'customers' ? styles.active : ''}
              onClick={() => handleLinkClick('customers')}
            >
              Für Unternehmen
            </div>
          </li>
        </div>
      </ul>

      <div className={`${styles.link__content}`}>
        {activeLink === 'product' && (
          <ul className={`${styles.product__list} ${grid.grid__menu}`}>
            <div className={`${styles.menu__list__plus} ${grid.grid__menu__item__phone__2_3}`}>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.HOME} >
                  Home
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.IMPRINT} >
                  Impressum
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.CONTACT} >
                  Kontakt
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.ABOUT}>
                  Über uns
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.PRESS}>
                  Presse
                </Link>
              </li>
            </div>

            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_5} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick1} className={styles.li__menu}>
                Los geht's
              </li>
              {isOpen1 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Mach mit!
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Search it!
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Die Community!
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_5} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick2} className={styles.li__menu}>
                Das duale Studium
              </li>
              {isOpen2 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.Allgemein} className={styles.menu__list__mini__link}>
                      Kurz und knapp
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Was ist ein duales Studium?
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Unterschiedliche Formen
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Vergütung
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Zeitmodelle
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Entwicklung
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            
            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_5} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick3} className={styles.li__menu}>
                Studienangebote
              </li>
              {isOpen3 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Unternehmensliste
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Hochschulliste
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Studienrichtungen
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Die komplette Datenbank
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            
            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_5} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick4} className={styles.li__menu}>
                Community
              </li>
              {isOpen4 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Erfahrungsberichte
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Neuigkeiten
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_5} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick5} className={styles.li__menu}>
                Tipps & Tricks
              </li>
              {isOpen5 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Onlinebewerbung
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Alternative Bewerbungsformen
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Bewerbung auf Englisch
                    </Link>
                  </li>
                </ul>
              )}
            </div>

          </ul>
        )}

        {activeLink === 'about' && (
          <ul className={`${styles.about__list} ${grid.grid__menu}`}>
            <div className={`${styles.menu__list__plus} ${grid.grid__menu__item__phone__2_3}`}>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.HOME} >
                  Home
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.IMPRINT} >
                  Impressum
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.CONTACT} >
                  Kontakt
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.ABOUT}>
                  Über uns
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.PRESS}>
                  Presse
                </Link>
              </li>
            </div>
            
            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_4} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick6} className={styles.li__menu}>
                Einführung
              </li>
              {isOpen6 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Hochschulmarketing
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_4} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick7} className={styles.li__menu}>
                Das duale Studium
              </li>
              {isOpen7 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Kurz und knapp - Ein Überblick
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Was ist ein duales Studium?
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Formen des dualen Studiums
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            
            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_4} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick8} className={styles.li__menu}>
                Studienangebote
              </li>
              {isOpen8 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Unternehmensliste
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Hochschulliste
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Studienrichtungen
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Die komplette Datenbank
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            
            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_4} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick9} className={styles.li__menu}>
                Community
              </li>
              {isOpen9 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Erfahrungsberichte
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Neuigkeiten
                    </Link>
                  </li>
                </ul>
              )}
            </div>

          </ul>
        )}

        {activeLink === 'customers' && (
          <ul className={`${styles.customers__list} ${grid.grid__menu}`}>
            <div className={`${styles.menu__list__plus} ${grid.grid__menu__item__phone__2_3}`}>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.HOME} >
                  Home
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.IMPRINT} >
                  Impressum
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.CONTACT} >
                  Kontakt
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.ABOUT}>
                  Über uns
                </Link>
              </li>
              <li className={styles.li__menu__plus}>
                <Link to={ROUTES.PRESS}>
                  Presse
                </Link>
              </li>
            </div>
            
            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_5} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick10} className={styles.li__menu}>
                Einführung
              </li>
              {isOpen10 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Nachwuchskräfte gesucht!
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      War for Talents
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_5} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick11} className={styles.li__menu}>
                Unsere Leistungen
              </li>
              {isOpen11 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Employer Branding
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Recruiting
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Talent Relationship Management
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_5} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick12} className={styles.li__menu}>
                Das duale Studium
              </li>
              {isOpen12 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Kurz und knapp - Ein Überblick
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Was ist ein duales Studium?
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Formen des dualen Studiums
                    </Link>
                  </li>
              </ul>
              )}
            </div>
            
            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_5} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick13} className={styles.li__menu}>
                Studienangebote
              </li>
              {isOpen13 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Unternehmensliste
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Hochschulliste
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Studienrichtungen
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Die komplette Datenbank
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            
            <div className={`${styles.menu__list} ${grid.grid__menu__item__5_7} ${grid.grid__menu__item__tablet__3_5} ${grid.grid__menu__item__phone__2_3}`}>
              <li onClick={handleItemClick14} className={styles.li__menu}>
                Community
              </li>
              {isOpen14 && (
                <ul className={styles.menu__list__mini}>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Erfahrungsberichte
                    </Link>
                  </li>
                  <li className={styles.menu__list__mini__item}>
                    <Link to={ROUTES.HOME} className={styles.menu__list__mini__link}>
                      Neuigkeiten
                    </Link>
                  </li>
                </ul>
              )}
            </div>

          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
