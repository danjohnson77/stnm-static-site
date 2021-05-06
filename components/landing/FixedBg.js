import { useEffect, useState } from "react";

const FixedBg = ({ images, children }) => {
  const [currentBg, setCurrentBg] = useState(0);

  const handleScroll = (e) => {
    let scrollIndex = 0;
    const scrollPosition = Math.floor(window.scrollY / window.innerHeight);

    scrollPosition > images.length - 1
      ? (scrollIndex = images.length - 1)
      : (scrollIndex = scrollPosition);

    scrollPosition !== currentBg && setCurrentBg(scrollIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="bg-fixed min-w-screen bg-cover bg-center bg-no-repeat bg-animate min-h-screen fade-in"
      style={{ backgroundImage: `url('${images[currentBg]}')` }}
    >
      <div className="bg-overlay"></div>
      <div className="relative z-30 py-10 lg:py-24">{children}</div>
    </div>
  );
};

export default FixedBg;
