import React from 'react';
import {
  FaDatabase,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaMobile,
  FaServer,
  FaSkype,
  FaTools,
} from 'react-icons/fa';

import { scroller } from 'react-scroll';

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
import simpleTsIcon from '../assets/icons/simple/typescript-simple.svg';
import simpleReactIcon from '../assets/icons/simple/react-simple.svg';
import simpleSassIcon from '../assets/icons/simple/sass-simple.svg';
import simpleNextIcon from '../assets/icons/simple/next-simple.svg';

import simpleNodeIcon from '../assets/icons/simple/node-simple.svg';
import simplePhpIcon from '../assets/icons/simple/php-simple.svg';
import simpleLaravelIcon from '../assets/icons/simple/laravel-simple.svg';

import simpleSqlServerIcon from '../assets/icons/simple/sqlserver-simple.svg';
import simpleMySQLIcon from '../assets/icons/simple/mysql-simple.svg';
import simplePostgreSQLIcon from '../assets/icons/simple/postgresql-simple.svg';

import simpleProtheusIcon from '../assets/icons/simple/protheus-simple.svg';
import simpleFluigIcon from '../assets/icons/simple/fluig-simple.png';
import simpleGitIcon from '../assets/icons/simple/git-simple.svg';
import simpleDockerIcon from '../assets/icons/simple/docker-simple.svg';

// import downIcon from '../assets/icons/down.svg';
import StackItem from '../components/StackItem';

function Homepage() {
  const scrollToSkills = () => {
    scroller.scrollTo('skillsContainerTarget', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOut',
      offset: -90,
    });
  };

  const scrollToContact = () => {
    scroller.scrollTo('contactContainerTarget', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOut',
      offset: -90,
    });
  };

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
            <div className={styles.presentationStack} onClick={scrollToSkills}>
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
              {/* <span className={styles.presentationStackPlaceholder}>
                Conheça a minha stack
                <img src={downIcon} alt="Down" />
              </span> */}
            </div>
          </div>
        </div>
        <button
          type="button"
          className={styles.footerButton}
          onClick={scrollToContact}
        >
          <img src={mailIcon} alt="Mail" className={styles.footerButtonImg} />
          Entre em contato
        </button>
      </div>
      <div className={`${styles.stackDetailsContainer} skillsContainerTarget`}>
        <div className={styles.homepageTitle}>
          Conheça a stack com a qual estou trabalhando atualmente:
        </div>
        <div className={styles.stackDetailsCardsContainer}>
          <div className={styles.stackDetailsCard}>
            <div className={styles.detailsCardTitle}>
              <FaMobile />
              <span>Front-end</span>
            </div>
            <div className={styles.detailsCardBody}>
              <StackItem name="Javascript" level={8} icon={simpleJsIcon} />
              <StackItem name="Typescript" level={7} icon={simpleTsIcon} />
              <StackItem name="React" level={7} icon={simpleReactIcon} />
              <StackItem name="Sass" level={6} icon={simpleSassIcon} />
              <StackItem name="React Native" level={5} icon={simpleReactIcon} />
              <StackItem name="Next.js" level={5} icon={simpleNextIcon} />
            </div>
          </div>
          <div className={styles.stackDetailsCard}>
            <div className={styles.detailsCardTitle}>
              <FaServer />
              <span>Back-end</span>
            </div>
            <div className={styles.detailsCardBody}>
              <StackItem name="Node.js" level={6} icon={simpleNodeIcon} />
              <StackItem name="PHP" level={4} icon={simplePhpIcon} />
              <StackItem name="Laravel" level={3} icon={simpleLaravelIcon} />
            </div>
          </div>
          <div className={styles.stackDetailsCard}>
            <div className={styles.detailsCardTitle}>
              <FaDatabase />
              <span>Banco de dados</span>
            </div>
            <div className={styles.detailsCardBody}>
              <StackItem
                name="SQL Server"
                level={6}
                icon={simpleSqlServerIcon}
              />
              <StackItem
                name="PostgreSQL"
                level={4}
                icon={simplePostgreSQLIcon}
              />
              <StackItem name="MySQL" level={3} icon={simpleMySQLIcon} />
            </div>
          </div>
          <div className={styles.stackDetailsCard}>
            <div className={styles.detailsCardTitle}>
              <FaTools />
              <span>Ferramentas e Frameworks</span>
            </div>
            <div className={styles.detailsCardBody}>
              <StackItem name="Git" level={8} icon={simpleGitIcon} />
              <StackItem name="Protheus" level={6} icon={simpleProtheusIcon} />
              <StackItem name="Fluig" level={6} icon={simpleFluigIcon} />
              <StackItem name="Docker" level={3} icon={simpleDockerIcon} />
            </div>
          </div>
        </div>

        <div className="contactContainerTarget">
          <div className={styles.homepageTitle}>Entre em contato:</div>

          <div className={styles.contactContainer}>
            <div className={styles.contactTitle}>
              Você pode entrar em contato comigo através destas redes:
            </div>
            <div className={styles.contactLinks}>
              <a href="https://github.com/luizf-lf">
                <FaGithub /> Github
              </a>
              <a href="https://www.linkedin.com/in/luizf-lf/">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://discordapp.com/users/553069343160664105">
                <FaDiscord /> Discord
              </a>
              <a href="https://join.skype.com/invite/sovOLN4kgQSC">
                <FaSkype /> Skype
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
