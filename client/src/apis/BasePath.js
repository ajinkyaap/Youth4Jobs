import axios from "axios";

export default axios.create({
  baseURL: "https://youth4-jobs-server.vercel.app/api/v1",
});
