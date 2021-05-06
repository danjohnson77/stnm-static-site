import { gsap } from "gsap";
import Link from "next/link";
import { useEffect } from "react";

const Hero = () => {
  // const tl = gsap.timeline({ repeat: 0 });
  // useEffect(() => {
  //   tl.from(".hero-bg-animate", {
  //     backgroundColor: "#ffffff",
  //     color: "black",
  //     duration: 1,
  //     delay: 2,
  //   });

  //   tl.from(".btn-fade-in", {
  //     opacity: 0,

  //     duration: 0.5,
  //     ease: "circ.out",
  //   });
  // }, []);
  return (
    <section className="h-screen bg-transparent flex justify-center z-10 scroll-align-start hero-bg-animate">
      <div className="w-11/12 bg-opacity-50 flex flex-col justify-center  text-5xl lg:text-6xl text-center">
        <h3 className="fade-in">
          A memorial to honor Black lives lost to racial injustice and systemic
          racism.
        </h3>
        <Link href="/names">
          <button className="btn text-xl mt-12 btn-fade-in">
            Visit the Gallery
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
