import ImageBg from "../components/ImageBg";

const action = () => {
  return (
    <>
      <ImageBg image="/action.jpg" height="lg:h-full">
        <h1 className="text-5xl p-5 text-center ">Take Action</h1>
      </ImageBg>

      <section className="flex flex-col lg:flex-row divider divide-y lg:divide-x lg:divide-y-0 items-center w-11/12 mx-auto lg:py-24">
        <div className="flex flex-col w-11/12 lg:w-6/12 lg:px-5 justify-center text-center flex-grow">
          <h1 className="text-5xl my-5">Volunteer Opportunities</h1>
          <p>
            Our website and memorials are run entirely by volunteers. The
            following list includes assistance opportunities necessary to
            continue our work. Must live in the United States.
          </p>
          <ul className="p-5 grid grid-cols-2">
            <li>Attorney</li>
            <li>Accountant</li>
            <li>Grant Writing</li>
            <li>PR</li>
            <li>Web Help</li>
            <li>Secretary</li>
            <li>Volunteer Manager</li>
            <li>Admin Assistant</li>
            <li>HR Assistance</li>
          </ul>
          <a href="mailto:info@saytheirnamesmemorials.com?subject=I Want To Volunteer">
            <button className="btn my-5">Contact Us</button>
          </a>
        </div>
        <div className="flex flex-col w-11/12 lg:w-6/12 lg:px-5 justify-between text-center flex-grow h-full">
          <h1 className="text-5xl my-5">Support Us</h1>
          <p>
            Your donation supports website and database maintenance, materials
            for new memorials, and helps finance the logistical and
            administrative costs to run our volunteer non-profit. Thank you for
            your charitable donation.
          </p>

          <a href="mailto:info@saytheirnamesmemorials.com?subject=I Want To Volunteer">
            <button className="btn my-5">Click to Donate</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default action;
