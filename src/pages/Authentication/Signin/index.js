import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form, Input, Space } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./Signinstyle.css";
import Ourzinelogo from "../../../Image/Rorshoklogowhite.svg";
import Girlvector from "../../../Image/Frame Girl.svg";
import { Link, useHistory } from "react-router-dom";
import { apiPost } from "../../../utils/axios.js";
import auth from "../../../services/auth";
import { toast } from "react-toastify";
import { isLogin, LocalStorage } from "../../../utils";
import Loader from "../../../components/loader/Loader";
import * as $ from "jquery";
import PasswordLock from "../../../Image/PasswordLock.svg";
import LoginEmail from "../../../Image/LoginEmail.svg";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  if (isLogin()) history.push("/worksheet");

  useEffect(() => {
    $(".ant-input").css({ "background-color": "#c9e3e1", color: "#429f97" });
  }, []);

  const handleSignIn = () => {
    setIsLoading(true);
    auth
      .signin({ email, password })
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === "notExist")
          return toast.error("This email does not exist");
        if (res.data.result === "invalid")
          return toast.error("Password is incorrect");
        if (res.data.result === "error")
          return toast.error("Something went wrong");

        if (res.data.result === true) {
          if (!res.data.user.isVerified)
            return toast.error("Please Verify Your Account");
          LocalStorage.StoreToken(res.data.user.token);
          history.push("/worksheet");
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="signintopdiv" >
      {isLoading ? <Loader /> : ""}
      {/* <div > */}
        <div className="signinleftcontainer" >
          {/* <h3 style={{color:'#F5F5F5',fontSize:'27px',textAlign:'center',marginTop:'45px'}}>What is Ourzine?</h3> */}
          
          <div className="signinleftchild">
              <div>
            <img src={Ourzinelogo}
              className="signinleftlogo" />
              </div>
            <div className="signinleftchildcontent">
            <h1
              style={{ color: "#F5F5F5", fontSize: "40px", fontWeight: "700" }}>
              Welcome,Writer!
            </h1>
            <p
              style={{ marginTop: "-10px", fontSize: "17px", color: "#C9E3E1" }}>
              Enter your credentials to access Ourzine{" "}
            </p>
            <p
              style={{ fontSize: "20px", color: "#F5F5F5", marginTop: "-10px" }}>
              <b>OR</b>
            </p>
            <p
              style={{ marginTop: "-10px", fontSize: "17px", color: "#C9E3E1" }}>
              Create an account{" "}
            </p>
            <Link to={`/signup`}>
              {" "}
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                size="large"
                className="login-form-button"
                style={{
                  color: "#F5F5F5",
                  backgroundColor: "#429f97",
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  borderColor: "#F5F5F5",
                  width: "136px",
                  height: "45px",
                }}
              >
                Sign up{" "}
              </Button>
            </Link>
          </div>
          </div>
          <div>
            <img src={Girlvector} className="signingirlvector"/>
          </div>
        </div>
      {/* </div> */}
      {/* <div > */}
        <div className="signinrightcontainer">
          {/* <div id="ic"> */}
          {/* <svg style={{ width: "100%", height: "962" }}>
            <rect
              width="100%"
              height="960"
              style={{ fill: "#FFFFF0", strokeWidth: "0", stroke: "rgb(0,0,0)" }}
            />
          </svg> */}
          <div className="signinrightchild" >
            <div className="signinrightchildcontent">
            <h3
              style={{
                color: "#429f97",
                fontWeight: "700px",
                fontSize: "24px",
                fontWeight: "700",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "98px",
              }}
            >
              What is Ourzine?
            </h3>
            <h1
              style={{
                color: "#429f97",
                fontWeight: "700px",
                fontSize: "40px",
                fontWeight: "700",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Login to Ourzine
            </h1>
            </div>
            <div className="signinrightchildsmallcontent">
            <h3
              style={{
                color: "#429f97",
                fontWeight: "700px",
                fontSize: "24px",
                fontWeight: "700",
                marginLeft: "auto",
                marginRight: "auto",
                // marginBottom: "98px",
              }}
            >
              Welcome, Writer!
            </h3>
            <p
              style={{
                color: "#429f97",
                fontWeight: "700px",
                fontSize: "12px",
                fontWeight: "300",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: '20px'
              }}
            >
              Enter your credentials to access Ourzine
            </p>
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={handleSignIn}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  style={{
                    fontSize: "21px",
                    padding: "9px 9px 9px 19px",
                    borderRadius: "7px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#c9e3e1",
                  }}
                  size="large"
                  className="site-form-item-icon1 signinemail"
                  prefix={
                    <img src={LoginEmail}
                      className="site-form-item-icon"
                      style={{ color: "#429f97",width: '24px' }}
                    />
                  }
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  className="site-form-item-icon1 signinpassword"
                  style={{
                    fontSize: "21px",
                    padding: "9px 15px 9px 19px",
                    borderRadius: "7px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#c9e3e1",
                  }}
                  prefix={
                    <img src={PasswordLock}
                      className="site-form-item-icon"
                      style={{ color: "#429f97",width: '24px' }}
                    />
                  }
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item style={{ marginTop: "-7px" }} className="signinforgotpass" >
                <Link to={`/Forgotpassword`}>
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{
                      color: "#429f97",
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    Forgot password ?
                  </a>
                </Link>
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
                  {" "}
                  Login{" "}
                </Button>
              </Form.Item>
              <div className="signinsmallforgotpass" >
              <Link to={`/signup`}
              //  style={{width:'50%',paddingRight: '35px'}}
                >
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{
                      color: "#429f97",
                      fontWeight: "300",
                      fontSize: "12px",
                      float:'left'
                    }}
                  >
                    Sign Up
                  </a>
                </Link>
                <Link to={`/Forgotpassword`}
                // style={{width:'50%'}}
                 >
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{
                      color: "#429f97",
                      fontWeight: "300",
                      fontSize: "12px",
                      float:'right'
                    }}
                  >
                    Forgot password ?
                  </a>
                </Link>                
              </div>
            </Form>
          </div>
        </div>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};
export default Signin;
