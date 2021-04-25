import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Nav />
      <main
        className="min-w-screen min-h-screen font-serif 
       text-white"
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
