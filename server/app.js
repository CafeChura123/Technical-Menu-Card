const express = require("express");
const dotenv = require("dotenv");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded());

dotenv.config({ path: "./config/config.env"});
require("./mongoDB/connection");

app.use(require("./routes/auth"));

app.listen(port, () => {
    console.log("Server Started at "+port);
});