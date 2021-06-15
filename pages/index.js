import Hero from "../components/landing/Hero";

import SubmitMemorial from "../components/landing/SubmitMemorial";
import About from "../components/landing/About";
import SubmitName from "../components/landing/SubmitName";
import InstagramPanel from "../components/landing/InstagramPanel";

export default function Home() {
  return (
    <div className={`relative transition-colors duration-700 text-black`}>
      <Hero />
      <About />
      <SubmitName />
      <SubmitMemorial />
      <InstagramPanel />
    </div>
  );
}
