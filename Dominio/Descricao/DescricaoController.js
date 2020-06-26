const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Descricoes = require("./CriaDescricoes");

//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Envia json com as 20 descrições de notas do S requisitado pelo front
router.post("/descricao/:s", (req, res) => {
    (async () =>{
        descricaoJson = {};
        var s = parseFloat(req.params.s);
        var i = 0
        var ii = 0

        for (i = s + 0.1; i < s + 0.49; i += 0.1) {
            ii = i.toFixed(1)
            await Descricoes.findAll({
                where: { descricao_id: ii 
                },
                order: [
                    ['descricao_id', 'ASC'],
                    ['nota', 'ASC'],
                ],
                attributes: ['descricao_id', 'nota','descricao']
            } 
            ).then(descricao => {
                descricaoJson[ii] = descricao
            });
        };
        return res.send(descricaoJson);
    })()
});



module.exports = router;