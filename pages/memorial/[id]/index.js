import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const memorial = ({ entry }) => {
  const {
    s3,
    name,
    sponsors,
    organizers,
    location,
    start_date,
    end_date,
    media,
  } = entry;
  return (
    <>
      <div className="bg-image">
        <div className="bg-overlay"></div>
        <Image src={s3} layout="fill" objectFit="cover" />
      </div>
      <section>
        <div className="panel w-11/12">
          <h1 className="text-3xl">{name}</h1>
          <p>{location}</p>
          <p>
            {start_date} - {end_date}
          </p>
        </div>
      </section>
      <section className="">
        <div className="panel w-11/12 grid grid-cols-3 justify-around my-5">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Sponsors:</h1>
            <ul>
              {sponsors.map((s, i) => {
                return <li key={i}>{s.name}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Organizers:</h1>
            <ul>
              {organizers.map((s, i) => {
                return <li key={i}>{s.name}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">News and Media:</h1>
            <ul>
              {media.map((s, i) => {
                return <li key={i}>{s.title}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await axios.get(
    `http://localhost:5000/memorials/${context.params.id}`
  );

  const entry = await res.data;

  return {
    props: {
      entry: entry.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(`http://localhost:5000/memorials`);

  const entries = await res.data;

  const ids = entries.map((entry) => {
    return entry.id;
  });

  const paths = ids.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default memorial;
