import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaDiscord, FaGithub, FaLinkedin, FaSkype } from 'react-icons/fa';

import styles from '../../styles/pages/homepage/ContactCard.module.css';
import homepageStyles from '../../styles/pages/Homepage.module.css';

function ContactCard() {
  const { t } = useTranslation();
  return (
    <div className="contactContainerTarget">
      <div className={homepageStyles.homepageTitle}>
        {t('homepage.contact.title')}
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactTitle}>
          {t('homepage.contact.description')}
        </div>
        <div className={styles.contactLinks}>
          <a
            href="https://github.com/luizf-lf"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/luizf-lf/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://discordapp.com/users/553069343160664105"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord /> Discord
          </a>
          <a
            href="https://join.skype.com/invite/sovOLN4kgQSC"
            target="_blank"
            rel="noreferrer"
          >
            <FaSkype /> Skype
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
