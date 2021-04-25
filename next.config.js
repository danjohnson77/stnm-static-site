require("dotenv").config();

module.exports = {
  images: {
    domains: [
      "stnm-lives-images-895331386843.s3-accesspoint.us-west-2.amazonaws.com",
      "stnm-memorials-images-895331386843.s3-accesspoint.us-west-2.amazonaws.com",
    ],
  },
  env: {
    MAPS_KEY: process.env.GOOGLE_MAPS_API_KEY,
    PLACES_KEY: process.env.GOOGLE_PLACES_API_KEY,
  },
};
