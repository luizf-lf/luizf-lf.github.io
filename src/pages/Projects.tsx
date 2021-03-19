import React from 'react';
import { useTranslation } from 'react-i18next';
import RepositoryCard from '../components/RepositoryCard';

import styles from '../styles/pages/Projects.module.css';

import windowsSc from '../assets/images/windows-sc540.jpg';
import proffySc from '../assets/images/proffy-sc720.png';
import moveItSc from '../assets/images/moveIt-720.png';

function Projects() {
  const { t } = useTranslation();

  return (
    <div className={styles.projectsPageContainer}>
      <div className={styles.favoritesContainer}>
        <p>{t('projects.favoritesTitle')}</p>
        <div className={styles.favoritesCardsContainer}>
          <RepositoryCard
            title="Move.it"
            description={
              'Project developed during the fourth edition of the #NextLevelWeek'
            }
            image={moveItSc}
            repository="https://github.com/luizf-lf/move.it"
            repositoryIsPrivate={false}
            languages={['Typescript', 'React', 'Next.js']}
          />
          <RepositoryCard
            title="CSS Windows"
            description={
              'A Windows 10 interface implementation example in HTML + CSS + JavaScript.'
            }
            image={windowsSc}
            repository="https://github.com/luizf-lf/windows"
            repositoryIsPrivate={false}
            languages={['HTML', 'CSS', 'JavaScript']}
          />
          <RepositoryCard
            title="Proffy"
            description={
              'Repository containing the documentation about the Proffy project, developed during the second edition of the #NextLevelWeek.'
            }
            image={proffySc}
            repository="https://github.com/luizf-lf/proffy"
            repositoryIsPrivate={false}
            languages={['React', 'Node.js', 'React Native']}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
