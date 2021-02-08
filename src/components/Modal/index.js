import React, { useEffect, useState } from "react";
import { Modal as AntdModal } from "antd";
import styles from "./Modal.scss";

const Modal = ({ isOpen, className = "", title, children, handleCancel }) => {
  const [isModalVisible, setIsModalVisible] = useState(isOpen || false);

  useEffect(() => {
    setIsModalVisible(isOpen);
  }, [isOpen]);

  const handleOk = () => {
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
