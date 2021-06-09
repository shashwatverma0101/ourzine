import React, { useEffect, useState } from "react";
import { Divider, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Ourzinelogo from "../../Image/Rorshoklogoblack.svg";
import Logout from "../../Image/Logout.svg";
import EditSquareGreen from "../../Image/EditSquareGreen.svg";
import { isLogin, LocalStorage } from "../../utils";
import "./Navigation.css";
import { useHistory } from "react-router-dom";
import { BASE_API_URL } from "../../services/domain";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/selectors/auth";
import { connect } from "react-redux";
import auth from "../../services/auth";
import { toast } from "react-toastify";
import { fetchCurrentUser } from "../../redux/actions/auth";

const Navigation = ({ isEdit, currentUser, fetchCurrentUser }) => {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleLogout = () => {
    LocalStorage.ClearLocalstorage();
    fetchCurrentUser(null);
    history.push("/signin");
  };

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
  }, []);

  useEffect(() => {
    setName(currentUser ? currentUser.name : "");
  }, [currentUser]);

  return (
    <div style={{ backgroundColor: "#fffff0" }}>
      <div className="navbar">
        <img src={Ourzinelogo} style={{ height: "76px" }} />
        <div>
          {isEdit ? (
            <>
              <Button
                style={{
                  fontWeight: "bold",
                  width: "auto",
                  height: "45px",
                  color: "#F5F5F5",
                  backgroundColor: "#429f97",
                  borderColor: "#429f97",
                  marginTop: "14px",
                  borderRadius: "12px",
                }}
                type="primary"
                htmlType="submit"
                shape="round"
                size="large"
                className="login-form-button"
              >
                Continue Editing
              </Button>
            </>
          ) : (
            ""
          )}
          <div className="dropdown">
            <button className="dropbtn">
              <img
                src={`${BASE_API_URL}/auth/get-profilepic/${
                  currentUser ? currentUser._id : ""
                }`}
                style={{
                  height: "50px",
                  borderRadius: "40px",
                  marginRight: "5px",
                }}
              />
              {currentUser ? currentUser.name : ""}
              <DownOutlined />
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <img
                className="profileimg"
                src={`${BASE_API_URL}/auth/get-profilepic/${
                  currentUser ? currentUser._id : ""
                }`}
              />
              <p>
                <b style={{ color: "#429f97" }}>
                  {" "}
                  {currentUser ? currentUser.name : ""}
                </b>
                <br />
                {currentUser ? currentUser.email : ""}
              </p>{" "}
              <Divider className="divider1" />
              <a onClick={() => history.push("/profile")}>
                <img src={EditSquareGreen} style={{ marginRight: "8px" }} />
                Edit Profile
              </a>
              <a onClick={handleLogout}>
                <img src={Logout} style={{ marginRight: "8px" }} />
                Logout
              </a>
              {/* <a href="#">Link 3</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: (user) => dispatch(fetchCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
