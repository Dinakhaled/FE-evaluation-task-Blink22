import React from "react";
import { Avatar as AntdAvatar } from "antd";

const Avatar = ({ icon, size, src, ...props }) => {
  return <AntdAvatar size={size} icon={icon} src={src} {...props} />;
};

export default Avatar;
