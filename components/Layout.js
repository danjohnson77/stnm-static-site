import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children, route }) => {
  return (
    <>
      <Nav />
      <main
        className="font-serif 
        min-h-screen"
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
