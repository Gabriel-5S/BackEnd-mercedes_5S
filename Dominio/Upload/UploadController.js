const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Upload = require("./Upload");

//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post("/image", (req, res) => {
    var img = req.body.img
    (async() =>{
        await Upload.create({
            img: img
        });

    res.send("Imagem salva com sucesso!");

})});



module.exports = router;