import React from "react";
import { Divider, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Ourzinelogo from "../../Image/ourzinelogo.svg";
import Logout from "../../Image/Logout.svg";
import EditSquareGreen from "../../Image/EditSquareGreen.svg";
import { LocalStorage } from "../../utils";
import "./Navigation.css";
import { useHistory } from "react-router-dom";

const Navigation = ({ isEdit }) => {
  const user = JSON.parse(localStorage.getItem("USER"));

  const history = useHistory();

  const handleLogout = () => {
    LocalStorage.ClearLocalstorage();
    history.push("/signin");
  };

  return (
    <div style={{ backgroundColor: "#fffff0" }}>
      <div class="navbar">
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
          <div class="dropdown">
            <button class="dropbtn">
              <img
                src={`http://localhost:8080/auth/get-profilepic/${user._id}`}
                style={{
                  height: "50px",
                  borderRadius: "40px",
                  marginRight: "5px",
                }}
              />
              Name <DownOutlined />
              <i class="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <img className="profileimg" src={Ourzinelogo} />
              <p>
                <b style={{ color: "#429f97" }}>Name</b>
                <br />
                {user.name}
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

export default Navigation;
