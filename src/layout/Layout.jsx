import { Outlet } from "react-router-dom";
import Head from "./head/Head";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <>
      <Head></Head>
      <div className={styles.container}>
        <Header></Header>
        <Navbar></Navbar>
        <main id={styles.main}>
          <Outlet />
        </main>
        <Footer></Footer>
      </div >
    </>
  )
}

export default Layout;
