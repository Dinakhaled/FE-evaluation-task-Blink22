import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditVehicle from "../../components/EditVehicle";
import FilterationHeader from "../../components/FilterationHeader";
import Statistics from "../../components/Statistics";
import Table from "../../components/Table";
import {
  deleteVehicleRequest,
  getVehiclesRequest,
} from "../../store/vehicles/actions";
import { STATISTICS_LIST } from "./data";

const Dashboard = () => {
  const dispatch = useDispatch();
  const vehiclesList = useSelector((state) => state.Vehicles.list);

  useEffect(() => {
    dispatch(getVehiclesRequest());
  }, [dispatch]);

  return (
    <div>
      <h4 className="textGray">Fuel History</h4>
      <FilterationHeader />
      <Statistics list={STATISTICS_LIST} />
      <Table data={vehiclesList} action={deleteVehicleRequest} />
      <EditVehicle />
    </div>
  );
};

export default Dashboard;
