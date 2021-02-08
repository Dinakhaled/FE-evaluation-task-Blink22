import React from "react";
import { TimePicker as AntdTimePicker } from "antd";
import moment from "moment";
const format = "HH:mm";

const TimePicker = () => {
  return (
    <AntdTimePicker
      className="field"
      defaultValue={moment(new Date(), format)}
      format={format}
    />
  );
};

export default TimePicker;
