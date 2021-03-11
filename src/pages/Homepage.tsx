import React from 'react';

import styles from '../styles/Homepage.module.css';

import { ReactComponent as MailIcon } from '../assets/mail.svg';

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
          <div className={styles.presentationStack}>Stack</div>
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
