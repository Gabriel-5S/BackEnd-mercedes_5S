const express = require("express");
const router = express.Router();
const Avaliacao = require("../Avaliacao/Avaliacao");
const Upload = require("../Upload/Upload");

router.get("/historico/:x/:order/:a_d", (req,res) => {
    (async () => {
        /* USAR .POST
        var x = req.body.x;
        var Answer_average_x = 'Answer_average_' + x;
        var order = req.body.order;
        var a_d = req.body.a_d;
        */

        var x = req.params.x;
        var Answer_average_x = 'Answer_average_' + x;
        var order = req.params.order;
        var a_d = req.params.a_d;

        await Avaliacao.findAll({
        attributes: ['id','Cost_center_id', Answer_average_x, 'createdAt' ],
        order: [[order, a_d]]
        //order: [['createdAt', 'DESC']]
        }).then(historico => {
            res.send(             
                historico
                );
            });     
})();

});

// //Envia as notas 5S de um único Centro de custo (para fazer o gráfico)
// router.get("/ranking/5s/:Cost_center_id", (req,res) => {
//     (async () => {

//         var Cost_center_id = req.params.Cost_center_id;
//         await Avaliacao.findAll({
//         where: {Cost_center_id: Cost_center_id},
//         attributes: ['id','Cost_center_id', 'Answer_average_5s', 'createdAt' ],
//         order: [['createdAt', 'ASC']]
//         //order: [['createdAt', 'DESC']]
//         }).then(historico => {
//             res.send(             
//                 historico
//                 );
//             });     
// })();

// });

router.get("/hist_image/:id", (req, res) => {
    var id = req.params.id
    Upload.findOne({
        where: {id: id}  //Verificando se há a imagem
    }).then(json => {            //A variável json recebe o resultado de .findOne: se encontrar recebe o JSON, caso contrário recebe undefined
        if (json != undefined){ 
            res.send(json.image); 
        }else{
            res.sendStatus(404);
        }
    })
});

router.get("/avaliacao/:createdAt/:Question_id_answer_S",(req,res) =>{  
    (async () => {    
        var createdAt = req.params.createdAt;
        var Question_id_answer_S = req.params.Question_id_answer_S;
        await Avaliacao.findOne ({
            where: {createdAt : createdAt}
        }).then(resultado => {
            var notas = resultado.Question_id_answer[Question_id_answer_S].notas
            var justificativas = resultado.Question_id_answer[Question_id_answer_S].justificativas
        }); 
        return res.send({notas: notas, justificativas: justificativas})
    })();
});


module.exports = router;