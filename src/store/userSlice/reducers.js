exports.setUsers = (state, action) => {
  const users = action.payload;
  const tempUsers = {};
  users.forEach((el) => {
    tempUsers[el.id] = el;
  });
  state.users = tempUsers;
};
