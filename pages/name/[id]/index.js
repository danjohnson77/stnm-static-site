import axios from "axios";
import { useEffect, useState } from "react";

const name = ({ entry }) => {
  const [bio, setBio] = useState("");

  const { biography, s3, name, birth_year, incident_year } = entry;

  useEffect(() => {
    const decodeHTML = function (html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    };
    const html = decodeHTML(biography);

    setBio(html);
  }, []);

  return (
    <section className="py-24">
      <div className="grid grid-cols-2">
        <div className="flex content-center items-center  flex-col p-5">
          <img src={s3} alt="" className="object-contain" />

          <h1 className="text-4xl mt-5">{name}</h1>
          <p className="text-lg">
            {birth_year} - {incident_year}
          </p>
        </div>
        <div className="p-5" dangerouslySetInnerHTML={{ __html: bio }}></div>
      </div>
    </section>
  );
};

export const getStaticProps = async (context) => {
  const res = await axios.get(
    `http://localhost:5000/lives/${context.params.id}`
  );

  const entry = await res.data;

  return {
    props: {
      entry: entry.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(`http://localhost:5000/lives`);

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

export default name;
