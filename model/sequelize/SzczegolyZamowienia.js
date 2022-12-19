const Sequelize =require('sequelize');
const sequelize =require('../../config/sequelize/sequelize');


const SzczegolyZamowienia=sequelize.define('OrderDetails',{

    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    zamowienie_id:{
        type:Sequelize.INTEGER,
        allowNull: true
    },
    produkty_id:{
        type:Sequelize.INTEGER,
        allowNull: true
    },
    Ilosc:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Rabat:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

});

module.exports = SzczegolyZamowienia;