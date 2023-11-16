exports.formattingForStatus = (data) => {
  const statusTemp = [
    {
      key: 1,
      title: "Backlog",
      data: [],
    },
    {
      key: 2,
      title: "Todo",
      data: [],
    },
    {
      key: 3,
      title: "In progress",
      data: [],
    },
    {
      key: 4,
      title: "Cancelled",
      data: [],
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
      case "Cancelled":
        statusTemp[3].data.push(el);
        break;
      default:
        break;
    }
  });

  return statusTemp;
};
exports.formattingForStatus = (data) => {
  const statusTemp = [
    {
      key: 1,
      title: "Backlog",
      data: [],
    },
    {
      key: 2,
      title: "Todo",
      data: [],
    },
    {
      key: 3,
      title: "In progress",
      data: [],
    },
    {
      key: 4,
      title: "Cancelled",
      data: [],
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
      case "Cancelled":
        statusTemp[3].data.push(el);
        break;
      default:
        break;
    }
  });

  return statusTemp;
};

exports.formattingForPriority = (data) => {
  const PriorityTemp = [
    {
      key: 1,
      priority: 0,
      title: "No priority ",
      data: [],
    },
    {
      key: 2,
      priority: 1,
      title: "Low",
      data: [],
    },
    {
      key: 3,
      priority: 2,
      title: "Medium ",
      data: [],
    },
    {
      key: 4,
      priority: 3,
      title: "High",
      data: [],
    },
    {
      key: 5,
      priority: 4,
      title: "Urgent",
      data: [],
    },
  ];

  data.tickets.forEach((el) => {
    PriorityTemp[el.priority].data.push(el);
  });

  return PriorityTemp;
};

exports.formattingForUsers = (data) => {
  const tempUsers = {};

  data.users.forEach((el) => {
    tempUsers[el.id] = el;
    tempUsers[el.id].data = [];
    tempUsers[el.id].title = el.name;
    tempUsers[el.id].key = el.id;
  });

  data.tickets.forEach((el) => {
    tempUsers[el.userId]?.data.push(el);
  });
  console.log(Object.values(tempUsers));
  return Object.values(tempUsers);
};
