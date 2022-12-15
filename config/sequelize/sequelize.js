const Sequelize = require('sequelize');

const sequelize=new Sequelize('tin-projekt-oryszczak-s22067','root','root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3309
});

module.exports = sequelize;