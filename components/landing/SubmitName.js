import { useEffect } from "react";
import Link from "next/link";
import ImageBg from "../ImageBg";

const SubmitName = ({ gsap }) => {
  // useEffect(() => {
  //   gsap.from(".fade-in", {
  //     scrollTrigger: ".fade-in",
  //     opacity: 0,
  //     duration: 3,
  //   });
  // }, []);
  return (
    <ImageBg image="/memorials.jpg" height="h-full">
      <div className="lg:w-8/12">
        <h1 className="text-5xl mb-5">Submit a name to the memorial</h1>
        <p>
          Our database is not exhaustive and we need your help to learn the
          names and hear the stories of loved ones and community members who are
          not on our list. Click here for our current list of names which have
          been compiled to highlight the gravity of systemic racism on the Black
          community. It is not meant to be exclusionary, however names included
          must represent this cause.
        </p>
        <Link href="mailto:submissions@saytheirnamesmemorials.com?subject=Name Submission">
          <button className="btn my-5">Submit Now</button>
        </Link>
      </div>
    </ImageBg>
  );
};

export default SubmitName;
