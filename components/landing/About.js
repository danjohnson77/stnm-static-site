import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  return (
    <section className="bg-transparent flex flex-col justify-center items-center lg:flex-row p-5 scroll-align-start fade-in">
      <div className="flex flex-col lg:flex-row divider divide-y lg:divide-x lg:divide-y-0 items-center w-11/12 lg:py-24">
        <div className="flex flex-col text-center lg:w-6/12 items-center py-5 left-in">
          <Image
            src="/about_landing.jpg"
            width="384"
            height="381"
            alt="Creators Joy and Elise Proctor"
          />

          <p className="mt-5 ">Creators Joy and Elise Proctor</p>
        </div>
        <div className="flex flex-col w-11/12 lg:w-6/12 lg:px-5 justify-center text-center right-in">
          <h1 className="text-5xl my-5">About the Memorial</h1>
          <p>
            The “Say Their Name Memorial” is a nationwide initiative to honor
            Black lives taken by systemic racism and racial injustice. The
            memorial was started in Portland, Oregon on Juneteenth 2020 and has
            been put up in over 25 locations nationwide since then. We manage an
            ongoing submission driven database that includes names, photos and
            bios. We produce traveling memorials for public exhibition as well
            as providing support for communities looking to create grassroots
            memorials in their own neighborhoods. Our aim is to facilitate
            conversation around systemic racism while honoring those whose lives
            have been taken by it.{" "}
          </p>
          <Link href="/info">
            <button className="btn my-5">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
