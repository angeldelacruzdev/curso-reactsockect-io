import axios from "axios";

export const getUltimos = async () => {
  const resp = await axios.get("http://localhost:8080/ultimos");
  return resp;
};
