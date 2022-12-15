const Sequelize =require('sequelize');
const sequelize =require('../../config/sequelize/sequelize');


const Zamowienie=sequelize.define('Zamowienie',{

    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    klient:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nipKlienta:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dataZamowienia:{
        type:Sequelize.DATE,
        allowNull: true
    }
});

module.exports = Zamowienie;