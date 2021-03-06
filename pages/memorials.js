import Link from "next/link";
import axios from "axios";
import MemorialsList from "../components/MemorialsList";
import ImageBg from "../components/ImageBg";

const memorials = ({ memorials }) => {
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { past, future } = memorials;

  return (
    <>
      <ImageBg image="/memorials.jpg" height="lg:h-full h-screen">
        <h1 className="text-5xl">Memorials</h1>
        <p className="text-2xl">
          Would you like to host a memorial in your area?
        </p>
        <Link href="mailto:submissions@saytheirnamesmemorials.com?subject=Hosting a Memorial">
          <button className="btn my-5">Email Us</button>
        </Link>
      </ImageBg>
      <section className="p-5">
        {future.length > 0 && (
          <MemorialsList
            headerText="Current and Upcoming Memorials"
            rows={future}
          />
        )}
      </section>
      <section className="p-5">
        {past.length > 0 && (
          <MemorialsList headerText="Past Memorials" rows={past} />
        )}
      </section>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `${process.env.API_URL}/memorials?splitByDate=true`
  );

  const memorials = await res.data;

  return {
    props: {
      memorials,
    },
  };
};

export default memorials;
