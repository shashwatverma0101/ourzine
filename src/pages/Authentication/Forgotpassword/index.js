import React, { useState , useEffect} from "react";
import { Row, Col, Button, Form, Input, Space } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
// import './Signinstyle.css';
import Ourzinelogo from "../../../Image/Rorshoklogowhite.svg";
import Girlvector from "../../../Image/Frame Girl.svg";
import { Link, useHistory } from "react-router-dom";
import auth from "../../../services/auth";
import Loader from "../../../components/loader/Loader";
import { toast } from "react-toastify";
import { isLogin } from "../../../utils";
import * as $ from "jquery";
import './Forgotpassword.css';
import LoginEmail from "../../../Image/LoginEmail.svg";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  if (isLogin()) history.push("/worksheet");

  useEffect(() => {
    $(".ant-input").css({ "background-color": "#c9e3e1", color: "#429f97" });
  }, []);

  const handleForgotPassword = () => {
    setIsLoading(true);
    auth
      .forgotPassword({ email })
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === "notFound")
          return toast.error("Please enter registered email");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          toast.success(
            "Reset Password link has been sent to registered email id"
          );
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="fpasstopdiv">
      {isLoading ? <Loader /> : ""}
      <div className="fpassleftcontainer">
        <div className="fpassleftchild" >
          <div>
            <img src={Ourzinelogo} className="fpassleftlogo" />
          </div>
          </div>
          <div>
            <img
              src={Girlvector} className="fpassgirlvector" />
          </div>
        
      </div>
      <div className="fpassrightcontainer">
        
          <div className="fpassrightchild">
          <div className="fpassrightchildcontent" >
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
              Forgot Password
            </h3>
            </div>
            <div className="fpassrightchildsmallcontent">
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
              Reset link would be sent on your Email
            </p>
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={handleForgotPassword}
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
                    // width: "345px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#c9e3e1",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="large"
                  className="site-form-item-icon1 fpassemail"
                  prefix={
                    <img src={LoginEmail}
                      className="site-form-item-icon"
                      style={{ color: "#429f97" ,width: '24px'}}
                    />
                  }
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item className="fpassinstr" style={{ marginTop: "-12px" }}>
                <Link to={`/Forgotpassword`}>
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{
                      color: "#429f97",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    Reset link would be sent on your Email
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
                  Submit{" "}
                </Button>
              </Form.Item>
              <div className="fpasssmallforgotpass" >
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
                    Go back to Login
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
export default Forgotpassword;
