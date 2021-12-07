const express = require("express");
const dotenv = require("dotenv");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded());

dotenv.config({ path: "./Config/config.env"});
require("./Connection/connection");

app.use(require("./Admin/routes/auth"));

app.listen(port, () => {
    console.log("Server Started at "+port);
});