const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");


//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


module.exports = router;