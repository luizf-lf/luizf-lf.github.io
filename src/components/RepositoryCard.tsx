import React from 'react';

import styles from '../styles/components/RepositoryCard.module.css';

import { FaGithub } from 'react-icons/fa';
import { RiLockLine } from 'react-icons/ri';

interface repositoryCardProps {
  image?: string;
  title: string;
  repository?: string;
  repositoryIsPrivate: boolean;
  description: string;
  languages?: string[];
  language?: string;
}

const RepositoryCard = ({
  image,
  title,
  repository,
  repositoryIsPrivate,
  description,
  languages,
  language,
}: repositoryCardProps) => {
  let gitHubLink;

  if (repositoryIsPrivate) {
    gitHubLink = <RiLockLine fill="#c6c6c6" />;
  } else {
    if (repository === '') {
      gitHubLink = <div></div>;
    } else {
      gitHubLink = (
        <a href={repository} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      );
    }
  }

  return (
    <div className={styles.repositoryCardContainer}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>
      )}

      <div className={styles.repositoryInfoContainer}>
        <div>
          <div className={styles.repositoryTitle}>
            <p>{title}</p>
            {gitHubLink}
          </div>
          <div className={styles.repositoryDescription}>{description}</div>
        </div>
        <div className={styles.repositoryLanguages}>
          {languages &&
            languages.map((languageItem) => (
              <span className={styles.languageItem} key={language}>
                {languageItem}
              </span>
            ))}
          {language && <span className={styles.languageItem}>{language}</span>}
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
