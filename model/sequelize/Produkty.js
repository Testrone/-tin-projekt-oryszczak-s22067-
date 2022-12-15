const Sequelize =require('sequelize');
const sequelize =require('../../config/sequelize/sequelize');


const Produkty=sequelize.define('Produkty',{

    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nazwa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cenaZaSztuke:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    wycofano:{
        type:Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = Produkty;