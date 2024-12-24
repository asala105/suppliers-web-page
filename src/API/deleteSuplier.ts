import axios from "axios";
import { Config } from "../enviroment.config";

const backend_url = Config.BACKEND_URL;
export async function deleteSupplier(id: string) {
  try {
    const response = await axios.delete(`${backend_url}/supplier/${id}`);
    return response.status === 200;
  } catch (e) {
    console.log(e);
    return false;
  }
}
