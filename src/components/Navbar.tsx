import React from 'react';
import { Link } from 'react-router-dom';

import navbarLogo from '../assets/navbar-logo.svg';
import linkedInIcon from '../assets/linkedIn.svg';
import github from '../assets/github.svg';
import rocket from '../assets/rocket.svg';

import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarLogo}>
        <img src={navbarLogo} alt="luizf-lf" />
        <p>luizf-lf</p>
      </div>
      <div className={styles.navbarLinksContainer}>
        <a href="https://www.linkedin.com/in/luizf-lf/">
          <img src={linkedInIcon} alt="Linked In" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/luizf-lf/">
          <img src={github} alt="Github" />
          <span>Github</span>
        </a>
        <Link to="/projects">
          <img src={rocket} alt="Projects" />
          <span>Projetos</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
