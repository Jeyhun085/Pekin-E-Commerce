import axios from 'axios';
import { config } from './client/token.js';

 const getItems = async () => {
  try {
      const response = await axios.get("https://online.moysklad.ru/api/remap/1.2/entity/assortment?filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/2bcc7ebb-78f0-11ec-0a80-0c3000047732~h2", config)
      return response.data.rows
  }
  catch (err) {
      console.error(err)
  }

}

const items = async () => {
  return await getItems()
}

console.log(items.length);





export default items;