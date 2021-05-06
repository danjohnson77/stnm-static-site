import { useState } from "react";

const Arrow = ({ direction, onClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex items-center p-5 cursor-pointer transition ${
        open && "transform rotate-180"
      }`}
      onClick={(direction) => {
        setOpen(!open);
        onClick(direction);
      }}
    >
      <i className={`fas fa-angle-${direction}`}></i>
    </div>
  );
};

export default Arrow;
