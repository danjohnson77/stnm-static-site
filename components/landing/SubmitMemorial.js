import Link from "next/link";
import Image from "next/image";

const SubmitMemorial = ({ memorials }) => {
  return (
    <section className="bg-transparent flex flex-col justify-center items-center p-5 scroll-align-start">
      <div className="panel text-center w-11/12 flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0 divider items-stretch">
        <div className={`${memorials ? "lg:w-6/12" : "w-11/12"} p-5`}>
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
          <div className="lg:w-6/12 w-11/12 p-5 flex flex-col divide-y divider  lg:justify-between">
            <h1 className="text-3xl mb-5">Upcoming Memorials</h1>
            <div className="flex flex-col items-center justify-center divide-y divider h-full">
              {memorials.map((m, i) => {
                const {
                  s3,
                  name,
                  location,
                  start_date_display,
                  end_date_display,
                  id,
                } = m;
                return (
                  <Link href={`/memorial/${id}`} key={i}>
                    <div className="flex w-full flex-col  lg:flex-row cursor-pointer justify-center align-center items-center">
                      <div className="py-5">
                        <Image src={s3} width="75" height="75" />
                      </div>
                      <div className="flex flex-col pb-5 w-full">
                        <h3 className="text-2xl">{name}</h3>
                        <p>{location}</p>
                        <p>
                          {start_date_display} - {end_date_display}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <Link href="/memorials">
              <button className="btn">See All Memorials</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubmitMemorial;
