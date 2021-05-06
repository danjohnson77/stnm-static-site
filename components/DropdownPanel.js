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
        <h3 className="text-xl text-center">{heading}</h3>
        <Arrow direction={startOpen ? "up" : "down"} onClick={handleClick} />
      </div>
      <div className={``}>{open && children}</div>
    </div>
  );
};

export default DropdownPanel;
