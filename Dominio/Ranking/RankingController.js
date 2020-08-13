const express = require("express");
const router = express.Router();
const Avaliacao = require("../Avaliacao/Avaliacao")

router.get("/ranking/:x",(req, res) => {
    (async () => {
            var x = req.params.x;
            var Answer_average_x = 'Answer_average_' + x;
            var Cost_center_Avg_x = "Cost_center_Avg_" + x;
            await Avaliacao.findAll({
            attributes: ['Cost_center_id', [Avaliacao.sequelize.fn('AVG', 
            Avaliacao.sequelize.col(Answer_average_x)), Cost_center_Avg_x]],
            group: ['Cost_center_id'],
            order: [[Avaliacao.sequelize.fn('AVG', Avaliacao.sequelize.col(Answer_average_x)), 'DESC']]
            }).then(ranking => {
                res.send(           
                    ranking
                    );
                });     
    })();
});

//Envia as notas 5S de um único Centro de custo (para fazer o gráfico)
router.get("/ranking/5s/:Cost_center_id", (req,res) => {
    (async () => {
        var w = []
        var Cost_center_id = req.params.Cost_center_id;
        await Avaliacao.findAll({
        where: {Cost_center_id: Cost_center_id},
        attributes: ['id','Cost_center_id', 'Answer_average_5s', 'createdAt' ],
        order: [['createdAt', 'ASC']]
        //order: [['createdAt', 'DESC']]
        }).then(ranking => {
            for (i=0; i< ranking.length; i++) {    
                var y = ranking[i]['Answer_average_5s']
                console.log(y)
                w.push(y)
                }
        });
        return res.send(w);
        })();
});


module.exports = router;