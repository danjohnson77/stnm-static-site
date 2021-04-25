import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen bg-transparent flex justify-center z-10 scroll-align-start">
      <div className="w-11/12 bg-opacity-50 flex flex-col justify-center  text-6xl text-center">
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.3,
              },
            },
          }}
        >
          A memorial to honor Black lives lost to racial injustice and systemic
          racism.
        </motion.h3>
      </div>
    </section>
  );
};

export default Hero;
