import express from "express";
import axios from "axios";
import cors from "cors";
import mongoose from "mongoose";
import { config, mongoURI } from "./token.js";

const urls = {
  sectionUrl:
    "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/450ea93d-7d1a-11ec-0a80-07540034ad7a",
  modelUrl:
    "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/2bcc7ebb-78f0-11ec-0a80-0c3000047732",
  filterUrl:
    "https://online.moysklad.ru/api/remap/1.2/entity/assortment?filter",
};

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.post("/", express.static("public"), async (req, res) => {
  const model = req.body.model;
  const section = req.body.section;
  if (model === "") {
    res.send(null);
  } else {
    const getItems = async () => {
      try {
        const response = await axios.get(
          `${urls.filterUrl}=${urls.modelUrl}~${model};${urls.sectionUrl}=${section}`,
          config
        );
        return response.data.rows;
      } catch (err) {
        console.error(err);
      }
    };

    const items = await getItems();
    const data = items.map((item) => {
      const officialName =
        item.attributes.find(
          (attribute) => attribute.id === "76d741ff-bce9-11ec-0a80-0b4000127eff"
        ) === undefined
          ? "Adi heleki yoxdu"
          : item.attributes.find(
              (attribute) =>
                attribute.id === "76d741ff-bce9-11ec-0a80-0b4000127eff"
            ).value;

      return {
        article: item.article,
        name: officialName,
        price: item.salePrices[0].value / 100,
        available: item.stock > 0 ? true : false,
        inTransit: item.inTransit > 0 ? true : false,
      };
    });
    res.send(data);
  }
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ordersSchema = new Schema({
  author: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  city: String,
  items: String,
  phoneNumber: Number,
  date: Date,
});

app.post("/checkout", async (req, res) => {

  await mongoose.connect(mongoURI);

  const Order = mongoose.model("Order", ordersSchema);

  const newOrder = new Order({
    firstName: JSON.stringify(req.body.firstName),
    lastName: JSON.stringify(req.body.lastName),
    email: JSON.stringify(req.body.email),
    city: JSON.stringify(req.body.address),
    phoneNumber: req.body.phone,
    items: JSON.stringify(req.body.mehsullar),
    date: new Date(),
  });

  newOrder.save();
});

app.listen(8080);
