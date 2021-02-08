import React, { useEffect, useState } from "react";
import { Table as AntdTable } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { useDispatch } from "react-redux";
import _ from "lodash";
import "./Table.scss";
import "./Vehicles.scss";

const Table = ({ data, action }) => {
  const [listData, setListData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setListData(data);
  }, [data]);

  const handleDelete = (record) => {
    const newData = listData.filter((item) => item.key !== record.key);
    _.isFunction(action) && dispatch(action(record.key));
    setListData(newData);
  };

  const COLUMNS = [
    {
      title: "Vehicle",
      dataIndex: "vehicle",
      key: "vehicle",
      render: ({ title, status }) => (
        <>
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
        </>
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
    {
      title: "Actions",
      dataIndex: "actions",
      key: "action",
      render: (text, record) => (
        <Space size={"large"}>
          <EditOutlined
            className="edit-icon tb-icon"
            onClick={(e) => {
              // console.log(e);
              // dispatch(activeVehicle(vehicle));
            }}
          />
          <DeleteOutlined
            onClick={() => handleDelete(record)}
            className="delete-icon tb-icon"
          />
        </Space>
      ),
    },
  ];

  return (
    <AntdTable
      columns={COLUMNS}
      dataSource={listData}
      className="antd-table-custom"
      pagination={{ position: ["topRight"], showSizeChanger: true }}
    />
  );
};

export default Table;
