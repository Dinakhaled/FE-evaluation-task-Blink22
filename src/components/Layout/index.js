import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import styles from "./Layout.module.scss";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const isOpen = useSelector((state) => state.SideMenu.isMenuOpen);
  return (
    <div id="outer-container">
      <SideMenu isOpen={isOpen} />
      <main id="page-wrap" className={isOpen ? "page-wrap" : "page-wrap-full"}>
        <Header />
        <div className={styles.mainWrapper}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
