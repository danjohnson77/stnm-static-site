import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import MemorialsList from "../components/MemorialsList";

const memorials = ({ memorials }) => {
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="px-5">
        <div className="panel w-11/12 text-center">
          <p>
            Would you like to host a memorial in your area?{" "}
            <Link
              href={`mailto:submissions@saytheirnamesmemorials.com?subject=Hosting a Memorial`}
            >
              Email us at submissions@saytheirnamesmemorials.com
            </Link>
          </p>
        </div>
      </section>
      <section className="p-5">
        {memorials.future.length > 0 && (
          <MemorialsList
            headerText="Current and Upcoming Memorials"
            rows={memorials.future}
          />
        )}
      </section>
      <section className="p-5">
        {memorials.past.length > 0 && (
          <MemorialsList headerText="Past Memorials" rows={memorials.past} />
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
