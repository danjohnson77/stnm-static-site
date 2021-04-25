import Link from "next/link";
import Image from "next/image";
import Slidebox from "../Slidebox";

const SubmitMemorial = ({ memorials }) => {
  console.log("props", memorials);

  return (
    <section className="min-h-screen bg-transparent flex flex-col justify-center items-center p-5 scroll-align-start ">
      <div className="panel text-center w-11/12 flex divide-x  divider">
        <div className={`${memorials ? "w-6/12" : "w-11/12"} p-5`}>
          <h1 className="text-3xl mb-5">
            Create a memorial in your community.
          </h1>
          <p>
            We provide a database of names, photos and information to
            communities wanting to put up temporary memorials on fences, windows
            and walls in their own neighborhoods. Our goal is to get a memorial
            in every community across the country; a memorial created for and by
            your community. Contact us for free access to the files. All local
            organizers must agree to complete liability responsibility &
            enforcement of Covid-19 restrictions. For information on our
            traveling memorials, please visit the Tour page. Please note, at
            this time we are operated 100% by volunteers. Please allow 2-3
            business days for response.
          </p>
          <Link href="mailto:info@saytheirnamesmemorials.com?subject=I want to make a local Memorial">
            <button className="btn my-5">Request Info</button>
          </Link>
        </div>
        {memorials && (
          <div className="w-6/12 p-5">
            <h1 className="text-3xl mb-5">Upcoming Memorials</h1>
            <div className="flex justify-center">
              <Slidebox
                keys={{
                  img: "s3",
                  mainText: "name",
                  subText: [
                    "location",
                    [
                      { key: "start_date", isKey: true },
                      "-",
                      { key: "end_date", isKey: true },
                    ],
                  ],
                }}
                data={memorials}
                width="300"
                height="300"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubmitMemorial;
