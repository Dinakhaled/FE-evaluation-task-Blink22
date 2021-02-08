import React from "react";
import { Select } from "antd";

const Sort = ({ list = [], handleChange }) => {
  return (
    <Select className="w-25" placeholder="Sort:" onChange={handleChange}>
      {list.map((item, i) => (
        <Select.Option key={i} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};

export default Sort;
