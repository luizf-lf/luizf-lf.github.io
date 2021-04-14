import React from 'react';
import {
  RiDatabase2Fill,
  RiServerFill,
  RiToolsFill,
  RiWindowFill,
} from 'react-icons/ri';

import styles from '../../styles/pages/homepage/SkillStackItem.module.css';

interface stackItemProps {
  name: string;
  level: number;
  icon: string;
  color?: string;
  role: string;
}

const SkillStackItem = ({ name, level, icon, color, role }: stackItemProps) => {
  let roleIcon = <></>;
  let levelDots = [<></>];

  switch (role) {
    case 'front-end':
      roleIcon = <RiWindowFill />;
      break;
    case 'back-end':
      roleIcon = <RiServerFill />;
      break;
    case 'database':
      roleIcon = <RiDatabase2Fill />;
      break;
    case 'tool':
      roleIcon = <RiToolsFill />;
      break;
  }

  for (let i = 0; i < 6; i++) {
    let color = '';
    let shadowColor = '';
    if (level < 3) {
      color = '#ffe268';
      shadowColor = 'rgba(255, 225, 104, 0.75)';
    } else if (level >= 3 && level <= 4) {
      color = '#51c4d3';
      shadowColor = 'rgba(81, 196, 211, 0.75)';
    } else {
      color = '#8fd9a8';
      shadowColor = 'rgba(143, 217, 168, 0.75)';
    }

    if (i < level) {
      levelDots.push(
        <div
          style={{
            backgroundColor: color,
            boxShadow: `0px 0px 5px 1px ${shadowColor}`,
          }}
        ></div>
      );
    } else {
      levelDots.push(<div></div>);
    }
  }

  return (
    <div className={styles.itemContainer}>
      <div className={styles.iconContainer} style={{ backgroundColor: color }}>
        <img src={icon} alt="Icon" />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.titleContainer}>
          <span>{name}</span>
          {roleIcon}
        </div>
        <div className={styles.levelContainer}>{levelDots}</div>
      </div>
    </div>
  );
};

export default SkillStackItem;
