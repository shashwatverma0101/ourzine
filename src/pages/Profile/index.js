import React, { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import { Row, Col, Divider, Input } from "antd";
import edit from "../../Image/edit.svg";
import CustomButton from "./components/CustomButton";
import userImage from "../../Image/userImage.svg";
import auth from "../../services/auth";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { LocalStorage } from "../../utils";
import PasswordLock from '../../Image/PasswordLock.svg'
import * as $ from 'jquery'
import PasswordPopup from './components/PasswordPopup'
import DeleteModal from '../../components/modal/DeleteModal'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("USER"));
  const [profile, setProfile] = useState(
    `http://localhost:8080/auth/get-profilepic/${user._id}`
  );
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [name, setName] = useState("");

  const handleUploadProfilePic = (e) => {
    setIsLoading(true);
    let formData = new FormData();
    formData.append("profilepic", e.target.files[0]);

    auth
      .uploadProfile(formData)
      .then((res) => {
        setIsLoading(false);
        if (res.data.error) return toast.error("Something went wrong");
        if (res.data.result === true) window.location.href = "/profile";
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  const handleDeleteUser = () => {
    // popupfunc2()
    setIsLoading(true);
    auth
      .deleteUser()
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          LocalStorage.ClearLocalstorage();
          history.push("/");
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  const handleChangePassword = () => {
    if(newPassword !== confirmNewPassword) return toast.error("new and confirm password should be same")
    setIsLoading(true)
    auth
      .changePasswordd({ currentPassword, newPassword })
      .then((res) => {
        setIsLoading(false)
        if (res.data.result === "invalid")
          return toast.error("Invalid Password");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true)
          return toast.success("Password Changed Successfully");
      })
      .catch((e) => {
        setIsLoading(false)
        toast.error("Something went wrong");
      });
  };

  const handleUpdateProfile = () => {
    auth
      .updateProfile()
      .then((res) => {
        if (res.data.result === "invalid") return toast.error("Invalid Update");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) return toast.success("Success");
      })
      .catch((e) => {
        toast.error("something went wrong");
      });
  };

  const popupfunc1 = () => {debugger;
 
    var modal = document.getElementById("PasswordModal");
    $("#PasswordModal").css({ display: "block" });
    window.onclick = function (event) {
      if (event.target == modal) {
        $("#PasswordModal").css({ display: "none" });
      }
    };
  };
  const popupfunc2 = () => {debugger;
 
    var modal = document.getElementById("DeleteAcModal");
    $("#DeleteAcModal").css({ display: "block" });
    window.onclick = function (event) {
      if (event.target == modal) {
        $("#DeleteAcModal").css({ display: "none" });
      }
    };
  };
 
  const NameInput=()=>{
    // window.onload = function() {
      var editicon = document.getElementById('editicon');
      var textedit = document.getElementById('inputeditable');
      editicon.onclick = function(e) {
        textedit.contentEditable = true;
        textedit.focus();
        $('#editicon').css({'display':'none' });                
      }
 
      textedit.onmouseout = function() {               
          textedit.contentEditable = false;
          $('#editicon').css({'display':'block' });
        }
        // }
  }

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Navigation isEdit={true} />
      <PasswordPopup/>
      <DeleteModal/>
      <Row style={{ marginTop: "20px" }}>
        <Col span={1}></Col>
        <Col span={4}>
          <div style={{ width: "200px", height: "200px" }}>
            <img
              width="200px"
              height="200px"
              src={profile ? profile : userImage}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </Col>
        <Col span={12}>
          <Col span={24}>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                marginTop: "16px",
              }}
            >
              Your Account
            </h1>
          </Col>

          <Col span={24}>
            <h2
              style={{ fontWeight: "700", fontSize: "24px", marginTop: "10px" }}
            >
              Name
            </h2>
          </Col>

          <Col span={24}>
            <Row>
              <Col span={5}>
                <p style={{ fontSize: "18px", marginBottom: "0px  " }}>
                  {user.name ? user.name : "Full Name"}
                </p>
              </Col>
              <Col span={12}>
                <img src={edit} onClick = {NameInput} />
              </Col>
              <Divider style={{ color: "#C4C4C4" }} />
            </Row>
          </Col>
        </Col>
        <Col span={7}></Col>
        <Col xs={{ offset: 1, span: 4 }} style={{ marginTop: "10px" }}>
          <input
            name="file"
            type="file"
            hidden
            className="profile-upload-input"
            onChange={(e) => handleUploadProfilePic(e)}
          />

          <CustomButton
            onClick={() =>
              document.getElementsByClassName("profile-upload-input")[0].click()
            }
            btnWidth={"195px"}
          >
            Update Image
          </CustomButton>
        </Col>

        <Col span={12}>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Email Address
          </h1>
          <p>{user.email}</p>
          <Divider style={{ color: "#C4C4C4" }} />
        </Col>

        <Col span={7}></Col>

        <Col offset={5} span={12}>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Password
          </h1>
          <div style={{ width: "50%", marginBottom: "20px" }}>
            <Input
              style={{
                fontSize: "21px",
                padding: "9px 9px 9px 19px",
                borderRadius: "7px",
                width: "345px",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#C9E3E1",
              }}
              type="password"
              required
              value ={currentPassword}
              onChange = {(e) => setCurrentPassword(e.target.value)}
              size="large"
              className="site-form-item-icon1"
              prefix={<img src={PasswordLock} />}
              placeholder="Current Password"
            />
            <Input
              style={{
                fontSize: "21px",
                padding: "9px 9px 9px 19px",
                borderRadius: "7px",
                width: "345px",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#C9E3E1",
                marginTop: "14px",
              }}
              required
              type="password"
              value ={newPassword}
              onChange = {(e) => setNewPassword(e.target.value)}
              size="large"
              className="site-form-item-icon1"
              prefix={<img src={PasswordLock} />}
              placeholder="New Password"
            />
            <p
              style={{
                fontSize: "12px",
                color: "#C9E3E1",
                marginBottom: "3px",
                marginTop: "5px",
              }}
            >
              Use 8 or more characters with a mix of letters, numbers and
              symbols
            </p>
            <Input
              style={{
                fontSize: "21px",
                padding: "9px 9px 9px 19px",
                borderRadius: "7px",
                width: "345px",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#C9E3E1",
                marginTop: "14px",
              }}
              type="password"
              required
              value ={confirmNewPassword}
              onChange = {(e) => setConfirmNewPassword(e.target.value)}
              size="large"
              className="site-form-item-icon1"
              prefix={<img src={PasswordLock} />}
              placeholder="Confirm Password"
            />
          </div>

          {/* <CustomButton btnWidth={"150px"} onClick = {popupfunc1}>Change Password </CustomButton> */}
          <CustomButton btnWidth={"150px"} onClick = {handleChangePassword}>Change Password </CustomButton>

          <Divider style={{ color: "#C4C4C4" }} />
        </Col>
        <Col span={7}></Col>

        <Col offset={5} span={12}>
          <h1
            style={{
              fontWeight: "bold ",
              fontSize: "24px",
            }}
          >
            Delete Account
          </h1>
          <p>
            By deleting your account, you'll no longer be able to access any of
            your document on ourzine{" "}
          </p>
          <CustomButton onClick={handleDeleteUser} btnWidth={"130px"}>
            Delete Account{" "}
          </CustomButton>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "80px", paddingBottom: "5px" }}>
        <Col span={6}>
          <CustomButton
            onClick={() => history.push("/worksheet")}
            btnWidth="100px"
            radius="20px"
          >
            Cancel
          </CustomButton>

          <button
            style={{
              width: `100px`,
              padding: "6px 0",
              marginLeft: "4px",
              backgroundColor: "#429F97",
              border: "#429F97 1px solid",
              borderRadius: `20px`,
              color: "#fff",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
