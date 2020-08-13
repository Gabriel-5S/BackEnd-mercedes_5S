const express = require("express");
const app = express();
const router = express.Router();
const Avaliacao = require("../Avaliacao/Avaliacao");
const Upload = require("../Upload/Upload");

//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.get("/avaliacao/:createdAt/:Question_id_answer_S",(req,res) =>{  
    (async () => {    
        var createdAt = req.params.createdAt;
        var Question_id_answer_S = req.params.Question_id_answer_S;
        await Avaliacao.findOne ({
            where: {createdAt : createdAt}
        }).then(notas => {
            var notas = Question_id_answer.Question_id_answer_S.notas
        }); 
        return res.send(notas)
    })();
});