const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser")

const aboutRouter = require("./routes/about");
const locationRouter = require("./routes/location");

const PORT = process.env.QA_PORT;
const HOST_NAME = process.env.QA_HOST_NAME;

const app = express();
app.use(cors());
app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/location", locationRouter);
app.use("/about", aboutRouter);


app.listen(PORT, HOST_NAME, () => {
    console.log(`Server running at ${HOST_NAME}:${PORT}`)
})