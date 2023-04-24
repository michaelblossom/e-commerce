const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");

const app = express();
app.use(morgan("dev"));

app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/product", productRouter);
// app.use("/api/v1/cart", cartRouter);
// app.use("/api/v1/order", orderRouter);
// app.use("/api/v1/users", userRouter);
module.exports = app;
