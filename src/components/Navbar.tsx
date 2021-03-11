import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import navbarLogo from '../assets/navbar-logo.svg';
import linkedInIcon from '../assets/linkedIn.svg';
import github from '../assets/github.svg';
import rocket from '../assets/rocket.svg';
import hamburgerMenu from '../assets/hamburger-menu.svg';
import rightArrow from '../assets/right-arrow.svg';
import closeIcon from '../assets/close.svg';

import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [lateralNavIsVisible, setLateralNavIsVisible] = useState(false);

  const links = (
    <>
      <button
        type="button"
        className={styles.navbarCloseButton}
        onClick={() => setLateralNavIsVisible(false)}
      >
        <img src={closeIcon} alt="close" />
      </button>
      <a
        href="https://www.linkedin.com/in/luizf-lf/"
        target="_blank"
        rel="noreferrer"
        className={styles.navbarLinksLink}
      >
        <div>
          <img src={linkedInIcon} alt="Linked In" />
          <span>LinkedIn</span>
        </div>
        <img src={rightArrow} alt="Right Arrow" />
      </a>
      <a
        href="https://github.com/luizf-lf/"
        target="_blank"
        rel="noreferrer"
        className={styles.navbarLinksLink}
      >
        <div>
          <img src={github} alt="Github" />
          <span>Github</span>
        </div>
        <img src={rightArrow} alt="Right Arrow" />
      </a>
      <Link
        to="/projects"
        onClick={() => setLateralNavIsVisible(false)}
        className={styles.navbarLinksLink}
      >
        <div>
          <img src={rocket} alt="Projects" />
          <span>Projetos</span>
        </div>
        <img src={rightArrow} alt="Right Arrow" />
      </Link>
    </>
  );

  return (
    <>
      <nav className={styles.navbarContainer}>
        <Link
          to="/"
          className={styles.navbarLogo}
          onClick={() => setLateralNavIsVisible(false)}
        >
          <img src={navbarLogo} alt="luizf-lf" />
          <p>luizf-lf</p>
        </Link>
        <div className={styles.navbarLinksContainer}>{links}</div>
        <button
          type="button"
          className={styles.navbarMenuToggle}
          onClick={() => setLateralNavIsVisible(true)}
        >
          <img src={hamburgerMenu} alt="Menu" />
        </button>
      </nav>
      <div
        className={`${styles.lateralNavbar} ${
          !lateralNavIsVisible ? styles.lateralNavVisible : ''
        }`}
      >
        {links}
      </div>
    </>
  );
}

export default Navbar;
