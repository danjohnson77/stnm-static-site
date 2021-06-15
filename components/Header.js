import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <link
        rel="preconnect"
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossOrigin="anonymous"
      />

      <meta
        name="keywords"
        content="Say Their Names, black lives matter, blm"
      />
      <meta
        name="description"
        content="A memorial to honor Black lives lost to racial injustice and systemic racism."
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Say Their Names Memorials</title>
    </Head>
  );
};

export default Header;
