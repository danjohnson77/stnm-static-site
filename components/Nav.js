import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [shadeNav, setShadeNav] = useState(
    router.route === "/name/[id]" ? true : false
  );

  useEffect(() => {
    router.route !== "/name/[id]" &&
      window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = (e) => {
    window.scrollY > 40 ? setShadeNav(true) : setShadeNav(false);
  };

  return (
    <nav className="fixed min-w-full z-50">
      <div
        className="w-8 cursor-pointer bg-black bg-opacity-50 rounded-md lg:hidden fixed m-5"
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
        className={`text-white transition-colors duration-500 text-2xl text-center font-serif justify-center bg-transparent bg-opacity-75 ${
          open ? "flex flex-col h-screen bg-black bg-opacity-100" : "hidden"
        } lg:flex lg:justify-between lg:p-5 ${shadeNav && "bg-black"}`}
      >
        <h1 className={`${open && "hidden"} 'cursor-pointer'`}>
          <Link href="/">Say Their Names Memorial</Link>
        </h1>
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
              <i className="fab fa-instagram cursor-pointer"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
