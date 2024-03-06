import { useState } from 'react';
import { Link } from 'react-router-dom';

import navbarLogo from '../assets/icons/navbar-logo.svg';
import linkedInIcon from '../assets/icons/linkedIn.svg';
import github from '../assets/icons/github.svg';
import hamburgerMenu from '../assets/icons/hamburger-menu.svg';
import rightArrow from '../assets/icons/right-arrow.svg';
import closeIcon from '../assets/icons/close.svg';

import styles from '../styles/components/Navbar.module.css';
import { useTranslation } from 'react-i18next';

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

  window.addEventListener('scroll', changeNavbarBackground);

  const links = (
    <>
      <button type="button" className={styles.navbarCloseButton} onClick={() => setLateralNavIsVisible(false)}>
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
      <a href="https://github.com/luizf-lf/" target="_blank" rel="noreferrer" className={styles.navbarLinksLink}>
        <div>
          <img src={github} alt="Github" />
          <span>Github</span>
        </div>
        <img src={rightArrow} alt="Right Arrow" />
      </a>
    </>
  );

  return (
    <>
      <nav
        className={
          navbarScrolled ? `${styles.navbarContainer} ${styles.navbarContainerScrolled}` : styles.navbarContainer
        }
      >
        <Link
          to="/"
          className={styles.navbarLogo}
          onClick={() => {
            setLateralNavIsVisible(false);
          }}
        >
          <img src={navbarLogo} alt="luizf-lf" />
          <p>luizf-lf</p>
        </Link>
        <div className={styles.navbarLinksContainer}>{links}</div>
        <button type="button" className={styles.navbarMenuToggle} onClick={() => setLateralNavIsVisible(true)}>
          <img src={hamburgerMenu} alt="Menu" />
        </button>
      </nav>
      <div className={`${styles.lateralNavbar} ${!lateralNavIsVisible ? styles.lateralNavVisible : ''}`}>{links}</div>
    </>
  );
}

export default Navbar;
