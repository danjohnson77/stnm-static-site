import axios from "axios";

export default async (req, res) => {
  const { input } = req.query;

  const loc = await axios.post(`http://localhost:5000/location`, { input });

  res.status(200).json(loc.data);
};
