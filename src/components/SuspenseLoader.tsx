import logo from '../assets/icons/navbar-logo.svg';
import styles from '../styles/components/SuspenseLoader.module.css';

export default function SuspenseLoader() {
  return (
    <div className={styles.loaderContainer}>
      <img src={logo} alt="Logo" />
    </div>
  );
}
