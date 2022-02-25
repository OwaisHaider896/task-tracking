import React from "react";

const Button = ({ onAdd, showAdd, color, text }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onAdd} className="btn">
      {text}
    </button>
  );
};

export default Button;
