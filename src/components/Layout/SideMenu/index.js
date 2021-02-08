import React from "react";
import { NavLink } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import { SIDEMENU_LIST } from "./data";
import Logo from "../../../assets/images/logo.png";
import styles from "./SideMenu.module.scss";

const SideMenu = ({ isOpen }) => {
  return (
    <Menu
      isOpen={isOpen}
      width={242}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      noOverlay
      disableCloseOnEsc
      customBurgerIcon={false}
      disableAutoFocus
      className={styles.wrapper}
    >
      <NavLink to="/" className="text-center">
        <img src={Logo} className={styles.logo} alt="logo" />
      </NavLink>
      {SIDEMENU_LIST.map(({ id, text, icon, slug, subList }) => (
        <div key={id}>
          <NavLink
            to={slug}
            className={styles.navItem}
            activeClassName={styles.active}
          >
            <span className={`${styles.icon} icon`}>{icon ? icon : ""}</span>
            <span>{text}</span>
          </NavLink>
          {subList.map(({ id, text, slug }) => (
            <NavLink
              key={id}
              to={slug}
              className={`${styles.navItem} ${styles.navItemSub}`}
              activeClassName={styles.active}
            >
              {text}
            </NavLink>
          ))}
        </div>
      ))}
    </Menu>
  );
};

export default SideMenu;
