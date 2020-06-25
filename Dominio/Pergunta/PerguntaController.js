const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Pergunta = require("./CriaPerguntas");


//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Será melhor enviar pergunta por pergunta? Ou enviar um JSON com as 4 perguntas por página?
router.post("/pergunta", (req, res) => {
    var s = req.body.s;
    Pergunta.findAll({
        where: {s : s
        },
        order: [
            ['titulo', 'ASC']
        ],
        attributes: ['titulo','descricao']
    } 
    ).then(pergunta => {
        if(pergunta != undefined){
            res.send(pergunta);
        }else{
            res.sendStatus(404);  //Não encontrado
        }
    })
});

module.exports = router;