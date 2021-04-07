import React from 'react';
import styles from '../styles/components/AboutMe.module.css';

import gitHub from '../assets/images/github.png';
import { FaCodeBranch, FaGraduationCap } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi';

import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContentContainer}>
        <div className={styles.profilePictureContainer}>
          <a
            href="https://github.com/luizf-lf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className={styles.profilePicture}
              src="https://avatars.githubusercontent.com/u/32681133?v=4"
              alt="Profile"
            />
            <img src={gitHub} alt="GitHub" className={styles.gitHubIcon} />
          </a>
        </div>
        <div className={styles.aboutMeDetailsContainer}>
          <h1>Luiz Fernando</h1>
          <p>Full Stack Web Developer</p>
          <br />
          <p>
            <FaGraduationCap /> {t('homepage.about.graduation')}
          </p>
          <p>
            <FaCodeBranch /> {t('homepage.about.experience')}
          </p>
          <p>
            <FiNavigation /> {t('homepage.about.next')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
