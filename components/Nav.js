import Link from "next/link";
import { useState, useEffect } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [shadeNav, setShadeNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = (e) => {
    window.scrollY > window.innerHeight - 40
      ? setShadeNav(true)
      : setShadeNav(false);
  };

  return (
    <nav className="fixed lg:top-0 z-50">
      <div
        className="w-12 h-12 cursor-pointer bg-black  rounded-md lg:hidden fixed m-5"
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="10"
            y1="15"
            x2="90"
            y2={`${open ? "85" : "15"}`}
            stroke="white"
            strokeWidth="4px"
          />
          <line
            x1="10"
            y1="50"
            x2="90"
            y2="50
        "
            stroke="white"
            strokeWidth="4px"
            style={{ display: open && "none" }}
          />
          <line
            x1="10"
            y2={`${open ? "15" : "85"}`}
            x2="90"
            y1="85
        "
            stroke="white"
            strokeWidth="4px"
          />
        </svg>
      </div>

      <div
        className={`text-white text-2xl text-center font-serif w-screen justify-center bg-black ${
          open ? "flex flex-col h-screen bg-black" : "hidden"
        } lg:flex lg:justify-between lg:p-5 ${shadeNav && "bg-black"}`}
      >
        <h1 className={`${open && "hidden"}`}>Say Their Names</h1>
        <ul className="flex min-w-screen flex-col lg:flex-row">
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/names">Names</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/memorials">Memorials</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/info">Info</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/action">Action</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/media">Media</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="https://www.instagram.com/saytheirnamesmemorial">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
