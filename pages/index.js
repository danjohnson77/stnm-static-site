import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/landing/Hero";

import SubmitMemorial from "../components/landing/SubmitMemorial";
import About from "../components/landing/About";
import SubmitName from "../components/landing/SubmitName";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home({ memorials }) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const [init, setInit] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInit(false);
    }, 2000);
  }, []);

  return (
    <div className={`relative transition-colors duration-700 text-black`}>
      <Hero />
      <About />
      <SubmitName />
      <SubmitMemorial memorials={memorials && memorials} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `${process.env.API_URL}/memorials?splitByDate=true`
  );

  const memorials = await res.data.future;

  return {
    props: {
      memorials,
    },
  };
};
