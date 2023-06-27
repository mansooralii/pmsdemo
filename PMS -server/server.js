const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
  };
app.use(cors(corsOptions));
//app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const Vendors_listRoute = require('./app/routes/Vendors_listc')
app.use('/Vendors_list',Vendors_listRoute)

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});



app.get('/', (req, res) => {
    res.json({"message": "Hello Server started"});
});

app.listen(3003, () => {
    console.log("Server is listening on port 3003");
});

