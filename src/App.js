import React, { useEffect } from "react";
import "./App.less";
import Routes from "./routes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "./services/auth";
import { isLogin } from "./utils";

function App() {

  useEffect(() => {
    if(isLogin())
    auth
      .getProfile()
      .then((res) => {
        if (res.data.result === "notFound") return toast.error("Not Found");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          localStorage.setItem("USER", JSON.stringify(res.data.user));
        }
      })
      .catch((e) => {
        toast.error("Something went wrong");
      });
  }, []);
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
