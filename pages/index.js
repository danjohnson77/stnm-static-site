import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Hero from "../components/landing/Hero";
import News from "../components/landing/News";
import SubmitMemorial from "../components/landing/SubmitMemorial";
import About from "../components/landing/About";
import SubmitName from "../components/landing/SubmitName";
import FixedBg from "../components/landing/FixedBg";
import InstagramPanel from "../components/landing/InstagramPanel";

export default function Home({ memorials }) {
  const images = [
    "landing_0.jpg",
    "landing_1.jpg",
    "landing_2.jpg",
    "landing_3.jpg",
  ];

  const [init, setInit] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInit(false);
    }, 2000);
  }, []);

  return (
    <>
      <FixedBg images={images} />

      <div
        className={`relative z-30 transition-colors duration-700 ${
          init ? "bg-white text-black" : "bg-transparent text-lightBrown"
        }`}
      >
        <Hero />
        {!init && (
          <>
            {" "}
            {/* <News /> */}
            <About />
            <SubmitName /> <SubmitMemorial memorials={memorials} />{" "}
            <InstagramPanel />
          </>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `http://localhost:5000/memorials?splitByDate=true`
  );

  const memorials = await res.data.future;

  return {
    props: {
      memorials,
    },
  };
};
