const express = require("express");
const cors = require("cors");
const { response, homeResponse } = require("./response");
const {
  dFurniture,
  dProfile,
  dKategory,
  dSponsor,
  dTim,
  dCostPerCategory,
  dMainContent,
} = require("./data");
const app = express();

app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  homeResponse(200, res);
});

app.get("/data", (req, res) => {
  response(200, dFurniture, "Data sent successfully", res);
});

app.get("/data/type/:type", (req, res) => {
  const type = req.params.type;
  const data = dFurniture.filter((furniture) => furniture.type == type);

  response(200, data, `Data with type '${type}' sent successfully`, res);
});

app.get("/data/product/:id", (req, res) => {
  const id = req.params.id;
  const data = dFurniture.filter((furniture) => furniture.id == id);

  response(200, data, `Data with id '${id}' sent successfully`, res);
});

app.get("/kategory", (req, res) => {
  console.log(dKategory);
  response(200, dKategory, "Data sent successfully", res);
});

app.get("/sponsor", (req, res) => {
  response(200, dSponsor, "Data sent successfully", res);
});

app.get("/tim", (req, res) => {
  response(200, dTim, "Data sent successfully", res);
});

app.get("/content", (req, res) => {
  response(200, dMainContent, "Data sent successfully", res);
});

app.get("/content/:page", (req, res) => {
  const page = req.params.page;
  const data = dMainContent.filter((content) => content.page == page);

  response(200, data, `Data with page '${page}' sent successfully`, res);
});

app.get("/cost", (req, res) => {
  response(200, dCostPerCategory, "Data sent successfully", res);
});

app.get("/cost/:id", (req, res) => {
  const id = req.params.id;
  const data = dCostPerCategory.filter((cost) => cost.id == id);

  response(200, data, `Data with id '${id}' sent successfully`, res);
});

app.get("/profile/:id", (req, res) => {
  const id = req.params.id;
  const data = dProfile.filter((profile) => profile.id == id);

  response(200, data, `Data with id '${id}' sent successfully`, res);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
