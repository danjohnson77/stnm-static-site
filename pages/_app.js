import Layout from "../components/Layout";
import "../styles/globals.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          },
        }}
      >
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
