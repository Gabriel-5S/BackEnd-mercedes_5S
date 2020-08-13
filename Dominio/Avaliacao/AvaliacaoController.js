const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Avaliacao = require("../Avaliacao/Avaliacao");
//const Ranking = require("../Ranking/CriaRanking")

//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//match.js
const { create, all } = require('mathjs')
const config = { }
const math = create(all, config)

//define Form_id 
var Form_id = 0

//User_id 
var User_id = 0 

//Cost_center_id 
var Cost_center_id = 0

//Question_id_answer 
var Question_id_answer = {
    Question_id_answer_u: 0,
    Question_id_answer_o: 0,
    Question_id_answer_l: 0,
    Question_id_answer_p: 0,
    Question_id_answer_d: 0 
}

//Recebe dados do front de Form_id User_id e Cost_center_id
router.post("/avaliacao/id",(req,res) =>{  
    Form_id = req.body.Form_id;
    User_id = req.body.User_id;
    Cost_center_id = req.body.Cost_center_id;

    res.send("Form_id: " + Form_id + " User_id: " + User_id + " Cost_center_id: " + Cost_center_id)
});

//Recebe dados do Front (utilização) e armazena no Json (Question_id_answer)
router.post("/avaliacao/u",(req,res) =>{  
    var Question_id_answer_u = req.body.Question_id_answer_u;
    Question_id_answer.Question_id_answer_u = Question_id_answer_u
    res.send(Question_id_answer)
});

//Recebe dados do Front (organização) e armazena no Json (Question_id_answer)
router.post("/avaliacao/o",(req,res) =>{  //app.post
    var Question_id_answer_o = req.body.Question_id_answer_o;
    Question_id_answer.Question_id_answer_o = Question_id_answer_o
    res.send(Question_id_answer)
});

//Recebe dados do Front (limpeza) e armazena no Json (Question_id_answer)
router.post("/avaliacao/l",(req,res) =>{  //app.post
    var Question_id_answer_l = req.body.Question_id_answer_l;
    Question_id_answer.Question_id_answer_l = Question_id_answer_l
    res.send(Question_id_answer)
});

//Recebe dados do Front (padronização) e armazena no Json (Question_id_answer)
router.post("/avaliacao/p",(req,res) =>{  //app.post
    var Question_id_answer_p = req.body.Question_id_answer_p;
    Question_id_answer.Question_id_answer_p = Question_id_answer_p
    res.send(Question_id_answer)
});

//Recebe dados do Front (disciplina) e armazena no Json (Question_id_answer)
router.post("/avaliacao/d",(req,res) =>{  //app.post
    var Question_id_answer_d = req.body.Question_id_answer_d;
    Question_id_answer.Question_id_answer_d = Question_id_answer_d
    res.send(Question_id_answer)
});

// define Answer_average_x

var Answer_average_u = 0;
var Answer_average_o = 0;
var Answer_average_l = 0;
var Answer_average_p = 0;
var Answer_average_d = 0;
var Answer_average_3s = 3;
var Answer_average_5s = 5;



//Calcula Média de cada S e 5S e 3S
router.post("/calculamedia",(req,res) =>{


    Answer_average_l = math.mean(Question_id_answer.Question_id_answer_l.notas);
    Answer_average_o = math.mean(Question_id_answer.Question_id_answer_o.notas);
    Answer_average_u = math.mean(Question_id_answer.Question_id_answer_u.notas);
    Answer_average_p = math.mean(Question_id_answer.Question_id_answer_p.notas);
    Answer_average_d = math.mean(Question_id_answer.Question_id_answer_d.notas);

    Answer_average_3s = math.mean(Answer_average_u,Answer_average_o,Answer_average_l)
    Answer_average_5s = math.mean(Answer_average_u,Answer_average_o,Answer_average_l,Answer_average_p,Answer_average_d)

    res.send(Answer_average_u +  " " +  Answer_average_o +  " " +  Answer_average_l + " " +  Answer_average_p + " " +  Answer_average_d + " " +  Answer_average_3s + " " + Answer_average_5s)
});


//Salva no Banco de dados
router.post("/salvabd", (req,res) => {
   (async() =>{
    await Avaliacao.create({
        Form_id: Form_id,
        User_id: User_id,
        Cost_center_id: Cost_center_id,
        Question_id_answer: Question_id_answer,
        Answer_average_u: Answer_average_u,
        Answer_average_o: Answer_average_o,
        Answer_average_l: Answer_average_l,
        Answer_average_p: Answer_average_p,
        Answer_average_d: Answer_average_d,
        Answer_average_3s: Answer_average_3s,
        Answer_average_5s: Answer_average_5s
    });

    res.send("Enviado com sucesso!")
   })()
});

//Envia dados do BD pra Rota
router.get("/resultadoteste",(req,res) => {
    Avaliacao.findAll( {raw: true, order:[
        ['id','DESC'] //DESC = decrescente || ASC = crescente
    ]}).then(avaliacao => {

    res.json({             //Manda todas as notas da avaliação para o front, em ordem (mais recente primeiro).No front, iremos Usar fetch aqui?*/
        avaliacao: avaliacao
        });
    }); 
});

router.get("/resultados",(req,res) => {
    
    res.send({Form_id: Form_id,
        User_id: User_id,
        Cost_center_id: Cost_center_id, 
        Answer_average_u: Answer_average_u, 
        Answer_average_o: Answer_average_o,
        Answer_average_l: Answer_average_l, 
        Answer_average_p: Answer_average_p, 
        Answer_average_d: Answer_average_d, 
        Answer_average_3s: Answer_average_3s,
        Answer_average_5s: Answer_average_5s})
});

router.get("/avaliacaoid",(req,res) => {
    Avaliacao.findAll({
        attributes: ['id'],
        order: [['id','DESC']]
        }).then(avaliacaoid => {
            res.send(           
                avaliacaoid[0]
        )})
});

module.exports = router;