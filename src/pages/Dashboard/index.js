import React from "react";
import FilterationHeader from "../../components/FilterationHeader";
import Statistics from "../../components/Statistics";
import { STATISTICS_LIST } from "./data";

const Dashboard = () => {
  return (
    <div>
      <h4 className="textGray">Fuel History</h4>
      <FilterationHeader />
      <Statistics list={STATISTICS_LIST} />
    </div>
  );
};

export default Dashboard;
