import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from '../styles/components/StackItem.module.css';

interface stackItemProps {
  name: string;
  level: number;
  icon: string;
}

const StackItem = ({ name, level, icon }: stackItemProps) => {
  const { t } = useTranslation();
  let levelWidth = level * 10;
  let color;

  if (levelWidth > 100) {
    levelWidth = 100;
  }
  if (levelWidth < 0) {
    levelWidth = 0;
  }

  if (level <= 3) {
    color = '#da723c';
  } else if (level > 3 && level < 7) {
    color = '#45D1FD';
  } else {
    color = '#6CAC48';
  }

  return (
    <div className={styles.stackItemContainer}>
      <div className={styles.stackIcon}>
        <img src={icon} alt="Stack Icon" />
      </div>
      <div className={styles.stackContent}>
        <p className={styles.stackName}>{name}</p>
        <p className={styles.stackLevelTitle}>{t('stackItem.level')}:</p>
        <div className={styles.stackProgressBar}>
          <div
            className={styles.stackActualProgress}
            style={{ width: `${levelWidth}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StackItem;
