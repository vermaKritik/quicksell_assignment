import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Nav from "../../components/Nav/Nav";
import DisplayColumn from "../../components/DisplayColumn/DisplayColumn";
import useLocalStorage from "../../hooks/useLocalStorage";
import { filtersActions } from "../../store/filtersSlice";
import { usersActions } from "../../store/userSlice";
import { getData } from "../../http";
import {
  formattingForPriority,
  formattingForStatus,
  formattingForUsers,
} from "../../util/dataFormattingHelper";
import Loader from "../../components/shared/Loader/Loader";

function Home() {
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  const [grouping, setGrouping] = useLocalStorage("grouping", "");
  const [ordering, setOrdering] = useLocalStorage("ordering", "");

  const filters = useSelector((state) => state.filtersSlice);

  const fetchData = async () => {
    setLoader(true);
    const res = await getData();
    setRowData(res.data);
    dispatch(usersActions.setUsers(res.data.users));
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(filtersActions.setGrouping(grouping));
    dispatch(filtersActions.setOrdering(ordering));
  }, [dispatch, grouping, ordering]);

  useEffect(() => {
    console.log("data", rowData);

    let formatted;

    if (rowData.length === 0) return;

    if (filters.grouping === "users") {
      formatted = formattingForUsers(rowData);
    } else if (filters.grouping === "priority") {
      formatted = formattingForPriority(rowData);
    } else {
      formatted = formattingForStatus(rowData);
    }

    setDisplayData(formatted);
  }, [filters, rowData]);

  return (
    <div className="home">
      <Nav />
      {loader && (
        <div className="home_main">
          <Loader />
        </div>
      )}

      {!loader && (
        <div className="home_main">
          {displayData.map((el) => (
            <DisplayColumn
              element={el}
              icon={el.icon}
              type={filters.grouping}
              key={el.key}
              w={"19%"}
              title={el.title}
              data={el.data}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
