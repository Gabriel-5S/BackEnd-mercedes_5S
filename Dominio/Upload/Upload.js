const Sequelize = require("sequelize");
const connection = require("../../database/database");

/*Criação da Tabela Avaliação, com Form_id(text), Cost_center_id(text), Question_id_answer(array(int), Answer_average(array(float))*/
const Upload = connection.define("Image",{
    avaliacaoId: {
        type: Sequelize.STRING
    }, 
    titulo: {
        type: Sequelize.STRING
    }, 
    img: {
        type: Sequelize.TEXT
    }
});

/*
Upload.sync({force: false}).then(() => {
    console.log("Tabela Image Criada!")
});
*/
module.exports = Upload;