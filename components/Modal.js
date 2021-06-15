import { useEffect, useState } from "react";
import Link from "next/link";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const { sessionStorage } = window;
    sessionStorage.getItem("disclaimerAccepted") !== "y" && setIsOpen(true);
  }, []);

  const handleAcceptClick = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("disclaimerAccepted", "y");
    }
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed h-screen w-screen bg-black bg-opacity-75 z-50 inset-0 ${
        !isOpen && "hidden"
      } flex items-center`}
    >
      <dialog className="w-11/12 lg:w-6/12 mx-auto flex flex-col justify-center bg-white">
        {children}{" "}
        <button className="btn my-5" onClick={handleAcceptClick}>
          I understand
        </button>
        <Link href="/">
          <button className="btn">Return to Home</button>
        </Link>
      </dialog>
    </div>
  );
};

export default Modal;
