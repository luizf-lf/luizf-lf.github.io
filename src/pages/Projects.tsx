import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RepositoryCard from '../components/RepositoryCard';
import Loader from '../components/Loader';

import styles from '../styles/pages/Projects.module.css';

import windowsSc from '../assets/images/windows-sc540.jpg';
import proffySc from '../assets/images/proffy-sc720.png';
import moveItSc from '../assets/images/moveIt-720.png';

function Projects() {
  const { t } = useTranslation();
  const [repositories, setRepositories] = useState([<Loader key="Loader" />]);

  useEffect(() => {
    fetch('https://api.github.com/users/luizf-lf/repos', { method: 'GET' })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((result) => {
        setRepositories(
          result.map((repository: any) => {
            return (
              <RepositoryCard
                title={repository.name}
                description={repository.description}
                repository={repository.html_url}
                repositoryIsPrivate={repository.private}
                language={repository.language}
                key={repository.id}
              />
            );
          })
        );
      });
  }, []);

  return (
    <div className={styles.projectsPageContainer}>
      <div className={styles.contentContainer}>
        <p>{t('projects.favoritesTitle')}</p>
        <div className={styles.repositoriesCardsContainer}>
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
        <br />
        <br />
        <p>{t('projects.othersTitle')}</p>
        <div className={styles.repositoriesCardsContainer}>{repositories}</div>
      </div>
    </div>
  );
}

export default Projects;
