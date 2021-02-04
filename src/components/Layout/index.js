import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div id="outer-container">
      <SideMenu />
      <main id="page-wrap">
        <Header />
        <div className={styles.mainWrapper}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
