const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const restaurantRouter = require("./routes/Restaurant");
app.use("/restaurants", restaurantRouter);

const usersRouter = require("./routes/Users");
app.use("/signup", usersRouter);

const cartRouter = require("./routes/Cart");
app.use("/carts", cartRouter);

const contRouter = require("./routes/Contact");
app.use("/contact", contRouter);

// config the db in config folder so that it knows which db to use
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
