import React, { useEffect, useState } from "react";
import { Divider, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import OurzineWhiteLogo from '../../Image/ourzinelogo1.svg'
import {
  ZoomPlus,
  ZoomMinus,
  ZoomSlider,
  PrintDisable,
  AddSheetDisable,
  DeleteSheetDisable,
  SaveDisable,
  DeleteDisable,
  HelpDisable,
  DangerTriangle,
  Edit,
  Print,
  AddSheet,
  DeleteSheet,
  Save,
  Delete,
  Help,
  Ellipse,
  ArrowRight,
  ArrowLeft,
  EditSquareGreen,
  Logout,
  Sliderleft,
  Ourzinelogo,
  ArrowLeftDisable,
  ArrowRightDisable
  
} from "../../Image";
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
    <>
    <div className ="mobileViewNav">
        <div style ={{display : "flex"}}>
          <img className = "nav-content-img" src={OurzineWhiteLogo} height = "30px" alt="" />
        </div>
        <div style = {{display: "flex"}}>
        <div className = "nav-content"><img src={Save} height = "20px" alt="" /></div>
        <div className = "nav-content"><img src={Print} height = "20px" alt="" /></div>
        <div className = "nav-content"><img src={Delete} height = "20px" alt="" /></div>
        <div className = "nav-content"><img src={Help} height = "20px" alt="" /></div>
        </div>
    </div>

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
              {currentUser ? (
                <img
                  height="200px"
                  src={
                    currentUser.profilepic
                      ? `${BASE_API_URL}/auth/get-profilepic/${
                          currentUser ? currentUser._id : ""
                        }`
                      : "https://pixabay.com/get/gf3bccfafd5fb904fdd46e1e78899f31d68fda75373a9a5e7bf3f5b6ed6c588e94c2cb946d4db56fa3f144772f0356865_1920.jpg"
                  }
                  style={{
                    height: "50px",
                    borderRadius: "40px",
                    marginRight: "5px",
                  }}
                />
              ) : (
                ""
              )}
              {currentUser ? currentUser.name : ""}
              <DownOutlined />
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              {currentUser ? (
                <img
                  className="profileimg"
                  height="200px"
                  src={
                    currentUser.profilepic
                      ? `${BASE_API_URL}/auth/get-profilepic/${
                          currentUser ? currentUser._id : ""
                        }`
                      : "https://pixabay.com/get/gf3bccfafd5fb904fdd46e1e78899f31d68fda75373a9a5e7bf3f5b6ed6c588e94c2cb946d4db56fa3f144772f0356865_1920.jpg"
                  }
                />
              ) : (
                ""
              )}
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

    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: (user) => dispatch(fetchCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
