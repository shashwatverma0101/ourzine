import React from "react";

const CustomButton = ({ children, btnWidth, radius, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: `${btnWidth}`,
        padding: "6px 0",
        marginLeft: "4px",
        backgroundColor: "#fff",
        border: "#429F97 1px solid",
        borderRadius: `${radius ? radius : "10px"}`,
        color: "#429F97",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
