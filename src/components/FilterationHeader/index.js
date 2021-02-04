import React from "react";
import { FilterOutlined } from "@ant-design/icons";
import { Button } from "../Button";
import RangeDatePicker from "../DatePicker/Range";
import Search from "../Search";
import styles from "./FilterationHeader.module.scss";

const FilterationHeader = () => {
  return (
    <div className={styles.wrapper}>
      <RangeDatePicker />
      <Search />
      <Button
        type="outline"
        text={"Filters"}
        icon={<FilterOutlined />}
        className="btn-outline-primary"
      />

      <Button
        type="text"
        text={
          <span className="textGray">
            <span className="text-primary">1 Filter</span> Applied
          </span>
        }
        className="text-primary"
      />
      <Button type="text" text={"Clear all"} className="text-primary" />
    </div>
  );
};

export default FilterationHeader;
