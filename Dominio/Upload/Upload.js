const Sequelize = require("sequelize");
const connection = require("../../database/database");

const Upload = connection.define("image",{
    avaliacaoId: {
        type: Sequelize.STRING
    }, 
    titulo: {
        type: Sequelize.STRING
    }, 
    image: {
        type: Sequelize.TEXT
    }
});

/*
Upload.sync({force: false}).then(() => {
    console.log("Tabela image Criada!")
});
*/

module.exports = Upload;