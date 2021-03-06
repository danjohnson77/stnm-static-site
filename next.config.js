require("dotenv").config();

module.exports = {
  images: {
    domains: [
      "stnm-lives-images-895331386843.s3-accesspoint.us-west-2.amazonaws.com",
      "stnm-memorials-images-895331386843.s3-accesspoint.us-west-2.amazonaws.com",
      "stnm-news-images-895331386843.s3-accesspoint.us-west-2.amazonaws.com",
      "scontent-sea1-1.cdninstagram.com",
    ],
  },
  env: {
    MAPS_KEY: process.env.GOOGLE_MAPS_API_KEY,
    PLACES_KEY: process.env.GOOGLE_PLACES_API_KEY,
    API_URL: process.env.API_URL,
    IG_TOKEN: process.env.IG_TOKEN,
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
};
