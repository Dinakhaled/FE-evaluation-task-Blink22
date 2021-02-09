import React, { useEffect } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setMenuStatus } from "../../store/sideMenu/actions";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const isOpen = useSelector((state) => state.SideMenu.isMenuOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    isSmallScreen
      ? dispatch(setMenuStatus(false))
      : dispatch(setMenuStatus(true));
  }, [isSmallScreen]);

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
