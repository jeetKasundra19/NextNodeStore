require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const routers = require("./routers");
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(cors());



app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (e) => {
    if (e) {
        console.error(e);
    } else {
        console.log(`App running on port ${PORT}`);
    }
});

module.exports = app;