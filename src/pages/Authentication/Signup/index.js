import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form, Input, Space } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./Signupstyle.css";
import Ourzinelogo from "../../../Image/Rorshoklogowhite.svg";
import Girlvector from "../../../Image/Frame Girl.svg";
import { Link, useHistory } from "react-router-dom";
import { apiPost } from "../../../utils/axios.js";
import auth from "../../../services/auth";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";
import { isLogin } from "../../../utils";
import * as $ from "jquery";
import { checkStrongPassword } from "../../../utils/utils";
import PasswordLock from "../../../Image/PasswordLock.svg";
import LoginEmail from "../../../Image/LoginEmail.svg";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const history = useHistory();

  if (isLogin()) history.push("/worksheet");

  useEffect(() => {
    $(".ant-input").css({ "background-color": "#c9e3e1", color: "#429f97" });
  }, []);

  const handleSignUp = (e) => {
    if (weakPassword) return  
    setIsLoading(true);
    auth
      .signup({ email, password })
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === "exist")
          return toast.error("This email already exist");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          toast.success("Registered Successfully");
          toast.success("Please Verify Your Account");
          history.push("/signin");
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="signuptopdiv">
      {isLoading ? <Loader /> : ""}
      <div className="signupleftcontainer">
        <div className="signupleftchild"
          // style={{
          //   color: "white",
          //   height: "967px",
          //   display: "block",
          //   backgroundColor: "#429f97",
          //   borderTopRightRadius: "20px",
          //   borderBottomRightRadius: "20px",
          // }}
        >
          <div>
            <img src={Ourzinelogo} className="signupleftlogo"
              // style={{ height: "140px", width: "100%", marginTop: "118px" }}
               />
          </div>
          {/* <svg style={{width:"100%", height:"962"}} >
  <rect width="100%" height="960" style={{fill:'#336699',strokeWidth:'0',rx:'20',stroke:'rgb(0,0,0)'}} />  
</svg> */}

          <div className="signupleftchildcontent"
            // style={{
            //   width: "auto",
            //   marginLeft: "auto",
            //   marginRight: "auto",
            //   textAlign: "center",
            //   marginTop: "23px",
            // }}
          >
            <h1
              style={{ color: "#F5F5F5", fontSize: "40px", fontWeight: "700" }}
            >
              Hello,Writer!
            </h1>
            <p
              style={{ marginTop: "-10px", fontSize: "17px", color: "#C9E3E1" }}
            >
              Enter your details to access the services of Ourzine{" "}
            </p>
            <p
              style={{ marginTop: "-10px", fontSize: "20px", color: "#F5F5F5" }}
            >
              <b>OR</b>
            </p>
            <p
              style={{ marginTop: "-10px", fontSize: "17px", color: "#C9E3E1" }}
            >
              Already have an account{" "}
            </p>
            <Link to={`/signin`}>
              {" "}
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                size="large"
                className="login-form-button"
                style={{
                  color: "#F5F5F5",
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  borderColor: "#F5F5F5",
                  width: "136px",
                  height: "45px",
                }}
              >
                Login{" "}
              </Button>
            </Link>
          </div>
          </div>
          <div>
            <img src={Girlvector} className="signupgirlvector" />
          </div>        
      </div>

      <div className="signuprightcontainer">
       
          {/* <div id="ic"> */}
          {/* <svg style={{ width: "100%", height: "962" }}>
            <rect
              width="100%"
              height="960"
              style={{ fill: "#FFFFF0", strokeWidth: "0", stroke: "rgb(0,0,0)" }}
            />
          </svg> */}
           {/* <div className="signuprightchildcontent"> */}
          <div className="signuprightchild" >
            <div className="signuprightchildcontent">
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
              Create An Account
            </h1>
            </div>
            <div className="signuprightchildsmallcontent">
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
              Hello,Writer!
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
              Enter your details to access the services of Ourzine
            </p>
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={handleSignUp}
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
                  type="email"
                  size="large"
                  className="site-form-item-icon1 signupemail"
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
                  className="site-form-item-icon1 signuppassword"
                  style={{
                    fontSize: "21px",
                    padding: "9px 15px 9px 19px",
                    borderRadius: "7px",
                    // width: "345px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#c9e3e1",
                    // marginBottom: "0px",
                  }}
                  prefix={
                    <img src={PasswordLock}
                      className="site-form-item-icon"
                      style={{ color: "#429f97",width: '24px' }}
                    />
                  }
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    checkStrongPassword(e.target.value)
                      ? setWeakPassword(false)
                      : setWeakPassword(true);
                  }}
                />
              </Form.Item>
              <p className="signuppasswordinstr"
                // style={{
                //   fontSize: "11px",
                //   color: `${weakPassword ? "#ff4d4f" : "#C9E3E1"}`,
                //   marginTop: "-15px",
                //   width: '70%',
                //   marginLeft: '65px',
                //   textAlign: 'left',
                //   marginBottom: '30px'
                // }}
              >
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>

              <Form.Item className="signupterms">
                <p
                  style={{
                    marginTop: "6px",
                    // marginLeft : "45px",
                    color: "#C9E3E1",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  By signing up you agree to our
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{
                      color: "#429f97",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    terms and conditions
                  </a>
                </p>
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    color: "#F5F5F5",
                    marginTop: "-24px",
                    fontWeight: "bold",
                    width: "136px",
                    height: "45px",
                    backgroundColor: "#429f97",
                    borderColor: "#429f97",
                  }}
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  size="large"
                  className="login-form-button"
                >
                  Sign up
                </Button>
              </Form.Item>
              <div className="signupsmallforgotpass" >
              <Link to={`/signin`}
              // style={{width:'50%',paddingRight: '35px'}} 
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
                    Login
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
                    Terms & Conditions
                  </a>
                </Link>                
              </div>
            </Form>
          </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default Signup;
