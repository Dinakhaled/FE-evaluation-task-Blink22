import React from "react";
import { TimePicker as AntdTimePicker } from "formik-antd";
import moment from "moment";
const format = "hh:mm A";

const TimePicker = ({ name }) => {
  return (
    <AntdTimePicker
      className="field"
      defaultValue={moment(new Date(), format)}
      format={format}
      name={name}
      allowClear={false}
    />
  );
};

export default TimePicker;
