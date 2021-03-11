import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Nav />
      <main
        className="flex min-w-screen flex-col justify-center font-serif bg-darkBrown
      min-h-screen text-white"
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
