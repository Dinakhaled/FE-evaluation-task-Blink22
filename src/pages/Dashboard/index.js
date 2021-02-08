import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../components/Avatar";
import EditVehicle from "../../components/EditVehicle";
import FilterationHeader from "../../components/FilterationHeader";
import Statistics from "../../components/Statistics";
import Table from "../../components/Table";
import {
  deleteVehicleRequest,
  getVehiclesRequest,
} from "../../store/vehicles/actions";
import Car from "../../assets/images/car.png";
import { STATISTICS_LIST } from "./data";
import Sort from "../../components/Sort";

const Dashboard = () => {
  const dispatch = useDispatch();
  const vehiclesList = useSelector((state) => state.Vehicles.list);

  useEffect(() => {
    dispatch(getVehiclesRequest());
  }, [dispatch]);

  const COLUMNS = [
    {
      title: "Vehicle",
      dataIndex: "vehicle",
      key: "vehicle",
      render: ({ title, status }) => (
        <div className="d-flex">
          <Avatar size={36} src={Car} className="mr-3" icon={title[0]} />
          <div>
            <p className="vehicle-name">{title}</p>
            <small
              className={`vehicle-status ${
                status === "Active"
                  ? "active"
                  : status === "In shop"
                  ? "in-shop"
                  : "out-of-service"
              }`}
            >
              {status}
            </small>
          </div>
        </div>
      ),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Total Km",
      dataIndex: "totalKm",
      key: "totalKm",
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      render: ({ title, subTitle }) => (
        <>
          <p className="cost-title mb-0">{title}</p>
          <p className="cost-title sub mb-0">{subTitle}</p>
        </>
      ),
    },
  ];

  return (
    <div>
      <h4 className="textGray">Fuel History</h4>
      <FilterationHeader />
      <Statistics list={STATISTICS_LIST} />

      <Table
        data={vehiclesList}
        deleteAction={deleteVehicleRequest}
        columns={COLUMNS}
        sort={<Sort list={["Date", "Status"]} />}
      />
      <EditVehicle />
    </div>
  );
};

export default Dashboard;
