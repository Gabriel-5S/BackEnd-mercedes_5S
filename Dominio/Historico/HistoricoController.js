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


module.exports = router;