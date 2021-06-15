import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black  text-white font-serif min-w-screen flex relative z-40 ">
      <div className="flex w-full p-5 divide-x divider">
        <div className="flex items-end w-6/12">
          <p>Copyright 2021 Alliance For Black Legacy</p>
        </div>

        <div className="flex w-6/12  justify-evenly">
          <ul>
            <li>
              <Link href="/names" className="cursor-pointer">
                Names
              </Link>
            </li>
            <li>
              <Link href="/memorials">Memorials</Link>
            </li>
            <li>
              <Link href="/info">About Us</Link>
            </li>
            <li>
              <Link href="/action">Action</Link>
            </li>
            <li>
              <Link href="/media">Media</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="mailto:submissions@saytheirnamesmemorials.com?subject=Press Inquiry">
                Press Inquiries
              </Link>
            </li>
            <li>
              <Link href="mailto:submissions@saytheirnamesmemorials.com?subject=Website Contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
