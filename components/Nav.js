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
    <nav
      className="fixed min-w-full z-50"
      onClick={() => open && setOpen(!open)}
    >
      <div
        className="w-8 cursor-pointer bg-black bg-opacity-50 rounded-md lg:hidden fixed m-5 text-center"
        onClick={() => setOpen(!open)}
      >
        <i className={`fas ${open ? "fa-times" : "fa-bars"} text-white `}></i>
      </div>

      <div
        className={`text-white text-2xl text-center font-serif justify-center bg-transparent bg-opacity-75  ${
          open
            ? "flex flex-col h-screen bg-black bg-opacity-100 opacity-100"
            : "hidden"
        } lg:flex lg:justify-between lg:p-5 ${shadeNav && "bg-black"}`}
      >
        <h1 className="cursor-pointer nav-item">
          <Link href="/">{open ? "Home" : "Say Their Names Memorial"}</Link>
        </h1>
        <ul className="flex min-w-screen flex-col lg:flex-row">
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/names">Names</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/memorials">Memorials</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/info">About Us</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/action">Action</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link href="/media">Media</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <a
              href="https://www.instagram.com/saytheirnamesmemorial"
              target="_blank"
              rel="noopener"
              aria-label="Link to instagram page"
            >
              <i className="fab fa-instagram cursor-pointer"></i>
            </a>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <a
              href="https://twitter.com/Alliance4BL"
              target="_blank"
              rel="noopener"
              aria-label="Link to twitter page"
            >
              <i className="fab fa-twitter cursor-pointer"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
