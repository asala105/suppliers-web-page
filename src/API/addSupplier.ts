import axios from "axios";
import { Config } from "../enviroment.config";
import { AddSupplierInput, Supplier } from "../common/type";

const backend_url = Config.BACKEND_URL;
export async function addSupplier(data: AddSupplierInput) {
  try {
    const response = await axios.post(`${backend_url}/suppliers`, data);
    return response.data as Supplier[];
  } catch (e) {
    console.log(e);
  }
}
