import React from 'react';

import styles from '../styles/Homepage.module.css';

import { ReactComponent as MailIcon } from '../assets/mail.svg';

import gitStackIcon from '../assets/stack/git.svg';
import javascriptStackIcon from '../assets/stack/javascript.svg';
import nextStackIcon from '../assets/stack/next.svg';
import nodejsStackIcon from '../assets/stack/nodejs.svg';
import reactStackIcon from '../assets/stack/react.svg';
import sassStackIcon from '../assets/stack/sass.svg';
import sqlServerStackIcon from '../assets/stack/sql-server.svg';
import typescriptStackIcon from '../assets/stack/typescript.svg';
import protheusIcon from '../assets/stack/protheus.svg';

function Homepage() {
  return (
    <div className={styles.homepageContainer}>
      <p></p>
      <div className={styles.presentationContainer}>
        <div className={styles.presentationText}>
          <strong>Desenvolvendo um novo mundo.</strong>
          <p>Uma linha de código por vez.</p>
        </div>
        <div className={styles.presentationAbout}>
          <h1>Luiz Fernando</h1>
          <p>Full Stack Web Developer</p>
          <p>Minas Gerais, Brasil</p>
          <div className={styles.presentationStack}>
            {/* <img src={protheusIcon} alt="Microsiga Protheus" /> */}
            <img src={sqlServerStackIcon} alt="SQL Server" />
            <img src={gitStackIcon} alt="Git" />
            <img src={sassStackIcon} alt="Sass" />
            <img src={nodejsStackIcon} alt="Node" />
            <img src={nextStackIcon} alt="Next" />
            <img src={reactStackIcon} alt="React" />
            <img src={javascriptStackIcon} alt="Javascript" />
            <img src={typescriptStackIcon} alt="Typescript" />
          </div>
        </div>
      </div>
      <button type="button" className={styles.footerButton}>
        <MailIcon className={styles.footerButtonSvg} />
        Entre em contato
      </button>
    </div>
  );
}

export default Homepage;
