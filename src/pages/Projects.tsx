import React from 'react';
import { useTranslation } from 'react-i18next';
import RepositoryCard from '../components/RepositoryCard';

import styles from '../styles/pages/Projects.module.css';

import windowsSc from '../assets/images/windows-sc540.jpg';

function Projects() {
  const { t } = useTranslation();

  return (
    <div className={styles.projectsPageContainer}>
      <div className={styles.favoritesContainer}>
        <p>{t('projects.favoritesTitle')}</p>
        <div className={styles.favoritesCardsContainer}>
          <RepositoryCard
            title="CSS Windows"
            description={
              'Uma implementação da interface do Windows 10 utilizando HTML, CSS e JavaScript, com algumas features dinâmicas.'
            }
            image={windowsSc}
            repository="https://github.com/luizf-lf/windows"
            repositoryIsPrivate={false}
            languages={['HTML', 'CSS', 'JavaScript']}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
