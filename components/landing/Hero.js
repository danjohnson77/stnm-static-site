const Hero = () => {
  return (
    <section
      className="h-screen bg-landing bg-cover bg-center flex justify-center"
      onScroll={() => console.log("scrolling")}
    >
      <div className="bg-darkBrown w-screen bg-opacity-50 flex flex-col justify-center text-white text-6xl text-center">
        <h3>
          A memorial to honor Black lives lost to racial injustice and systemic
          racism.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
