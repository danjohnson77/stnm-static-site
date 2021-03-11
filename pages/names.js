import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function names({ names }) {
  return (
    <section className="min-h-screen w-screen bg-darkBrown text-white flex flex-col justify-center items-center py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-11/12 justify-center items-center">
        {names &&
          names.map((n, index) => {
            const { name, birth_year, incident_year, id, s3 } = n;
            return (
              <div
                className="flex flex-col justify-center items-center cursor-pointer z-0"
                key={index}
              >
                <Image src={s3} alt="" width="200" height="300" />
                <Link href={`/name/${id}`}>
                  <p className="text-xl">{name}</p>
                </Link>
                <p>{`${birth_year || "????"} - ${incident_year || "????"}`}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get(
    `http://localhost:5000/lives?select=id,name,birth_year,incident_year,img_filename`
  );

  const names = await res.data;

  return {
    props: {
      names,
    },
  };
};
