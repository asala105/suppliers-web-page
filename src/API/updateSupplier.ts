import axios from "axios";
import { Config } from "../enviroment.config";
import { EditSupplierInput, Supplier } from "../common/type";

const backend_url = Config.BACKEND_URL;
export async function updateSupplier(data: EditSupplierInput) {
  try {
    const response = await axios.post(`${backend_url}/update-supplier`, {
      data
    });
    return response.data as Supplier[];
  } catch (e) {
    console.log(e);
    return [];
  }
}
