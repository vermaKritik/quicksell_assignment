exports.setGrouping = (state, action) => {
    const grouping = action.payload;
    state.grouping = grouping;
  };

  exports.setOrdering = (state, action) => {
    const ordering = action.payload;
    state.ordering = ordering;
  };