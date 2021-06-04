import React, { useEffect } from "react";
import "./App.less";
import Routes from "./routes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "./services/auth";
import { isLogin } from "./utils";
import { connect } from "react-redux";
import { fetchCurrentUser } from "./redux/actions/auth";

function App({ fetchCurrentUser }) {
  useEffect(() => {
    if (isLogin())
      auth
        .getProfile()
        .then((res) => {
          if (res.data.result === "notFound") return toast.error("Not Found");
          if (res.data.result === "error")
            return toast.error("Something went wrong");
          if (res.data.result === true) {
            fetchCurrentUser(res.data.user);
          }
        })
        .catch((e) => {
          toast.error("Something went wrong");
        });
    else {
      fetchCurrentUser(null);
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}

export const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: (user) => dispatch(fetchCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
