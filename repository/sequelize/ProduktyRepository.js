const Produkty=require("../../model/sequelize/Produkty");
const SzczegolyZamowienia=require("../../model/sequelize/SzczegolyZamowienia");
const Zamowienia=require("../../model/sequelize/Zamowienia");

exports.getProdukty= () => {
    return Produkty.findAll();
}

exports.getProduktyById = (proId) =>{
    return Produkty.findByPk(proId,
        {
            include:[{
                model: SzczegolyZamowienia,
                as:`szczegolyZamowienia`,
                include:[{
                    model:Zamowienia,
                    as:`zamowienia`
                }]
            }]
        });
};

exports.createProdukty=(newProData) =>{
    return Produkty.create({
        nazwa:newProData.nazwa,
        cenaZaSztuke:newProData.cenaZaSztuke,
        wycofano:newProData.wycofano
    });
};

exports.updateProdukty = (proId, proData)=>{
    const nazwa=proData.nazwa;
    const cenaZaSztuke=proData.cenaZaSztuke;
    const wycofano=proData.wycofano;
    return Produkty.update(proData,{where: {_id: proId}});
};
exports.deleteProdukty =(proId) =>{
    return Produkty.destroy({
        where: {_id: proId}
    });
};