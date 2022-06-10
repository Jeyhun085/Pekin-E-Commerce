import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { config } from './token.js';
const urls = {
    sectionUrl: "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/450ea93d-7d1a-11ec-0a80-07540034ad7a",
    modelUrl: "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/2bcc7ebb-78f0-11ec-0a80-0c3000047732",
    filterUrl: "https://online.moysklad.ru/api/remap/1.2/entity/assortment?filter"
}

const app = express()

app.use(express.static('public'));
app.use(express.json());
app.use(cors())
app.set('view engine', 'ejs');
app.post('/',express.static('public'), async (req,res) =>{
    const model = req.body.model
    const section = req.body.section
    console.log(`${urls.filterUrl}=${urls.modelUrl}=${model};${urls.sectionUrl}=${section}`);
    const getItems = async () => {
        try {
            const response = await axios.get(`${urls.filterUrl}=${urls.modelUrl}~${model};${urls.sectionUrl}=${section}`, config)
            return response.data.rows
        }
        catch (err) {
            console.error(err)
        }
      
      }
      
     
      const items = await getItems()
      const data = items.map(item=>{
        return {
            article: item.article,
            name : item.name,
            price : item.salePrices[0].value /100
        }
      })
     
      
      

    res.send(data);
})



app.listen(8080);