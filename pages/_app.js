import { useEffect, useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <Header />
      <Layout route={router.route.replace(/\W/g, "")}>
        {loading ? (
          <Loading />
        ) : (
          <div key={router.route}>
            <Component {...pageProps} />
          </div>
        )}
      </Layout>
    </>
  );
}

export default MyApp;
