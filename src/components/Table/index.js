import React, { useEffect, useState } from "react";
import { Table as AntdTable, Space } from "antd";
import { useDispatch } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import _ from "lodash";
import { activeVehicle } from "../../store/vehicles/actions";
import { isEditFormOpen } from "../../store/EditForm/actions";
import "./Table.scss";
import "./Vehicles.scss";

const Table = ({ data, columns, deleteAction, sort }) => {
  const [listData, setListData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setListData(data);
  }, [data]);

  const handleDelete = (record) => {
    const newData = listData.filter((item) => item.key !== record.key);
    _.isFunction(deleteAction) && dispatch(deleteAction(record.key));
    setListData(newData);
  };

  const handleEdit = (record) => {
    dispatch(activeVehicle(record));
    dispatch(isEditFormOpen(true));
  };

  const actions = {
    title: "Actions",
    dataIndex: "actions",
    key: "action",
    render: (text, record) => {
      return (
        <Space size={"large"}>
          <EditOutlined
            className="edit-icon tb-icon"
            onClick={() => handleEdit(record)}
          />
          <DeleteOutlined
            onClick={() => handleDelete(record)}
            className="delete-icon tb-icon"
          />
        </Space>
      );
    },
  };

  return (
    <>
      {sort}
      <AntdTable
        columns={[...columns, actions]}
        dataSource={listData}
        className="antd-table-custom"
        pagination={{ position: ["topRight"], showSizeChanger: true }}
      />
    </>
  );
};

export default Table;
