import Nav from "./Nav";

import Footer from "./Footer";
import FixedBg from "./landing/FixedBg";

const Layout = ({ children, route }) => {
  let image = route !== "" ? route : "landing";

  return (
    <>
      <Nav />
      <main
        className="font-serif 
       text-white min-h-screen"
      >
        <FixedBg images={[`/${image}.jpg`]}>{children}</FixedBg>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
