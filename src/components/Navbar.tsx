import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import navbarLogo from '../assets/icons/navbar-logo.svg';
import linkedInIcon from '../assets/icons/linkedIn.svg';
import github from '../assets/icons/github.svg';
import rocket from '../assets/icons/rocket.svg';
import hamburgerMenu from '../assets/icons/hamburger-menu.svg';
import rightArrow from '../assets/icons/right-arrow.svg';
import closeIcon from '../assets/icons/close.svg';

import styles from '../styles/components/Navbar.module.css';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';

function Navbar() {
  const [lateralNavIsVisible, setLateralNavIsVisible] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const { t } = useTranslation();

  const changeNavbarBackground = () => {
    if (window.scrollY > 40) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  const scrollToRoot = () => {
    scroller.scrollTo('root', {
      duration: 600,
      delay: 0,
      smooth: 'easeInOut',
    });
  };

  window.addEventListener('scroll', changeNavbarBackground);

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
        onClick={() => {
          setLateralNavIsVisible(false);
          scrollToRoot();
        }}
        className={styles.navbarLinksLink}
      >
        <div>
          <img src={rocket} alt="Projects" />
          <span>{t('navbar.projects')}</span>
        </div>
        <img src={rightArrow} alt="Right Arrow" />
      </Link>
    </>
  );

  return (
    <>
      <nav
        className={
          navbarScrolled
            ? `${styles.navbarContainer} ${styles.navbarContainerScrolled}`
            : styles.navbarContainer
        }
      >
        <Link
          to="/"
          className={styles.navbarLogo}
          onClick={() => {
            setLateralNavIsVisible(false);
            scrollToRoot();
          }}
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
