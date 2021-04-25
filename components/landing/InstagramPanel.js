const InstagramPanel = () => {
  return (
    <section className="min-h-screen bg-transparent flex flex-col justify-center items-center p-5 scroll-align-start ">
      <div className="panel text-center w-11/12">
        <h1 className="text-5xl mb-5">@saytheirnamesmemorials</h1>
      </div>
    </section>
  );
};

// export const getServerSideProps = async (context) => {
//   const res = await axios.get(
//     `https://www.instagram.com/saytheirnamesmemorial/?__a=1`
//   );

//   const igData = await res;
//   console.log(igData);
//   return {
//     props: {
//       igData,
//     },
//   };
// };

export default InstagramPanel;
