import Link from "next/link";
import ImageBg from "../components/ImageBg";

const action = () => {
  return (
    <>
      <ImageBg image="/action.jpg" height="lg:h-full">
        <h1 className="text-5xl p-5 text-center ">Take Action</h1>
      </ImageBg>
      <section className="bg-transparent flex flex-col  items-center  px-5 min-h-screen">
        <div className="w-full flex flex-col items-center divide-y divider ">
          <h1 className="text-3xl p-5 text-center">Volunteer Opportunities</h1>
          <p className="p-5">
            Our website & memorials are run entirely by volunteers. We are in
            need of professional and administrative assistance to continue our
            work. Must live in the United States.
          </p>
          <div className="flex divide-x divider w-full text-center">
            <div className="w-6/12 flex flex-col justify-center items-center p-5 h-full">
              <h1 className="text-2xl">Professional</h1>
              <ul className="p-5">
                <li>Attorney</li>
                <li>Accountant</li>
                <li>Grant Writing</li>
                <li>PR</li>
                <li>Web Help</li>
              </ul>
            </div>
            <div className="w-6/12 flex flex-col justify-center items-center p-5 h-full">
              <h1 className="text-2xl">Administrative</h1>
              <ul className="p-5">
                <li>Secretary</li>
                <li>Volunteer Manager</li>
                <li>Admin Assistant</li>
                <li>HR Assistance</li>
              </ul>
            </div>
          </div>
          <Link href="mailto:info@saytheirnamesmemorials.com?subject=I Want To Volunteer">
            <button className="btn my-5">Contact Us</button>
          </Link>
        </div>
        <div className="panel w-full flex flex-col items-center divide-y divider mt-10">
          <h1 className="text-3xl p-5">Support Us</h1>
          <p className="p-5">
            Your donation supports out of pocket expenses to maintain this
            website and database, covers materials for new memorials and helps
            finance the logistical and administrative costs to run our
            non-profit. This memorial is run 100% by volunteers.
          </p>
          <Link href="/info">
            <button className="btn my-5">Donate Now</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default action;
