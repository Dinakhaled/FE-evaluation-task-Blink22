import React, { useEffect, useState } from "react";
import { Modal as AntdModal } from "antd";
import styles from "./Modal.scss";

const Modal = ({
  isOpen,
  className = "",
  title,
  children,
  handleCancel,
  handleOk,
  disabled = false,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(isOpen || false);

  useEffect(() => {
    setIsModalVisible(isOpen);
  }, [isOpen]);

  return (
    <>
      <AntdModal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={`${className} ${styles.wrapper}`}
        okButtonProps={{ disabled: disabled }}
      >
        {children}
      </AntdModal>
    </>
  );
};

export default Modal;
