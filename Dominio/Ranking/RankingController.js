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

module.exports = router;