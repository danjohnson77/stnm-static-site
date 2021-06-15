import Link from "next/link";
import ImageBg from "../ImageBg";

const Hero = () => {
  return (
    <ImageBg image="/landing.jpg" height="min-h-screen">
      <div className="w-11/12 bg-opacity-50 flex flex-col justify-center text-center z-20 text-white ">
        <p className="text-4xl lg:text-5xl mb-5">
          “Every day when we wake up and look in the mirror, we see a reflection
          of the parents who were taken from us. We are their legacies.”
        </p>
        <p className="text-lg text-right">
          - Montinque Monroe, daughter of Paul Monroe
        </p>
        <Link href="/names">
          <button className="btn text-xl mt-12 btn-fade-in">
            Names & Tributes
          </button>
        </Link>
      </div>
    </ImageBg>
  );
};

export default Hero;
