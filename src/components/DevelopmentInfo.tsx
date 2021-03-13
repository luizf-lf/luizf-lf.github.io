import React from 'react';

import styles from '../styles/components/DevelopmentInfo.module.css';

import warningIcon from '../assets/icons/warning.svg';

function DevelopmentInfo() {
  return (
    <div className={styles.devInfoContainer}>
      <img src={warningIcon} alt="Warning" />
      <span>
        Este site está passando por uma nova estruturação e logo será
        finalizado.
      </span>
    </div>
  );
}

export default DevelopmentInfo;
