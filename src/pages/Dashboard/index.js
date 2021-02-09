import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../components/Avatar";
import EditVehicle from "../../components/EditVehicle";
import FilterationHeader from "../../components/FilterationHeader";
import Statistics from "../../components/Statistics";
import Table from "../../components/Table";
import {
  deleteVehicleRequest,
  getVehicles,
  getVehiclesRequest,
} from "../../store/vehicles/actions";
import Car from "../../assets/images/car.png";
import { STATISTICS_LIST } from "./data";
import Sort from "../../components/Sort";
import moment from "moment";
import _ from "lodash";

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
      dataIndex: "date",
      key: "date",
      render: (text, record) => {
        return <p>{moment(record.date * 1000).format("hh:mm A")}</p>;
      },
      responsive: ["sm"],
    },
    {
      title: "Total Km",
      dataIndex: "totalKm",
      key: "totalKm",
      render: (text, record) => {
        return <p>{`${record.totalKm} Km`}</p>;
      },
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
      render: (text, record) => {
        return <p>{`${record.volume} L`}</p>;
      },
      responsive: ["md"],
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
      responsive: ["md"],
    },
  ];

  const handleSort = (value) => {
    switch (value) {
      case "Date":
        const sortedVehiclesDate = _.sortBy(vehiclesList, ["date"]);
        dispatch(getVehicles(sortedVehiclesDate));
        break;
      default:
        const sortedVehiclesStatus = _.sortBy(vehiclesList, ["vehicle.status"]);
        dispatch(getVehicles(sortedVehiclesStatus));
        break;
    }
  };

  return (
    <div>
      <h4 className="textGray">Fuel History</h4>
      <FilterationHeader />
      <Statistics list={STATISTICS_LIST} />

      <Table
        data={vehiclesList}
        deleteAction={deleteVehicleRequest}
        columns={COLUMNS}
        sort={<Sort list={["Date", "Status"]} handleChange={handleSort} />}
      />
      <EditVehicle />
    </div>
  );
};

export default Dashboard;
