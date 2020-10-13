const Sequelize = require('sequelize');

//const connection = new Sequelize('bd5s','root','123456',{
const connection = new Sequelize('iuuf2aiojaxzj540','gsgda6atkp8hd6ud','d9t6dur4ht6emcgh',{
    //host: '35.198.50.240',
    host: 's554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    //host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      typeCast: function (field, next) {
        if(field.type === 'DATETIME') {
          return field.string()
        }
          return next()
        }
      //timezone: "+03:00",
      //useUTC: false, // for reading from database
    },
    timezone: '-03:00', // for writing to database
}); 

module.exports = connection;
