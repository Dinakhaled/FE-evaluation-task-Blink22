import React from "react";
import { CarOutlined, FileTextOutlined, UserOutlined } from "@ant-design/icons";

export const SIDEMENU_LIST = [
  {
    id: 1,
    text: "Vehicles",
    slug: "/Vehicles",
    icon: <CarOutlined />,
    subList: [],
  },
  {
    id: 2,
    text: "Report",
    slug: "/",
    icon: <FileTextOutlined />,
    subList: [
      {
        id: 1,
        text: "Operating Cost",
        slug: "/c",
      },
      {
        id: 2,
        text: "Fuel History",
        slug: "/h",
      },
      {
        id: 3,
        text: "Total Cost",
        slug: "/t",
      },
      {
        id: 4,
        text: "Cost/Meter",
        slug: "/m",
      },
      {
        id: 5,
        text: "Expesne Summary",
        slug: "/s",
      },
      {
        id: 6,
        text: "Utilization",
        slug: "/u",
      },
    ],
  },
  {
    id: 3,
    text: "People",
    slug: "/People",
    icon: <UserOutlined />,
    subList: [],
  },
];
