import React from "react";
import { DatePicker } from "antd";
// import styles from "./Range.module.scss";

const { RangePicker } = DatePicker;

const RangeDatePicker = () => {
  return <RangePicker className={`field`} />;
};

export default RangeDatePicker;
