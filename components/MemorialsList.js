import Link from "next/link";
import renderImage from "../utils/renderImage";

const MemorialsList = ({ headerText, rows }) => {
  return (
    <div className="panel w-11/12">
      <h1 className="text-2xl text-center lg:text-left">{headerText}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {rows.map((m, i) => {
          const {
            name,
            id,
            s3,
            location,
            start_date_display,
            end_date_display,
          } = m;

          return (
            <Link href={`/memorial/${id}`} key={i}>
              <div className="flex flex-col justify-start items-center cursor-pointer text-center z-0 p-5 transform hover:scale-105 transition-all lg:min-h-full">
                <div className="w-24 h-24 overflow-hidden">
                  {renderImage(s3, "/memorial_default.jpg")}
                </div>

                <p className="text-xl mt-5">{name}</p>

                <p>
                  {start_date_display} - {end_date_display}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MemorialsList;
