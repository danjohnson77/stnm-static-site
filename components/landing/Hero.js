import Link from "next/link";
import ImageBg from "../ImageBg";

const Hero = () => {
  return (
    <ImageBg image="/landing.jpg" height="min-h-screen">
      <div className="w-11/12 bg-opacity-50 flex flex-col justify-center  text-5xl lg:text-6xl text-center z-20 text-white ">
        <h1 className="">
          A memorial to honor Black lives lost to racial injustice and systemic
          racism.
        </h1>
        <Link href="/names">
          <button className="btn text-xl mt-12 btn-fade-in">
            Visit the Gallery
          </button>
        </Link>
      </div>
    </ImageBg>
  );
};

export default Hero;
