import React, { useEffect, useState } from "react";
import "./Home.css";
import Nav from "../../components/Nav/Nav";
import DisplayColumn from "../../components/DisplayColumn/DisplayColumn";
import data from "../../util/testData.json";
import {
  formattingForPriority,
  formattingForStatus,
  formattingForUsers,
} from "../../util/dataFormattingHelper";
import useLocalStorage from "../../hooks/useLocalStorage";
import { filtersActions } from "../../store/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const [displayData, setDisplayData] = useState([]);
  const [grouping, setGrouping] = useLocalStorage("grouping", "");
  const [ordering, setOrdering] = useLocalStorage("ordering", "");

  const filters = useSelector((state) => state.filtersSlice);

  useEffect(() => {
    dispatch(filtersActions.setGrouping(grouping));
    dispatch(filtersActions.setOrdering(ordering));
  }, [grouping, ordering]);

  useEffect(() => {
    console.log("data", data);

    let formatted;

    if (filters.grouping === "users") {
      formatted = formattingForUsers(data);
    } else if (filters.grouping === "priority") {
      formatted = formattingForPriority(data);
    } else {
      formatted = formattingForStatus(data);
    }

    setDisplayData(formatted);
    // console.log("displayData", displayData);
  }, [filters]);

  return (
    <div className="home">
      <Nav />
      <div className="home_main">
        {displayData.map((el) => (
          <DisplayColumn
            key={el.key}
            w={filters.grouping === "priority" ? "19%" : "24%" }
            title={el.title}
            data={el.data}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
