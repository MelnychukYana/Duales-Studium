import React from 'react';
import { Link} from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import index from "../../styles/index.module.scss";
import pages from "../../styles/Pages.module.scss";
import grid from "../../styles/grid.module.scss";

import IMPRESSUM from "../../images/impressum.png";
const Imprint = () => {
  return (
    <div className={`${pages.imprint} ${pages.pages}`} id='imprint'>
      <div className={pages.imprint__1} >
        <div className={`${index.container__pages} ${grid.grid}`}>
          <div className={`${pages.blue__title} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            <h2>Impressum</h2>
          </div>

          <div className={`${pages.imprint__1__pic} ${grid.grid__item__1_6} ${grid.grid__item__tablet__1_3} ${grid.grid__item__phone__1_2}`}>
            <img src={IMPRESSUM} alt="IMG" className={`${pages.imprint__1__pic}` } />
          </div>

          <div className={`${pages.imprint__container} ${grid.grid__item__8_12} ${grid.grid__item__tablet__4_6} ${grid.grid__item__phone__1_2}`}>
            <div className={`${pages.imprint__blocks}`}>
              <p>
              <b className={pages.blue__text}>duales-studium GmbH</b>
              {"\n"}
                Heinrich-Wintermeyer-Str. 24
                {"\n"}
                32602 Vlothok
              </p>
            </div>

            <div className={`${pages.imprint__blocks}`}>
              <p>
                Telefon: <a href="tel: 052285329891" className={`${pages.blue__text} `}>05228-5329891</a>
                {"\n"}
                E-Mail: <a href="mailto:info@duales-studium.de" className={`${pages.blue__text} `}>info@duales-studium.de</a>
                {"\n"}
                Website: <Link to={ROUTES.HOME} className={`${pages.blue__text} ${pages.pages__link}`}>www.duales-studium.de</Link>
                {"\n"}
                Geschäftsführer:
                {"\n"}
                Dipl.-Wirt.-Ing. Nils Frohloff, MBA
              </p>
            </div>

            <div className={`${pages.imprint__blocks}`}>
              <p>
                Amtsgericht Bad Oeynhausen
                {"\n"}
                HRB-Nr.: 12191
                {"\n"}
                USt.-IdNr.: DE273917241
              </p>
            </div>

            <div className={`${pages.imprint__blocks}`}>
            <p>
              Verantwortlicher i. S. v. § 55 Abs. 2 RStV ist 
              {"\n"}
              Herr Dipl.-Wirt.-Ing. Nils Frohloff,
              {"\n"}
              MBA, Heinrich-Wintermeyer-Str. 24, 32602 Vlotho.
            </p>
          </div>
          </div>


        </div>
      </div>

      <div className={`${pages.imprint__2}`}>
        <div className={`${index.container__blocks} ${grid.grid}`} >
          <div className={`${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            <p>
              <b className={pages.blue__text}>Haftungshinweis:</b> Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Seiten. 
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Von etwaigen illegalen, persönlichkeits-verletzenden, 
              moralisch oder ethisch anstößigen Inhalten distanziert sich die duales-studium GmbH ausdrücklich.
            </p>
          </div>

          <div className={`${pages.imprint__blocks} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            <p>
              Alle Informationen, Texte, Bilder und Grafiken sowie deren Anordnung auf der Website unterliegen dem Schutz des Urheberrechtes und anderer Schutzgesetze. 
              Sie sind, soweit keine anderen Eigentumsvorbehalte greifen, Eigentum der duales-studium GmbH. 
              Der Inhalt dieser Website darf nicht zu kommerziellen Zwecken kopiert, verbreitet oder verändert werden.
            </p>
          </div>

          <div className={`${pages.imprint__blocks} ${grid.grid__item__1_12} ${grid.grid__item__tablet__1_6} ${grid.grid__item__phone__1_2}`}>
            <p>
              Wir weisen darauf hin, dass diese Angaben nur Informationen allgemeiner Art sind und nicht auf die besonderen Bedürfnisse bestimmter Personen oder Einrichtungen abgestimmt, 
              nicht notwendigerweise umfassend, komplett oder aktuell sind und teilweise mit externen Websites verbunden sind, die die duales-studium GmbH nicht beeinflussen kann und für die sie keine Verantwortung übernimmt.
              Die duales-studium GmbH behält sich vor, Änderungen und Ergänzungen der bereitgestellten Inhalte, Informationen und Daten jeder Zeit ohne Vorankündigung vorzunehmen.
            </p>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Imprint;
