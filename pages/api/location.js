import axios from "axios";

export default async (req, res) => {
  const { input } = req.query;

  const loc = await axios.post(`${process.env.API_URL}/location`, { input });

  res.status(200).json(loc.data);
};
