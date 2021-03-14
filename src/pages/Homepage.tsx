import React from 'react';
import { FaDatabase, FaMobile, FaServer, FaTools } from 'react-icons/fa';

import styles from '../styles/pages/Homepage.module.css';

import gitStackIcon from '../assets/icons/stack/git.svg';
import javascriptStackIcon from '../assets/icons/stack/javascript.svg';
import nextStackIcon from '../assets/icons/stack/next.svg';
import nodejsStackIcon from '../assets/icons/stack/nodejs.svg';
import reactStackIcon from '../assets/icons/stack/react.svg';
import sassStackIcon from '../assets/icons/stack/sass.svg';
import sqlServerStackIcon from '../assets/icons/stack/sql-server.svg';
import typescriptStackIcon from '../assets/icons/stack/typescript.svg';
import protheusIcon from '../assets/icons/stack/protheus.svg';
import mailIcon from '../assets/icons/mail.svg';
import simpleJsIcon from '../assets/icons/simple/javascript-simple.svg';

import downIcon from '../assets/icons/down.svg';
import StackItem from '../components/StackItem';

function Homepage() {
  return (
    <>
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
              <div className={styles.stackIconsContainer}>
                <img src={protheusIcon} alt="Microsiga Protheus" />
                <img src={sqlServerStackIcon} alt="SQL Server" />
                <img src={gitStackIcon} alt="Git" />
                <img src={sassStackIcon} alt="Sass" />
                <img src={nodejsStackIcon} alt="Node" />
                <img src={nextStackIcon} alt="Next" />
                <img src={reactStackIcon} alt="React" />
                <img src={javascriptStackIcon} alt="Javascript" />
                <img src={typescriptStackIcon} alt="Typescript" />
              </div>
              <span>
                Conheça a minha stack
                <img src={downIcon} alt="Down" />
              </span>
            </div>
          </div>
        </div>
        <button type="button" className={styles.footerButton}>
          <img src={mailIcon} alt="Mail" className={styles.footerButtonImg} />
          Entre em contato
        </button>
      </div>
      <div className={styles.stackDetailsContainer}>
        <p className={styles.stackDetailsTitle}>
          Com o que estou trabalhando atualmente:
        </p>
        <div className={styles.stackDetailsCardsContainer}>
          <div className={styles.stackDetailsCard}>
            <div className={styles.detailsCardTitle}>
              <FaMobile />
              <span>Front-end</span>
            </div>
            <div>
              <StackItem name="Javascript" level={8} icon={simpleJsIcon} />
            </div>
          </div>
          <div className={styles.stackDetailsCard}>
            <div className={styles.detailsCardTitle}>
              <FaServer />
              <span>Back-end</span>
            </div>
          </div>
          <div className={styles.stackDetailsCard}>
            <div className={styles.detailsCardTitle}>
              <FaDatabase />
              <span>Banco de dados</span>
            </div>
          </div>
          <div className={styles.stackDetailsCard}>
            <div className={styles.detailsCardTitle}>
              <FaTools />
              <span>Ferramentas e Frameworks</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
