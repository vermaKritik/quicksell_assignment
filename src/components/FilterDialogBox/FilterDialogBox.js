import React, { useEffect } from "react";
import "./FilterDialogBox.css";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../store/restaurantSlice";

function FilterDialogBox() {
  const dispatch = useDispatch();
  const [grouping, setGrouping] = useLocalStorage("grouping", "");
  const [ordering, setOrdering] = useLocalStorage("ordering", "");
  useEffect(() => {
    dispatch(filtersActions.setGrouping(grouping));
    dispatch(filtersActions.setOrdering(ordering));
  }, [grouping, ordering]);

  return (
    <div className="filterDialogBox">
      <div className="filterDialogBox_item">
        <label for="grouping">Grouping</label>

        <select
          value={grouping}
          onChange={(el) => setGrouping(el.target.value)}
          name="grouping"
          id="grouping"
        >
          <option value="status">Status</option>
          <option value="users">Users</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div className="filterDialogBox_item">
        <label for="ordering">Ordering</label>

        <select
          value={ordering}
          onChange={(el) => setOrdering(el.target.value)}
          name="ordering"
          id="ordering"
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default FilterDialogBox;