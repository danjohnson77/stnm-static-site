import Image from "next/image";
import ImageBg from "../components/ImageBg";

const info = () => {
  return (
    <>
      <ImageBg image="/info.jpg">
        <h1 className="text-5xl mb-5">About Us</h1>
      </ImageBg>
      <section className="bg-transparent flex flex-col justify-center items-center p-12">
        <div className="flex flex-col lg:flex-row divider divide-y lg:divide-x lg:divide-y-0 items-center">
          <div className="flex flex-col text-center w-11/12 lg:w-6/12 items-center py-5">
            <div className="shadow-xl w-max">
              <Image src="/about_landing.jpg" width="300" height="300" />
            </div>
            <p className="mt-5">Creators Joy and Elise Proctor</p>
          </div>
          <div className="flex flex-col p-5 w-11/12 lg:w-6/12 justify-center text-center ">
            <h1 className="text-5xl mb-5">About the Memorial</h1>
            <p>
              The “Say Their Name Memorial” is a nationwide initiative to honor
              Black lives taken by systemic racism and racial injustice. The
              memorial was started in Portland, Oregon on Juneteenth 2020 and
              has been put up in over 25 locations nationwide since then. We
              manage an ongoing submission driven database that includes names,
              photos and bios. We produce traveling memorials for public
              exhibition as well as providing support for communities looking to
              create grassroots memorials in their own neighborhoods. Our aim is
              to facilitate conversation around systemic racism while honoring
              those whose lives have been taken by it.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default info;
