import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const memorials = ({ memorials }) => {
  const sortMemorials = (memorials) => {
    let past = [];
    let upcoming = [];
    let date = new Date();

    memorials.map((m) => {
      const d = new Date(m.end_date);

      if (d > date) {
        upcoming = [...upcoming, m];
      } else {
        past = [...past, m];
      }
    });

    return { upcoming, past };
  };

  const sortedMemorials = sortMemorials(memorials);

  const dateFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="bg-image">
        <div className="bg-overlay"></div>
        <Image src="/memorials.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="panel w-11/12">
        <h1 className="text-2xl">Current and Upcoming Memorials</h1>
        <div className="grid names-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {sortedMemorials.upcoming.map((m, i) => {
            const { name, id, s3, location, start_date, end_date } = m;

            let sd = new Date(start_date);
            sd = dateFormat.format(sd);

            let ed = new Date(end_date);
            ed = dateFormat.format(ed);

            return (
              <Link href={`/memorial/${id}`} key={i}>
                <div className="flex flex-col justify-start items-center cursor-pointer z-0 p-5 transform hover:scale-105 transition-all min-h-full">
                  <Image src={s3} alt="" width="200" height="200" />
                  <p className="text-xl mt-5">{name}</p>
                  <p className="my-2">{location}</p>
                  <p>{sd}</p>
                  <p>-</p>
                  <p>{ed}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="panel my-5 w-11/12">
        <h1 className="text-2xl">Past Memorials</h1>
        <div className="grid names-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {sortedMemorials.past.map((m, i) => {
            const { name, id, s3, location, start_date, end_date } = m;

            let sd = new Date(start_date);
            sd = dateFormat.format(sd);

            let ed = new Date(end_date);
            ed = dateFormat.format(ed);
            return (
              <Link href={`/memorial/${id}`} key={i}>
                <div className="flex flex-col justify-start items-center cursor-pointer z-0 p-5 transform hover:scale-105 transition-all min-h-full">
                  <Image src={s3} alt="" width="200" height="200" />
                  <p className="text-xl mt-5">{name}</p>
                  <p className="my-2">{location}</p>
                  <p>{sd}</p>
                  <p>-</p>
                  <p>{ed}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(`http://localhost:5000/memorials`);

  const memorials = await res.data;

  return {
    props: {
      memorials,
    },
  };
};

export default memorials;
