import React from "react";
import { Avatar as AntdAvatar } from "antd";

const Avatar = ({ icon, size }) => {
  return <AntdAvatar size={size} icon={icon} />;
};

export default Avatar;
