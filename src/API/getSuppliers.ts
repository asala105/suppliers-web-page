import axios from "axios";
import { Config } from "../enviroment.config";
import { Supplier } from "../common/type";

const backend_url = Config.BACKEND_URL;
export async function getSuppliers() {
  try {
    const response = await axios.get(`${backend_url}/suppliers`);
    return response.data as Supplier[];
  } catch (e) {
    console.log(e);
  }
}
