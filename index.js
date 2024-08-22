const express = require("express");
const cors = require("cors");
const schoolRouter = require("./routes/schoolRouter");
const db = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

app.use("/", schoolRouter);
app.get("/", (req, res) => {
    res.send("eduCase");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
