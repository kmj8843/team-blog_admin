import styles from "./header.module.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
  return (
    <header>
      <div className={styles.header} >
        <div className={styles.logo}>LOGO</div>
        <div className={styles.right}>
          <div className={styles.mode}>
            <span className={`${styles.icon} ${styles.active}`}>
              <LightModeIcon />
            </span>
            <span className={styles.icon}>
              <DarkModeIcon />
            </span>
          </div>
          <div className={styles.profile}>
            홍길동님, 안녕하세요
          </div>
        </div>
      </div>
    </header >
  );
}

export default Header;
