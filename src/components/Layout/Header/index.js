import React from "react";
import { BellOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setMenuStatus } from "../../../store/sideMenu/actions";
import Avatar from "../../Avatar";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  const isOpen = useSelector((state) => state.SideMenu.isMenuOpen);
  const dispatch = useDispatch();
  return (
    <nav className={styles.wrapper}>
      <div className="d-flex align-items-center">
        <span className="icon" onClick={() => dispatch(setMenuStatus(!isOpen))}>
          <MenuOutlined />
        </span>
        <h3 className="mb-0">PLN Asset Management System</h3>
      </div>
      <div className="d-flex align-items-center">
        <BellOutlined className="icon" />
        <Avatar size={36} icon={<UserOutlined />} />
      </div>
    </nav>
  );
};

export default Header;
