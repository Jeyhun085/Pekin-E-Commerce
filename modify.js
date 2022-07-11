import { config } from "./token.js";
import axios from "axios";

async function getFalseItems()  {
  try {
    const response = await axios.get(
      "https://online.moysklad.ru/api/remap/1.2/entity/assortment?filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/5b29cda4-f8f9-11ec-0a80-082a000361f1=false",
      config
    );
    return response.data.rows;
  } catch (err) {
    console.error(err);
  }
};

const falseItems = await getFalseItems()

const falseItemsIDs = falseItems.map((item)=> {
  const data = {
    name: item.name,
    id: item.id,
    modValue: item.attributes === undefined ? "" : (item.attributes[0].value ? item.attributes[0].value : "")
  }
return data
})

console.log(falseItemsIDs.length);
var index = 1
for (const item of falseItemsIDs) {


  const newName = `${item.name} ${item.modValue}`
  const data = {
    name: newName,
    attributes: [
      {
        meta: {
          href: "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/5b29cda4-f8f9-11ec-0a80-082a000361f1",
          type: "attributemetadata",
          mediaType: "application/json"
        },
        value: true
      }
    ]
  }
 
  
    await axios.put(
      `https://online.moysklad.ru/api/remap/1.2/entity/product/${item.id}`,
      data,
      config
    );
    console.log(`Index: ${index} ID: ${item.id} NewName: ${newName}`);
  index++
  

}