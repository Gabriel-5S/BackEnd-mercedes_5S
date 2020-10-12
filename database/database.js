const Sequelize = require('sequelize');

const connection = new Sequelize('bd5s','root','123456',{
    //host: '35.198.50.240',
    host: 'localhost',
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
