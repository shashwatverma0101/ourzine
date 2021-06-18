import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, Input, Space } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
// import './Signupstyle.css';
import Ourzinelogo from "../../../Image/Rorshoklogowhite.svg";
import Girlvector from "../../../Image/Frame Girl.svg";
import { Link, useHistory } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import auth from "../../../services/auth";
import { toast } from "react-toastify";
import * as $ from "jquery";
import { checkStrongPassword } from "../../../utils/utils";
import './Resetpassword.css';
import PasswordLock from "../../../Image/PasswordLock.svg";

const Resetpassword = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [weakPassword, setWeakPassword] = useState(false);
  const history = useHistory();

  const handleResetPassword = () => {
    if (weakPassword) return  
    if (password !== confirmPassword)
      return toast.error("Password and Confirm Password should matched");
    setIsLoading(true);
    auth
      .resetPassword({ token: match.params.token, newPassword: password })
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === false)
          return toast.error("Please verify your email");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          toast.success("Password changed successfully");
          history.push("/signin");
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  useEffect(() => {
    $(".ant-input").css({ "background-color": "#c9e3e1", color: "#429f97" });
  }, []);

  return (
    <div className="rpasstopdiv">
      {isLoading ? <Loader /> : ""}
      <div className="rpassleftcontainer">
        <div className="rpassleftchild" >
          <div>
            <img
              src={Ourzinelogo} className="rpassleftlogo" />
          </div>
          </div>
          <div>
            <img
              src={Girlvector} className="rpassgirlvector" />
          </div>
       
      </div>
      <div className="rpassrightcontainer">
        
          <div className="rpassrightchild">
          <div className="rpassrightchildcontent" >
            <h3
              style={{
                color: "#429f97",
                fontWeight: "700px",
                fontSize: "40px",
                fontWeight: "700",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Reset Password
            </h3>
            </div>
            <div className="rpassrightchildsmallcontent" >
            <h3
              style={{
                color: "#429f97",
                fontWeight: "700px",
                fontSize: "24px",
                fontWeight: "700",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Welcome, Writer!
            </h3>
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={handleResetPassword}
            >
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  style={{
                    fontSize: "21px",
                    padding: "9px 9px 9px 19px",
                    borderRadius: "7px",
                    // width: "345px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#C9E3E1",
                  }}
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    checkStrongPassword(e.target.value)
                      ? setWeakPassword(false)
                      : setWeakPassword(true);
                  }}
                  size="large"
                  className="site-form-item-icon1 rpassemail"
                  prefix={
                    <img src={PasswordLock}
                      className="site-form-item-icon"
                      style={{ color: "#429f97",width: '22px' }}
                    />
                  }
                  placeholder="New Password"
                />
              </Form.Item>
              <p className="rpasspasswordinstr"
                // style={{
                //   fontSize: "12px",
                //   color: `${weakPassword ? "#ff4d4f" : "#C9E3E1"}`,
                //   marginBottom: "20px",
                //   marginLeft: "15px",
                //   marginTop: "-20px",
                // }}
              >
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>

              <Form.Item
                // style={{ marginTop: "-5px", marginBottom: "30px" }}
                name="confirm"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  size="large"
                  type="password"
                  className="site-form-item-icon1 rpasspassword"
                  style={{
                    fontSize: "21px",
                    padding: "9px 9px 9px 19px",
                    borderRadius: "7px",
                    // width: "345px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#C9E3E1",
                  }}
                  prefix={
                    <img src={PasswordLock}
                      className="site-form-item-icon"
                      style={{ color: "#429f97",width: '22px' }}
                    />
                  }
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    fontWeight: "bold",
                    width: "136px",
                    height: "45px",
                    color: "#F5F5F5",
                    backgroundColor: "#429f97",
                    borderColor: "#429f97",
                  }}
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  size="large"
                  className="login-form-button"
                >
                  Submit
                </Button>
              </Form.Item>
              <div className="rpasssmallforgotpass" >
                <Link to={`/signin`}>
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{
                      color: "#429f97",
                      fontWeight: "300",
                      fontSize: "12px"
                    }}
                  >
                  Login
                  </a>
                </Link>
              </div>
            </Form>
          
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Resetpassword;
