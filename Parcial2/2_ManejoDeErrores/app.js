import express from "express";
import router from "./router/index.js";
const PORT = 3000;


import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());

app.use("/", router);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
