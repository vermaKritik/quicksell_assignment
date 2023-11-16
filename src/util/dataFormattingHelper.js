import React from "react";
import {
  FaCircleHalfStroke,
  FaCircleNotch,
  FaCircleExclamation,
  FaCircleXmark,
  FaCircleCheck,
} from "react-icons/fa6";
import {
  BsFillInfoSquareFill,
  BsBarChartFill,
  BsThreeDots,
} from "react-icons/bs";

export const sortFormattedData = (data, type) => {
  if (type === "title") {
    return data.sort((a, b) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return data.sort((a, b) => {
      return a.priority - b.priority;
    });
  }
};

export const formattingForStatus = (data) => {
  const statusTemp = [
    {
      key: 1,
      title: "Backlog",
      data: [],
      icon: <FaCircleExclamation style={{ color: "#95a3b4" }} />,
    },
    {
      key: 2,
      title: "Todo",
      data: [],
      icon: <FaCircleNotch style={{ color: "#e1e1e1" }} />,
    },
    {
      key: 3,
      title: "In progress",
      data: [],
      icon: <FaCircleHalfStroke style={{ color: "#f1c946" }} />,
    },

    {
      key: 4,
      title: "Done",
      data: [],
      icon: <FaCircleCheck style={{ color: "#5e6ad2" }} />,
    },
    {
      key: 5,
      title: "Cancelled",
      data: [],
      icon: <FaCircleXmark style={{ color: "#95a3b4" }} />,
    },
  ];

  data.tickets.forEach((el) => {
    switch (el.status) {
      case "Backlog":
        statusTemp[0].data.push(el);
        break;
      case "Todo":
        statusTemp[1].data.push(el);
        break;
      case "In progress":
        statusTemp[2].data.push(el);
        break;
      case "Done":
        statusTemp[3].data.push(el);
        break;
      case "Cancelled":
        statusTemp[4].data.push(el);
        break;

      default:
        break;
    }
  });

  return statusTemp;
};

export const formattingForPriority = (data) => {
  const PriorityTemp = [
    {
      key: 1,
      priority: 0,
      title: "No priority ",
      data: [],
      icon: <BsThreeDots style={{ color: "#6a6e76" }} />,
    },
    {
      key: 5,
      priority: 4,
      title: "Urgent",
      data: [],
      icon: <BsFillInfoSquareFill style={{ color: "#fc7840" }} />,
    },
    {
      key: 2,
      priority: 1,
      title: "Low",
      data: [],
      icon: <BsBarChartFill style={{ color: "#6a6e76" }} />,
    },
    {
      key: 3,
      priority: 2,
      title: "Medium ",
      data: [],
      icon: <BsBarChartFill style={{ color: "#6a6e76c2" }} />,
    },
    {
      key: 4,
      priority: 3,
      title: "High",
      data: [],
      icon: <BsBarChartFill style={{ color: "#95a3b4" }} />,
    },
  ];

  data.tickets.forEach((el) => {
    PriorityTemp[el.priority].data.push(el);
  });

  return PriorityTemp;
};

export const formattingForUsers = (data) => {
  const tempUsers = {};

  data.users.forEach((el) => {
    const temp = {
      ...el,
      key: el.id,
      data: [],
      title: el.name,
    };
    tempUsers[el.id] = temp;
  });

  data.tickets.forEach((el) => {
    tempUsers[el.userId]?.data.push(el);
  });
  console.log(Object.values(tempUsers));
  return Object.values(tempUsers);
};
