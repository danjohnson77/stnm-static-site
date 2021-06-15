import { useState } from "react";
import Arrow from "./Arrow";

const DropdownPanel = ({ children, heading, classes, startOpen }) => {
  const [open, setOpen] = useState(startOpen ? true : false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`${classes}  transition-height duration-500`}>
      <div className="flex justify-between">
        <h1 className="text-xl text-center">{heading}</h1>
        <Arrow direction={startOpen ? "up" : "down"} onClick={handleClick} />
      </div>
      <div
        className={`transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        {open && children}
      </div>
    </div>
  );
};

export default DropdownPanel;
