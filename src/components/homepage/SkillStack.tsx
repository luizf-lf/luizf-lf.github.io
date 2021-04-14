import React from 'react';

import simpleJsIcon from '../../assets/icons/simple/javascript-simple.svg';
import simpleTsIcon from '../../assets/icons/simple/typescript-simple.svg';
import simpleReactIcon from '../../assets/icons/simple/react-simple.svg';
import simpleSassIcon from '../../assets/icons/simple/sass-simple.svg';
import simpleNextIcon from '../../assets/icons/simple/next-simple.svg';

import simpleNodeIcon from '../../assets/icons/simple/node-simple.svg';
import simplePhpIcon from '../../assets/icons/simple/php-simple.svg';
import simpleLaravelIcon from '../../assets/icons/simple/laravel-simple.svg';

import simpleSqlServerIcon from '../../assets/icons/simple/sqlserver-simple.svg';
import simpleMySQLIcon from '../../assets/icons/simple/mysql-simple.svg';
import simplePostgreSQLIcon from '../../assets/icons/simple/postgresql-simple.svg';

import simpleProtheusIcon from '../../assets/icons/simple/protheus-simple.svg';
import simpleFluigIcon from '../../assets/icons/simple/fluig-simple.png';
import simpleGitIcon from '../../assets/icons/simple/git-simple.svg';
import simpleDockerIcon from '../../assets/icons/simple/docker-simple.svg';

import styles from '../../styles/pages/homepage/SkillStack.module.css';
import SkillStackItem from './SkillStackItem';

function SkillStack() {
  return (
    <div className={styles.skillsStackContainer}>
      <SkillStackItem
        icon={simpleJsIcon}
        name="JavaScript"
        role="front-end"
        color="#F7DF1E"
        level={5}
      />
      {
        // TODO: Migrate all Skills to this container
      }
    </div>
  );
}

export default SkillStack;
