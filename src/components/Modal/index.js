import React, { useState } from "react";
import { Modal as AntdModal } from "antd";
import styles from "./Modal.scss";

const Modal = ({ isOpen = false, className = "", title, children }) => {
  const [isModalVisible, setIsModalVisible] = useState(isOpen);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AntdModal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={`${className} ${styles.wrapper}`}
      >
        {children}
      </AntdModal>
    </>
  );
};

export default Modal;
