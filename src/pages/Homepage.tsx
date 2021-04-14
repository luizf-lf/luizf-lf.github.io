import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

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

// import downIcon from '../assets/icons/down.svg';
import { useTranslation } from 'react-i18next';
import AboutMe from '../components/AboutMe';
import ContactCard from '../components/homepage/ContactCard';
import SkillStack from '../components/homepage/SkillStack';

function Homepage() {
  const { t } = useTranslation();
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
            <strong>{t('homepage.hero.catchPhrase1')}</strong>
            <p>{t('homepage.hero.catchPhrase2')}</p>
          </div>
          <div className={styles.presentationAbout}>
            <h1>Luiz Fernando</h1>
            <p>Full Stack Web Developer</p>
            <p>{t('homepage.hero.location')}</p>
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
            </div>
          </div>
        </div>
        <button
          type="button"
          className={styles.footerButton}
          onClick={scrollToContact}
        >
          <img src={mailIcon} alt="Mail" className={styles.footerButtonImg} />
          {t('homepage.hero.contactButton')}
        </button>
        <div className={styles.scrollIndicatorContainer}>
          <FaChevronDown />
        </div>
      </div>
      <div className={styles.stackDetailsContainer}>
        <div className={styles.homepageTitle}>{t('homepage.about.title')}</div>
        <AboutMe />
        <div className={`${styles.homepageTitle} skillsContainerTarget`}>
          {t('homepage.stack.title')}
        </div>
        <SkillStack />
      </div>
      <ContactCard />
    </>
  );
}

export default Homepage;
