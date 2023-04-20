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
      <SkillStackItem
        icon={simpleTsIcon}
        name="TypeScript"
        role="front-end"
        color="#3178C6"
        level={4}
      />
      <SkillStackItem
        icon={simpleReactIcon}
        name="React"
        role="front-end"
        color="#61DAFB"
        level={5}
      />
      <SkillStackItem
        icon={simpleSassIcon}
        name="Sass"
        role="front-end"
        color="#CD6799"
        level={3}
      />
      <SkillStackItem
        icon={simpleReactIcon}
        name="React Native"
        role="front-end"
        color="#6930C3"
        level={3}
      />
      <SkillStackItem
        icon={simpleNextIcon}
        name="Next.js"
        role="front-end"
        color="#000000"
        level={3}
      />
      <SkillStackItem
        icon={simpleNodeIcon}
        name="Node.js"
        role="back-end"
        color="#539E43"
        level={4}
      />
      <SkillStackItem
        icon={simplePhpIcon}
        name="PHP"
        role="back-end"
        color="#4F5B93"
        level={3}
      />
      <SkillStackItem
        icon={simpleLaravelIcon}
        name="Laravel"
        role="back-end"
        color="#FF2D20"
        level={2}
      />
      <SkillStackItem
        icon={simpleSqlServerIcon}
        name="SQL Server"
        role="database"
        color="#D72D29"
        level={5}
      />
      <SkillStackItem
        icon={simplePostgreSQLIcon}
        name="PostgreSQL"
        role="database"
        color="#32658F"
        level={3}
      />
      <SkillStackItem
        icon={simpleMySQLIcon}
        name="MySQL"
        role="database"
        color="#4479A1"
        level={3}
      />
      <SkillStackItem
        icon={simpleGitIcon}
        name="Git"
        role="tool"
        color="#DE4C36"
        level={5}
      />
      <SkillStackItem
        icon={simpleProtheusIcon}
        name="Protheus"
        role="tool"
        color="#004576"
        level={3}
      />
      <SkillStackItem
        icon={simpleFluigIcon}
        name="Fluig"
        role="tool"
        color="#C6034C"
        level={4}
      />
      <SkillStackItem
        icon={simpleDockerIcon}
        name="Docker"
        role="tool"
        color="#066DA5"
        level={2}
      />
    </div>
  );
}

export default SkillStack;
