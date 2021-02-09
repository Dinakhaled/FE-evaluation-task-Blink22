import React from "react";
import styles from "./Statistics.module.scss";

const Statistics = ({ list = [] }) => {
  return (
    <div className={styles.wrapper}>
      {list.map(({ title, subTitle }, i) => (
        <div key={i} className={styles.item}>
          <h2 className={styles.title}>{title}</h2>
          <small className={`textGray ${styles.subTitle}`}>{subTitle}</small>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
