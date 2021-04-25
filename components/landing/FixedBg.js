import { useEffect, useState } from "react";
import Image from "next/image";

const FixedBg = ({ images }) => {
  const [currentBg, setCurrentBg] = useState(0);

  const handleScroll = (e) => {
    const scrollPosition = Math.floor(window.scrollY / window.innerHeight);

    scrollPosition !== currentBg && setCurrentBg(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="bg-overlay"></div>
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        {images.map((image, i) => {
          return (
            <div
              key={i}
              className={`${
                currentBg === i ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            >
              <Image src={`/${image}`} layout="fill" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FixedBg;
