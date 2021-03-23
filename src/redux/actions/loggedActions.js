const loggedIn = () => {
  return {
    type: 'LOGGED_IN',
  };
};
const notLoggedIn = () => {
  return {
    type: 'NOT_LOGGED_IN',
  };
};
const loggedActions = {
  loggedIn,
  notLoggedIn,
};
export default loggedActions;
