export default {
  status: "",
  token: localStorage.getItem("client_token") || "",
  user: null,
  isLoggedInUser: null,
  search: null
};
