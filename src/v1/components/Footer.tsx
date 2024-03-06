import React from 'react';
import { FaCode } from 'react-icons/fa';

import styles from '../styles/components/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerGradient}></div>
      <div className={styles.footerContentContainer}>
        <span>
          <FaCode />
          <span>
            <span className={styles.developedBy}>Developed </span>
            by{' '}
            <strong>
              <a
                href="https://github.com/luizf-lf"
                target="_blank"
                rel="noreferrer"
              >
                luizf-lf
              </a>
            </strong>
          </span>
        </span>
        <p>#NeverSettle</p>
      </div>
    </footer>
  );
}

export default Footer;
