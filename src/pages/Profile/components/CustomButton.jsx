import React from "react";

const CustomButton = ({ children, btnHeight, btnWidth, radius, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: `${btnWidth}`,
        padding: "6px 0",
        backgroundColor: "#fffff0",
        border: "#429F97 1px solid",
        borderRadius: `${radius ? radius : "10px"}`,
        color: "#429F97",
        cursor: "pointer",
        height: `${btnHeight ? btnHeight : "45px"}`,
        fontWeight : "bold"
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
