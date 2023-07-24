import styles from './navbar.module.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <a href="/dashboard" className={`${styles.link} ${styles.active}`}>
          <DashboardIcon />
          <h3>Dashboard</h3>
        </a>
        <a href="/introduce" className={styles.link}>
          <FlutterDashIcon />
          <h3>Introduce</h3>
        </a>
        <a href="/project" className={styles.link}>
          <Diversity3Icon />
          <h3>Project</h3>
        </a>
        <a href="/post" className={styles.link}>
          <PostAddIcon />
          <h3>Post</h3>
        </a>
        <a href="/guide" className={styles.link}>
          <PostAddIcon />
          <h3>Guide</h3>
        </a>
        <a href="/logout" className={styles.link}>
          <LogoutIcon />
          <h3>Logout</h3>
        </a>
      </div >
    </nav >
  );
}

export default NavBar;
