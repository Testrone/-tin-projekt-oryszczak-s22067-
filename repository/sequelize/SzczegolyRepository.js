const Sequelize=require('sequelize');

const Produkty=require("../../model/sequelize/Produkty");
const SzczegolyZamowienia=require("../../model/sequelize/SzczegolyZamowienia");
const Zamowienia=require("../../model/sequelize/Zamowienia");

exports.getSzczegoly= () => {
    return SzczegolyZamowienia.findAll({include: [
            {
                model: Produkty,
                as: 'produkty'
            },
            {
                model: Zamowienia,
                as: 'zamowienia'
            }]
    });

};

exports.getSzczegolyById = (szczId) =>{
    return SzczegolyZamowienia.findByPk(szczId, {
        include: [
            {
                model: Produkty,
                as: 'produkty'
            },
            {
                model: Zamowienia,
                as: 'zamowienia'
            }]
    });
};

exports.createSzczegoly=(data) =>{
    console.log(JSON.stringify(data));

    return SzczegolyZamowienia.create({
        produkty_id:data.produkty_id,
        zamowienie_id:data.zamowienie_id,
        Ilosc:data.Ilosc,
        Rabat:data.Rabat
    });
};

exports.updateSzczegoly = (szczId, data)=>{

    return SzczegolyZamowienia.update(data,{where: {_id: szczId}});
};
exports.deleteSzczegoly =(szczId) =>{
    return SzczegolyZamowienia.destroy({
        where: {_id: szczId}
    });
};

exports.deleteManySzczegoly=(szczIds)=>{
    return SzczegolyZamowienia.find({_id:{[Sequelize.Op.in]: szczIds}})
}