const express = require("express");
const router = express.Router();
const Avaliacao = require("../Avaliacao/Avaliacao")

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
            res.json({             
                historico: historico
                });
            });     
})();

});

module.exports = router;