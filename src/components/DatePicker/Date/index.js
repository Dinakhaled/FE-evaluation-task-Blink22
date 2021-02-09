import React from "react";
import { DatePicker as AntdDatePicker } from "formik-antd";

const format = "MM/DD/YYYY";

const DatePicker = ({ name }) => {
  return (
    <AntdDatePicker
      className="field"
      name={name}
      allowClear={false}
      format={format}
    />
  );
};

export default DatePicker;
