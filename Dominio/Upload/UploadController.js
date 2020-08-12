const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Upload = require("./Upload");

//Body-Parser
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(bodyParser.json({limit:'50mb',extende:true}));

router.post("/image", (req, res) => {       

    //var avaliacaoId = req.body.avaliacaoId
    //var titulo = req.body.titulo
    var image = req.body.image

    Upload.create({
            //avaliacaoId: avaliacaoId,
            //titulo: titulo,
            image: image
        });

    res.send("Imagem salva com sucesso!");

});

module.exports = router;
