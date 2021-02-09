import React from "react";
import { Select } from "antd";
import styles from "./Sort.module.scss";

const Sort = ({ list = [], handleChange }) => {
  return (
    <Select className={styles.sort} placeholder="Sort:" onChange={handleChange}>
      {list.map((item, i) => (
        <Select.Option key={i} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};

export default Sort;
