import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/landing/Hero";

import SubmitMemorial from "../components/landing/SubmitMemorial";
import About from "../components/landing/About";
import SubmitName from "../components/landing/SubmitName";
import InstagramPanel from "../components/landing/InstagramPanel";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home({ memorials, igData }) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  return (
    <div className={`relative transition-colors duration-700 text-black`}>
      <Hero />
      <About />
      <SubmitName />
      <SubmitMemorial memorials={memorials && memorials} />
      <InstagramPanel igData={igData} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `${process.env.API_URL}/memorials?splitByDate=true`
  );
  const igRes = await axios.get(
    `https://graph.instagram.com/me/media?access_token=${process.env.IG_TOKEN}&fields=media_url,media_type,caption,permalink&limit=8`
  );
  const memorials = await res.data.future;

  const igData = await igRes.data;

  return {
    props: {
      memorials,
      igData,
    },
  };
};
