import axios from "axios";

const baseUrl = "http://localhost:8080";

export const healthCheck = async (): Promise<boolean> => {
  try {
    const resp = await axios.get(`${baseUrl}/healthy`);
    return resp.status === 200;
  } catch (err) {
    console.error("failed to check api health with error", err);
    return false;
  }
};
