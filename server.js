const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require('./routes/api/items');
const app = express();

app.use(bodyParser.json());

//Mongo db URI key
const database = require("./config/keys").mongoURI;

//connect backend with database
mongoose
.connect(database, {useNewUrlParser: true})
.then((() => console.log("connected to database")))
.catch(err => console.log(err));

// Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));

